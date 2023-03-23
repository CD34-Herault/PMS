import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CalendrierService } from '@modules/calendrier/services';
import { serv_exclu } from '@modules/exclusions/models';
import { ExclusionsService } from '@modules/exclusions/services';
import { AuthentificationService } from '@modules/generic-services/authentification.service';
import { plannification_exceptionnel } from '@modules/plannification-exceptionnel/models';
import { PlannificationExceptionnelService } from '@modules/plannification-exceptionnel/services/plannification-exceptionnel.service';
import { ServeursDirective, SortEvent } from '@modules/serveurs/directives';
import {  Serveur } from '@modules/serveurs/models';
import { ServeursService } from '@modules/serveurs/services';
import { ModalDismissReasons, NgbDate, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CalendarEvent } from 'angular-calendar';
import { BehaviorSubject, Observable } from 'rxjs';



@Component({
  selector: 'serveur-table',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './serveurs.component.html',
  styleUrls: ['./serveurs.component.scss']
})


export class ServeursComponent implements OnInit {

  @Input() pageSize = 4;

  serveurs_exclu: serv_exclu[] = [];
  serveurs$!: Observable<Serveur[]>;
  plannifs$!: Observable<plannification_exceptionnel[]>;
  total$!: Observable<number>;
  total_maj$!: Observable<number>;
  @Input() sortedColumn!: string;
  @Input() osSelected!:  BehaviorSubject<string>;
  @Input() searchBar: boolean = true;
  @Input() pageBar: boolean = true;
  @Input() checkbox: boolean = true;
  @Input() sortable: boolean = true;
  @Input() sort!: SortEvent;
  sortedDirection!: string;

  masterSelected:boolean;
  checklist: Array<any>;
  checkedList: Array<Serveur>;

  reponse_maj = new BehaviorSubject<String>('');
  closeResult = '';

  date_plannif: NgbDate | undefined;
  horaire_debut: string = "19:00";
  horaire_fin: string = "23:00";

  envForm: string = 'Production';

  @ViewChildren(ServeursDirective) headers!: QueryList<ServeursDirective>;

  constructor(
      public exclusionsService: ExclusionsService, 
      public serveurService: ServeursService,
      public plannificationService: PlannificationExceptionnelService,
      public calendrierService: CalendrierService,
      public auth: AuthentificationService,
      private changeDetectorRef: ChangeDetectorRef,
      private modalService: NgbModal
  ) {this.masterSelected = false; this.checklist = []; this.checkedList = []}

  ngOnInit() {



    this.exclusionsService.getExclusions().subscribe(res => {
      this.serveurs_exclu = res;
    });

    if(this.sort != undefined){
      this.onSort(this.sort);
    }

    this.osSelected.subscribe(val =>{   
      this.serveurService.OSSelected = val;
      if(val.split("_")[1] != undefined && val.split("_")[1] != "All"){
        this.serveurService.typeselected = val.split("_")[1];
      }
    })

    this.serveurService.pageSize = this.pageSize;
    this.serveurs$ = this.serveurService.serveurs$;
    this.total$ = this.serveurService.total$;
    this.total_maj$ = this.serveurService.total_maj$;
    this.plannifs$ = this.plannificationService.getPlannifications();
   

    this.serveurs$.subscribe(res => {
      this.checklist = []
      this.masterSelected = false;
      res.forEach(serv => {
        this.checklist.push({serveur: serv, isSelected: false});
      });
      this.getCheckedItemList();
    });

  }


  onSort({ column, direction }: SortEvent) {
      this.sortedColumn = column;
      this.sortedDirection = direction;
      this.serveurService.sortColumn = column;
      this.serveurService.sortDirection = direction;
      this.changeDetectorRef.detectChanges();
  }

  // The master checkbox will check/ uncheck all items
  checkUncheckAll() {
    console.log("dans checkuncheckAll");
    console.log("Taille: "+this.checklist.length);
    for (var i = 0; i < this.checklist.length; i++) {
      this.checklist[i].isSelected = this.masterSelected;
    }
    this.getCheckedItemList();
  }

  // Check All Checkbox Checked
  isAllSelected() {
    this.masterSelected = this.checklist.every(function(item:any) {
        return item.isSelected == true;
      })
    this.getCheckedItemList();
  }

