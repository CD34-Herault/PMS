import { Component, OnInit } from '@angular/core';
import { HistoriqueService } from '@modules/historique/services';
import { NgbCalendar, NgbDate, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent implements OnInit {
  
  hoveredDate: NgbDate | null = null;

  fromDate: NgbDate | null;
  toDate: NgbDate | null;

  constructor(private calendar: NgbCalendar, public formatter: NgbDateParserFormatter, public historiqueService: HistoriqueService) { 
    this.fromDate = null;
    this.toDate = null;
  }

  

  onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && date && date.after(this.fromDate)) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }
  }

  isHovered(date: NgbDate) {
    return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) &&
        date.before(this.hoveredDate);
  }

  isInside(date: NgbDate) { return this.toDate && date.after(this.fromDate) && date.before(this.toDate); }

  isRange(date: NgbDate) {
    return date.equals(this.fromDate) || (this.toDate && date.equals(this.toDate)) || this.isInside(date) ||
        this.isHovered(date);
  }

  validateInput(currentValue: NgbDate | null, input: string): NgbDate | null {
    const parsed = this.formatter.parse(input);
    return parsed && this.calendar.isValid(NgbDate.from(parsed)) ? NgbDate.from(parsed) : currentValue;
  }

  public eventChange(){
    if(this.fromDate == null){
      this.historiqueService.dateSelected_debut = null;
    }
    else{
      this.historiqueService.dateSelected_debut = new Date(this.fromDate.year, this.fromDate.month - 1, this.fromDate.day);
    }

    if(this.toDate ==null){
      this.historiqueService.dateSelected_fin = null;
    }
    else{
      this.historiqueService.dateSelected_fin = new Date(this.toDate.year, this.toDate.month - 1, this.toDate.day);
    }
    
  }

  ngOnInit(): void {

    // let today = new Date();
    // let ngb_today = new NgbDate(today.getFullYear(),today.getMonth()+1,today.getDate());

    // today.setDate(today.getDate()-93)
    // let ngb_avant = new NgbDate(today.getFullYear(),today.getMonth()+1,today.getDate());
    
    // this.onDateSelection(ngb_avant);
    // this.onDateSelection(ngb_today);
    // this.eventChange();
  }

}
