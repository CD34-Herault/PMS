import { animate } from '@angular/animations';
import {
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    OnInit,
    ViewChild,
} from '@angular/core';
import { serv_exclu } from '@modules/exclusions/models';
import { ExclusionsService } from '@modules/exclusions/services';
import { Historique } from '@modules/historique/models';
import { HistoriqueService } from '@modules/historique/services';
import { Serveur } from '@modules/serveurs/models';
import { ServeursService } from '@modules/serveurs/services';
import  Chart  from 'chart.js/auto';
import { from, Observable } from 'rxjs';

@Component({
    selector: 'sb-charts-area',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './charts-area.component.html',
    styleUrls: ['charts-area.component.scss'],
})
export class ChartsAreaComponent implements OnInit, AfterViewInit {

    serveurs_exclu!: serv_exclu[];
    historique$!: Observable<Historique[]>;
    total$!: Observable<number>;

    @ViewChild('myAreaChart') myAreaChart!: ElementRef<HTMLCanvasElement>;
    chart!: Chart;



    constructor(public exclusionsService: ExclusionsService,public historiqueService: HistoriqueService, public serv: ServeursService) {}
    ngOnInit() {}

    ngAfterViewInit() {
        let service = this.historiqueService;
        this.historique$ = this.historiqueService.historique$;
        this.total$ = this.historiqueService.total$;
        this.chart = new Chart(this.myAreaChart.nativeElement, {
            type: 'line',
            data: {
                labels: [
                    
                ],
                datasets: [
                    {
                        
                        label: 'MàJ necessaires',
                        borderWidth: 1,
                        tension: 0.3,
                        fill: true,
                        
                        backgroundColor: 'rgba(179,0,102,0.2)',
                        borderColor: 'rgba(179,0,102,1)',
                        pointRadius: 5,
                        pointBackgroundColor: 'rgba(179,0,102,1)',
                        pointBorderColor: 'rgba(255,255,255,0.8)',
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: 'rgba(179,0,102,1)',
                        pointHitRadius: 50,
                        pointBorderWidth: 2,
                        data: [
                        ],
                        
                    },
                    {
                        label: 'MàJ échouées',
                        fill: true,
                        tension: 0.3,
                        borderWidth: 1,
                        backgroundColor: 'rgba(210,7,7,0.2)',
                        borderColor: 'rgba(210,7,7,1)',
                        pointRadius: 5,
                        pointBackgroundColor: 'rgba(210,7,7,1)',
                        pointBorderColor: 'rgba(255,255,255,0.8)',
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: 'rgba(210,7,7,1)',
                        pointHitRadius: 50,
                        pointBorderWidth: 2,
                        data: [
                            
                        ],
                    },
                    {
                        label: 'MàJ inconnues',
                        fill: true,
                        tension: 0.3,
                        borderWidth: 1,
                        backgroundColor: 'rgba(103,114,105,0.2)',
                        borderColor: 'rgba(103,114,105,1)',
                        pointRadius: 5,
                        pointBackgroundColor: 'rgba(103,114,105,1)',
                        pointBorderColor: 'rgba(255,255,255,0.8)',
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: 'rgba(103,114,105,1)',
                        pointHitRadius: 50,
                        pointBorderWidth: 2,
                        data: [
                            
                        ],
                    },
                                        {
                        label: 'MàJ serveurs exclus',
                        fill: true,
                        tension: 0.3,
                        borderWidth: 1,
                        backgroundColor: 'rgba(39,114,245,0.2)',
                        borderColor: 'rgba(39,114,245,1)',
                        pointRadius: 5,
                        pointBackgroundColor: 'rgba(39,114,245,1)',
                        pointBorderColor: 'rgba(255,255,255,0.8)',
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: 'rgba(39,114,245,1)',
                        pointHitRadius: 50,
                        pointBorderWidth: 2,
                        data: [
                            
                        ],
                    },
                ],
            },
            options: {
                scales: {
                    xAxes: 
                        {
                            time: {
                                unit: 'day',
                            },
                            grid: {
                                display: false,
                            },
                            ticks: {
                                autoSkip: true,
                                maxRotation: 45,
                                minRotation: 45,
                                maxTicksLimit: 20,
                            },
                        },
                    y: 
                        {
                            min : 0,
                            grid: {
                                color: 'rgba(0, 0, 0, .125)',
                            },
                        },
                },

                animation: {
                    onComplete: function(){
                        if(this.data.datasets[0].data[0] != null){
                            switch (service.typeselected) {
                                case 'Production':
                                    service.imgAreaProd.next(this.toBase64Image());
                                    break;
                                case 'Pre-production':
                                    service.imgAreaPre.next(this.toBase64Image());
                                    break;
                                case 'Recette-Formation':
                                    service.imgAreaRec.next(this.toBase64Image());
                                    break;
                                case 'BDD':
                                    service.imgAreaBdd.next(this.toBase64Image());
                                    break;
                                case 'BDD-Recette':
                                    service.imgAreaBddRec.next(this.toBase64Image());
                                    break;
                                case "Production,BDD":
                                    service.imgAreaProdBdd.next(this.toBase64Image());
                                    break;   
                                case "Recette-Formation,BDD-Recette":
                                    service.imgAreaRecBddRec.next(this.toBase64Image());
                                    break;            
                                case "Production,Pre-production,BDD":
                                    service.imgAreaProdBdd.next(this.toBase64Image());
                                    break;                                   
    
                                default:
                                    break;
                            }

                        }
                    },
                }

            }
            

        });

        this.chart.hide(2);
        this.exclusionsService.getExclusions().subscribe(exclus => {
            this.serveurs_exclu = exclus;
            this.historique$.subscribe(res => {
                
                this.chart.data.datasets?.[0].data?.splice(0,this.chart.data.datasets?.[0].data?.length);
                this.chart.data.datasets?.[1].data?.splice(0,this.chart.data.datasets?.[1].data?.length);
                this.chart.data.datasets?.[2].data?.splice(0,this.chart.data.datasets?.[2].data?.length);
                this.chart.data.datasets?.[3].data?.splice(0,this.chart.data.datasets?.[3].data?.length);
                this.chart.data.labels?.splice(0, this.chart.data.labels?.length);

                var max =0;
                res.forEach(histo => {
                    this.chart.data.labels?.push(histo.date);
                    
                    var kb_unkown = 0;
                    var kb_failed = 0;
                    var kb_necessaire = 0;
                    var kb_exclus = 0;
                    console.log("TAILLE: "+histo.serveurs.length);
                    histo.serveurs.forEach(serv => {
                        kb_unkown += serv.kb_inconnus;
                        kb_failed += serv.kb_failed;
                        kb_necessaire += serv.kb_manquantes;
                        if(this.checkExclu(serv) == true) {
                            kb_exclus += serv.kb_manquantes;
                        }
                    });

                    this.chart.data.datasets?.[0].data?.push(kb_necessaire);
                    this.chart.data.datasets?.[1].data?.push(kb_failed);
                    this.chart.data.datasets?.[2].data?.push(kb_unkown);
                    this.chart.data.datasets?.[3].data?.push(kb_exclus);

                    if(kb_unkown >= max ){
                        max = kb_unkown;
                    }
                    if(kb_failed >= max){
                        max = kb_failed;
                    }
                    if(kb_necessaire >= max){
                        max = kb_necessaire;
                    }


                    
                    updateScale(this.chart,max);

                    
                    
                })
                this.chart.update();

                
            });
        });


      

    }


    checkExclu(serv:Serveur): Boolean{
        if(this.serveurs_exclu.find((val) => val.name.match(serv.fullName)) != undefined){
          return true;
        }
        else{
          return false;
        }
      }
    
}

function updateScale(chart: any, max: number) {
    chart.options.scales.y = {                            
        min : 0,
        grid: {
        color: 'rgba(0, 0, 0, .125)',
        }  
    } 
}


