import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { HistoriqueService } from '@modules/historique/services';
import { BehaviorSubject } from 'rxjs';

@Component({
    selector: 'sb-dashboard-charts',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './dashboard-charts.component.html',
    styleUrls: ['dashboard-charts.component.scss'],
})
export class DashboardChartsComponent implements OnInit {

    @Input() site!:  BehaviorSubject<string>;
    
    constructor(public historiqueService: HistoriqueService) {}
    ngOnInit() {
        this.site.subscribe(val =>{   
            if(val == "mic"){
                this.historiqueService.OSSelected = 'College_All'
            }
            else{
                this.historiqueService.OSSelected = 'All'
            }
        })
        
    }
}
