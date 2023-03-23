import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Component({
    selector: 'sb-dashboard',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './dashboard.component.html',
    styleUrls: ['dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

    osSelect = new BehaviorSubject<string>("All");
    title =  new BehaviorSubject<string>("Dashboard Alco");

    constructor( private route: ActivatedRoute) {}
    ngOnInit() {

        this.route.params.subscribe((params: Params) => {
            if(params['Site'] != undefined){
              this.osSelect.next(params['Site']);
              if(params['Site'] == "alco"){
                this.title.next("Dashboard Alco"); 
              }
              else if (params['Site'] == "mic"){
                this.title.next("Dashboard Mic");
              }
            }
            
          });
    }
}
