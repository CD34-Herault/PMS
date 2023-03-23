import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Calendrier } from '@modules/calendrier/models';
import { CalendrierService } from '@modules/calendrier/services';
import { ExclusionsService } from '@modules/exclusions/services';
import { plannification_exceptionnel } from '@modules/plannification-exceptionnel/models';
import { PlannificationExceptionnelService } from '@modules/plannification-exceptionnel/services';
import { ServeursService } from '@modules/serveurs/services';
import { Subject, BehaviorSubject } from 'rxjs';

@Component({
    selector: 'sb-dashboard-cards',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './dashboard-cards.component.html',
    styleUrls: ['dashboard-cards.component.scss'],
})
export class DashboardCardsComponent implements OnInit {

    plannifFutur = new BehaviorSubject<Boolean>(false);
    serveursExclus= new BehaviorSubject<number>(0);
    serveurs= new BehaviorSubject<number>(0);
    jourRestant= new BehaviorSubject<number>(0);

    constructor(public plannifService: PlannificationExceptionnelService, public serveursService: ServeursService, public exclusionsService: ExclusionsService, public calendrierService: CalendrierService) {}
    
    ngOnInit() {
        this.plannifService.getPlannifications().subscribe(res => {
            if(this.testFutur(res) == true){
                this.plannifFutur.next(true);
            }
        });

        this.serveursService.total$.subscribe(res => {
            this.serveurs.next(res);
        });

        this.exclusionsService.getExclusions().subscribe(res => {
            this.serveursExclus.next(res.length);
        });

        this.calendrierService.get_calendrier().subscribe(cal => {
            this.jourRestant.next(this.prochainPatch(cal));
        })

    }

    prochainPatch(calendriers: Calendrier[]){
        let today = new Date();
        let date_plusproche:any = undefined;
        calendriers.forEach(cal => {
            cal.dates.forEach(date => {
                let date1 = new Date(date.start);
                if((date1 >= today && date1 <= date_plusproche) || (date_plusproche == undefined && date1 >= today)){
                    date_plusproche = date1;
                }
            });
        });
        let timeDiff = date_plusproche.getTime() - today.getTime();
        let diffJour = Math.round(timeDiff / (1000 * 3600 * 24));
        return diffJour;
    }

    testFutur(plannifs: plannification_exceptionnel[] ): boolean{

        let bool : boolean = false;
        plannifs.forEach(element => {
          let tab_date_split = element.date_plannif.split("/");
          let date1 = new Date(tab_date_split[2]+"/"+tab_date_split[1]+"/"+tab_date_split[0]+" 21:00:00");
          let date2 = new Date();
          
          if(date1.getTime() >= date2.getTime()){
            bool = true;
          }

        });
        return bool;
      }
    
}
