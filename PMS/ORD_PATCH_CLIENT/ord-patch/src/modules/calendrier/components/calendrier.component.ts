import { ChangeDetectionStrategy,Component, OnInit,ViewEncapsulation,ChangeDetectorRef, ViewChild, TemplateRef  } from '@angular/core';
import { AuthentificationService } from '@modules/generic-services/authentification.service';
import { plannification_exceptionnel } from '@modules/plannification-exceptionnel/models';
import { PlannificationExceptionnelService } from '@modules/plannification-exceptionnel/services';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CalendarEvent, CalendarEventAction, CalendarEventTimesChangedEvent, CalendarEventTitleFormatter, CalendarMonthViewDay, CalendarView } from 'angular-calendar';
import { WeekViewHourSegment } from 'calendar-utils';
import { thresholdFreedmanDiaconis } from 'd3';
import { addDays, addHours, addMinutes, differenceInDays, endOfDay, endOfMonth, endOfWeek, isSameDay, isSameMonth, startOfDay, subDays } from 'date-fns';
import { BehaviorSubject, fromEvent, Subject } from 'rxjs';
import { finalize, takeUntil } from 'rxjs/operators';
import { Calendrier, Colors } from '../models';
import { CalendrierService } from '../services';


function floorToNearest(amount: number, precision: number) {
  return Math.floor(amount / precision) * precision;
}


function ceilToNearest(amount: number, precision: number) {
  return Math.ceil(amount / precision) * precision;
}

const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3',
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF',
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA',
  },
};


