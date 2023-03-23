import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
    selector: 'sb-dashboard-tables',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './dashboard-tables.component.html',
    styleUrls: ['dashboard-tables.component.scss'],
})
export class DashboardTablesComponent implements OnInit {
  
    os = new BehaviorSubject<string>('All');

    @Input() site!:  BehaviorSubject<string>;

    constructor() {}
    ngOnInit() {
        this.site.subscribe(val =>{
            if(val == "mic"){
                this.os.next('College_All');
            }   
            else{
                this.os.next('All');
            }
        })
      
    }
}