  // Get List of Checked Items
  getCheckedItemList(){
    this.checkedList = [];
    for (var i = 0; i < this.checklist.length; i++) {
      if(this.checklist[i].isSelected)
      this.checkedList.push(this.checklist[i].serveur);
    }
   
  }

  // Planification
  plannification(){
     this.plannificationService.plannification(this.checkedList,this.auth.user.value.name,this.horaire_debut,this.horaire_fin,this.date_plannif).subscribe(res => {
      // Récupération des calendrier pour ajout dans calendrier
      this.calendrierService.get_calendrier().subscribe(cals => {
        let calendrier = cals.find((cal) => cal.name.match("Exceptionnel"))
        if(calendrier != undefined){
          let startDate = new Date(this.date_plannif!.year, this.date_plannif!.month -1, this.date_plannif!.day);
          startDate.setHours(1);
          let endDate = new Date(this.date_plannif!.year, this.date_plannif!.month -1, this.date_plannif!.day);
          endDate.setHours(6);
          
          let event: CalendarEvent = {
            title: 'Planification Exceptionnel',
            start: startDate,
            resizable: {
              beforeStart: true,
              afterEnd: true,
            },
            end: endDate,
            color: {
              primary: calendrier.couleurs.primaire,
              secondary: calendrier.couleurs.secondaire,
            },
            actions: [
              {
              label: "<small>supprimer</small>",
              a11yLabel: "Delete",
              onClick({ event, sourceEvent, }) {
                
              },
              }
            ]
          };

          // Ajout dans calendrier
          this.calendrierService.put_dates(event,calendrier._id!).subscribe(res2 => {
            this.reponse_maj.next(res);
          });
        }
      }); 
     });
  }

  getNbrJoursRapport(date: string){
    //console.log("date: "+date);
    
    var date_split = date.split("/");

    var q = new Date();
    var m = q.getMonth()+1;
    var d = q.getDate();
    var y = q.getFullYear();

    var date_now = new Date(''+y+'/'+m+'/'+d);

    var date2=new Date(date_split[2]+'/'+date_split[1]+'/'+date_split[0]);
   


    var Diff_temps = date_now.getTime() - date2.getTime(); 
    var Diff_jours = Diff_temps / (1000 * 3600 * 24);
    //console.log("laaa: "+Math.round(Diff_jours)); 
    return Math.round(Diff_jours); 

  }

  open(content: any) {
    this.modalService.open(content, { centered: true }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  count_prod(tab: plannification_exceptionnel): number {
    let cnt = 0;
    tab.plannifs.forEach(element => {
      if(element.type == "Production"){
        cnt++;
      }
    });
    return cnt;
  }

  count_pre(tab: plannification_exceptionnel): number {
    let cnt = 0;
    tab.plannifs.forEach(element => {
      if(element.type == "Pre-production"){
        cnt++;
      }
    });
    return cnt;
  }

  count_rec(tab: plannification_exceptionnel): number {
    let cnt = 0;
    tab.plannifs.forEach(element => {
      if(element.type == "Recette-Formation"){
        cnt++;
      }
    });
    return cnt;
  }

  count_bdd(tab: plannification_exceptionnel): number {
    let cnt = 0;
    tab.plannifs.forEach(element => {
      if(element.type == "BDD"){
        cnt++;
      }
    });
    return cnt;
  }

  count_bdd_rec(tab: plannification_exceptionnel): number {
    let cnt = 0;
    tab.plannifs.forEach(element => {
      if(element.type == "BDD-Recette"){
        cnt++;
      }
    });
    return cnt;
  }

  count_dmz(tab: plannification_exceptionnel): number {
    let cnt = 0;
    tab.plannifs.forEach(element => {
      if(element.type == "DMZ"){
        cnt++;
      }
    });
    return cnt;
  }

  checkExclu(serv:Serveur): Boolean{
    if(this.serveurs_exclu.find((val) => val.name.match(serv.fullName)) != undefined){
      return true;
    }
    else{
      return false;
    }
  }

  fixeServer(){
    this.checkedList[0].type = this.envForm;
    this.serveurService.put_serveursFixed(this.checkedList[0]).subscribe(res=> {
      alert(res);
    })
  }

}