@Component({
  selector: 'app-calendrier',
  templateUrl: './calendrier.component.html',
  styleUrls: ['./calendrier.component.css'],
  styles: [
    `
      h3 {
        margin: 0 0 10px;
      }

      pre {
        background-color: #f5f5f5;
        padding: 15px;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: CalendarEventTitleFormatter,
    },
  ],
  encapsulation: ViewEncapsulation.None,
})
export class CalendrierComponent implements OnInit {
  @ViewChild('modalContent', { static: true }) modalContent!: TemplateRef<any>;
  @ViewChild('modalCreate', { static: true }) modalCreate!: TemplateRef<any>;
  @ViewChild('modalDate', { static: true }) modalDate!: TemplateRef<any>;
  @ViewChild('modalTimeline', { static: true }) modalTimeline!:TemplateRef<any>;
  @ViewChild('modalExceptionnel', { static: true }) modalExceptionnel!:TemplateRef<any>;

  locale: string = "fr";

  nameNewCalendar: string = 'New Calendar';
  fullNameNewCalendar: string = "Full name";
  couleurPrimaireNewCalendar: string = '#FF0000';
  couleurSecondaireNewCalendar: string = '#990000';
  idDeleted: string = '';
  selectedMonthViewDay?: CalendarMonthViewDay;
  selectedDays: any = [];


  selectedCalendar: string = '';

  view: CalendarView = CalendarView.Month;

  CalendarView = CalendarView;

  viewDate: Date = new Date();

  dragToCreateActive = false;
  weekStartsOn: 0 = 0;

  modalData!: {
    action: string;
    event: CalendarEvent;
  };
  modalTimelineData!:{
    cal: Calendrier;
    event: CalendarEvent;
  };
  modalExceptionnelData!:{
    cal:Calendrier;
    event: CalendarEvent;
    plannif: plannification_exceptionnel;
  }


  actions: CalendarEventAction[] = [
    // {
    //   label: "",
    //   a11yLabel: 'Edit',
    //   onClick: ({ event }: { event: CalendarEvent }): void => {
    //     this.handleEvent('Edited', event);
    //   },
    // },
    {
      label: '<small>supprimer</small>',
      a11yLabel: 'Delete',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.calendrierService.deleteEvent(event).subscribe(res =>{
          
          if(event.title == "Planification Exceptionnel"){
            this.ExceptionService.supressionPlannification(event.id!.toString()).subscribe(res => {
              alert("Supression Terminée");
            })
          }
          this.ngOnInit();
        })
      },
    },
  ];

  refresh = new Subject<void>();

  events: CalendarEvent[] = [
    
  ];

  activeDayIsOpen: boolean = true;

  calendriers = new BehaviorSubject<Calendrier[]>([]);

  externalEvents: CalendarEvent[] = [
    {
      title: 'Event 1',
      color: colors.yellow,
      start: new Date(),
      draggable: true,
    },
    {
      title: 'Event 2',
      color: colors.blue,
      start: new Date(),
      draggable: true,
    },
  ];


  constructor(private modal: NgbModal,public calendrierService: CalendrierService,private cdr: ChangeDetectorRef, public auth: AuthentificationService, private ExceptionService: PlannificationExceptionnelService) {}

  eventDropped({
    event,
    newStart,
    newEnd,
    allDay,
  }: CalendarEventTimesChangedEvent): void {
    const externalIndex = this.externalEvents.indexOf(event);
    if (typeof allDay !== 'undefined') {
      event.allDay = allDay;
    }
    if (externalIndex > -1) {
      this.externalEvents.splice(externalIndex, 1);
      this.events.push(event);
    }
    event.start = newStart;
    if (newEnd) {
      event.end = newEnd;
    }
    if (this.view === 'month') {
      this.viewDate = newStart;
      this.activeDayIsOpen = true;
    }
    this.events = [...this.events];
  }

  externalDrop(event: CalendarEvent) {
    if (this.externalEvents.indexOf(event) === -1) {
      this.events = this.events.filter((iEvent) => iEvent !== event);
      this.externalEvents.push(event);
    }
  }
  
  ngOnInit(): void {

    this.calendrierService.get_calendrier().subscribe(res => {
      this.auth.isAdmin.subscribe(resAdmin => {
        this.calendriers.next(res);
        this.events = [];
        res.forEach(calendrier => {
          calendrier.dates.forEach(date => {
            date.start = new Date(date.start);
            if(date.end){
              date.end = new Date(date.end);
            }        
            if(resAdmin == true){
              date.actions = this.actions;
            }
          
            this.events.push(date);
            this.refresh2();
          });
        });
      });

    });
  }

  dayClicked(day: CalendarMonthViewDay): void {
    if (isSameMonth(day.date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, day.date) && this.activeDayIsOpen === true)
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
      this.viewDate = day.date;
    }
  }
  beforeMonthViewRender({ body }: { body: CalendarMonthViewDay[] }): void {
    body.forEach((day) => {
      if (
        day.events.length > 0
      ) {
        day.backgroundColor = day.events[0].color?.secondary;
        day.badgeTotal = 0;
    
      }
    });
  }
  eventTimesChanged({
    event,
    newStart,
    newEnd,
  }: CalendarEventTimesChangedEvent): void {
    this.events = this.events.map((iEvent) => {
      if (iEvent === event) {
        return {
          ...event,
          start: newStart,
          end: newEnd,
  
        };
      }
      return iEvent;
    });
    this.handleEvent('Dropped or resized', event);
  }

  handleEvent(action: string, event: CalendarEvent): void {
    this.modalData = { event, action };
    let cal_find = this.calendriers.getValue().find((cal) => cal.dates.includes(event));

    if(event.title.includes("Planification Exceptionnel")){
      let plannif_find = this.ExceptionService.getPlannification(event.id!.toString()).subscribe(res => {
        this.modalExceptionnelData = {cal: cal_find!, event: event, plannif: res};
        this.modal.open(this.modalExceptionnel, {centered: true, animation: true, scrollable: true });
      });
      
    }
    else{
      this.modalTimelineData = {cal: cal_find!, event: event}; 
      this.modal.open(this.modalTimeline, {size: 'xl', centered: true, animation: true, scrollable: true });
    }
    
  }

  addEvent(): void {
    this.events = [
      ...this.events,
      {
        title: 'New event',
        start: startOfDay(new Date()),
        end: endOfDay(new Date()),
        color: colors.red,
        draggable: true,
        resizable: {
          beforeStart: true,
          afterEnd: true,
        },
      
      },
    ];
  }

  deleteEvent(eventToDelete: CalendarEvent) {
    this.events = this.events.filter((event) => event !== eventToDelete);
  }


  setView(view: CalendarView) {
    this.view = view;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }

  startDragToCreate(
    segment: WeekViewHourSegment,
    mouseDownEvent: MouseEvent,
    segmentElement: HTMLElement
  ) {
    //console.log("laaa: "+segment.date);
    //console.log("laaa2: "+segment.displayDate);
    //console.log("laaa3: "+segment.isStart);
    const dragToSelectEvent: CalendarEvent = {
      id: this.events.length,
      title: 'New event',
      start: segment.date,
      meta: {
        tmpEvent: true,
      },
      resizable: {
        beforeStart: true,
        afterEnd: true,
      },
      
      //draggable: true,
    };
    //console.log("test: "+dragToSelectEvent.start+" :: "+dragToSelectEvent.end);
    this.events = [...this.events, dragToSelectEvent];
    const segmentPosition = segmentElement.getBoundingClientRect();
    this.dragToCreateActive = true;
    const endOfView = endOfWeek(this.viewDate, {
      weekStartsOn: this.weekStartsOn,
    });

    fromEvent(document, 'mousemove')
      .pipe(
        finalize(() => {
          delete dragToSelectEvent.meta.tmpEvent;
          this.dragToCreateActive = false;
          this.modal.open(this.modalDate, { centered: true });
         
        }),
        takeUntil(fromEvent(document, 'mouseup'))
      )
      .subscribe((mouseMoveEvent: any) => {
        const minutesDiff = ceilToNearest(
          mouseMoveEvent.clientY - segmentPosition.top,
          30
        );
        //console.log("test1: "+dragToSelectEvent.start+" :: "+dragToSelectEvent.end);
        const daysDiff =
          floorToNearest(
            mouseMoveEvent.clientX - segmentPosition.left,
            segmentPosition.width
          ) / segmentPosition.width;

        const newEnd = addDays(addMinutes(segment.date, minutesDiff), daysDiff);
        if (newEnd > segment.date && newEnd < endOfView) {
          dragToSelectEvent.end = newEnd;
        }
        //console.log("test2: "+dragToSelectEvent.start+" :: "+dragToSelectEvent.end);
        this.refresh2();
      });
  }

  public refresh2() {
    this.events = [...this.events];
    this.cdr.detectChanges();
  }

  addDate(){
    const dragToSelectEvent= this.events[this.events.length-1];
    this.calendriers.getValue().forEach(calendrier => {
      if(calendrier._id == this.selectedCalendar){
        if(calendrier.full_name != undefined){
          dragToSelectEvent.title = calendrier.full_name;
        }
        else{
          dragToSelectEvent.title = calendrier.name;
        }
        dragToSelectEvent.color = {primary: calendrier.couleurs.primaire, secondary: calendrier.couleurs.secondaire};
      
      }
    });
    this.events.pop();
    this.events.push(dragToSelectEvent);
    this.refresh2();
    this.calendrierService.put_dates(dragToSelectEvent,this.selectedCalendar).subscribe(res => {
      alert(res);
    });
  }

  createCalendar(){
    let cal = new Calendrier();
    cal.name = this.nameNewCalendar;
    cal.full_name = this.fullNameNewCalendar;
    cal.couleurs.primaire = this.couleurPrimaireNewCalendar;
    cal.couleurs.secondaire = this.couleurSecondaireNewCalendar;
    this.calendrierService.put_calendrier(cal).subscribe(res => {
      alert(res);
      this.ngOnInit();
    })
  }

  deleteCalendar(_id: string){
    this.calendrierService.supressionCalendrier(_id).subscribe(res => {
      alert(res);
      this.ngOnInit();
    })
  }

  open(content: any) {
    this.modal.open(content, { centered: true });
  }

  openDelete(content: any,_id: string) {
    this.idDeleted = _id;
    this.modal.open(content, { centered: true, });
  }

  onChange(_idCalendar: string) {
    let cal = this.calendriers.getValue();
    
    if (cal.find(cal => cal._id == _idCalendar)!.actif) {
      cal.forEach(element => {
        if(element._id == _idCalendar){
          this.events = this.events.concat(element.dates);
        }
      });
      
    } else {
      cal.forEach(element => {
        if(element._id == _idCalendar){
          this.events = this.events.filter(event => !element.dates.includes(event));
        }
      });
      
    }
    this.refresh2();
  }

  changeColor(_id: string, color: Colors){
    this.calendrierService.updateCalendrier(_id,color).subscribe(res => {
      if(res == "OK"){
        this.ngOnInit();
      }
    });
  }


}

