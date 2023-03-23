import {
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
    SimpleChanges,
    ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { HistoriqueService } from '@modules/historique/services';
import { Serveur } from '@modules/serveurs/models';
import { ServeursService } from '@modules/serveurs/services';
import { SettingsService } from '@modules/settings/services';
import { Chart } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
    selector: 'sb-charts-pie',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './charts-pie.component.html',
    styleUrls: ['charts-pie.component.scss'],
})
export class ChartsPieComponent implements OnInit,OnChanges, AfterViewChecked {
    @ViewChild('myPieChart') myPieChart!: ElementRef<HTMLCanvasElement>;
    @Input() osSelected: string | undefined;
    serveurs$!: Observable<Serveur[]>;
    lesServeurs = new BehaviorSubject<Serveur[]>([]);
    chart!: Chart;

    kb_verte: number = 0;
    kb_orange: number = 0;
    kb_rouge: number = 0;

    constructor(public serveursService: ServeursService, public route: Router, public userProfilService: SettingsService,public historiqueService: HistoriqueService ) {
       
        
      
        this.serveurs$ = this.serveursService.messerveurs$;
        this.serveurs$.subscribe(res => {
            this.lesServeurs.next(res);
            
        });
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.lesServeurs.next([]);    
    }

    ngOnInit() {
        var r = this.route;
        let service = this.historiqueService;
        this.userProfilService.get_user_profil().subscribe(res => {
        
            this.chart = new Chart(this.myPieChart.nativeElement, {
            
                type: 'pie',
                data: {
                    labels: ['Serveurs nécessitant > '+res.serveursAlerte+' Maj', 'Serveurs nécessitant '+res.serveursBon+' à '+res.serveursAlerte+' Maj', 'Serveurs nécessitant < '+res.serveursBon+' Maj'],
                    datasets: [
                        {
                            data: [],
                            backgroundColor: ['rgba(220, 53, 69, 0.2)', 'rgba(255, 193, 7, 0.2)', 'rgba(40, 167, 69, 0.2)'],
                            borderColor: ['rgba(220, 53, 69, 1)', 'rgba(255, 193, 7, 1)', 'rgba(40, 167, 69, 1)']
                        },
                    ],

                },
                options: {
                    responsive: true,
                    aspectRatio: 2,
                    
                    animation: {
                        easing: 'linear',
                        onComplete: function(){
                            if(this.data.datasets[0].data[0] != null){
                                service.imgPie.next(this.toBase64Image());
                            }
                        },
                    },

                },
                

                plugins: [ChartDataLabels]   
            });
    

            this.lesServeurs.subscribe(serveurs => {

                this.chart.data.datasets[0].data = [];
                let filtre = undefined;
                let taille = serveurs.length;
                if(this.osSelected != undefined){
                    filtre = this.osSelected?.split("_");

                }

                if(filtre != undefined && filtre[0].includes("alco") && filtre[1].includes("windows")){
                    taille = 0;
                    serveurs.forEach(serv => {
                        if(!(serv.OS.includes("Linux") || serv.OS.includes("CentOS") || serv.OS.includes("VMware Photon") || serv.os_quick.includes("linux")) && serv.position.includes("alco")){
                            if(serv.kb_manquantes < res.serveursBon){
                                this.kb_verte += 1;
                            }
                            else if ((serv.kb_manquantes >= res.serveursBon) && (serv.kb_manquantes < res.serveursAlerte)){
                                this.kb_orange += 1;
                            }
                            else{
                                this.kb_rouge += 1;
                            }
                            taille++;
                        }
    
                    });
                }

                if(filtre != undefined && filtre[0].includes("alco") && filtre[1].includes("linux")){
                    taille = 0;
                    serveurs.forEach(serv => {
                        if((serv.OS.includes("Linux") || serv.OS.includes("CentOS") || serv.OS.includes("VMware Photon") || serv.os_quick.includes("linux") )&& serv.position.includes("alco")){
                            if(serv.kb_manquantes < res.serveursBon){
                                this.kb_verte += 1;
                            }
                            else if ((serv.kb_manquantes >= res.serveursBon) && (serv.kb_manquantes < res.serveursAlerte)){
                                this.kb_orange += 1;
                            }
                            else{
                                this.kb_rouge += 1;
                            }
                            taille ++;
                        }
    
                    });
                }

                if(filtre != undefined && filtre[0].includes("heberge") && filtre[1].includes("windows")){
                    taille = 0;
                    serveurs.forEach(serv => {
                        if(!(serv.OS.includes("Linux") || serv.OS.includes("CentOS") || serv.OS.includes("VMware Photon") || serv.os_quick.includes("linux") )&& serv.position.includes("heberge")){
                            if(serv.kb_manquantes < res.serveursBon){
                                this.kb_verte += 1;
                            }
                            else if ((serv.kb_manquantes >= res.serveursBon) && (serv.kb_manquantes < res.serveursAlerte)){
                                this.kb_orange += 1;
                            }
                            else{
                                this.kb_rouge += 1;
                            }
                            taille ++;
                        }
    
                    });
                }

                if(filtre != undefined && filtre[0].includes("heberge") && filtre[1].includes("linux")){
                    taille =0;
                    serveurs.forEach(serv => {
                        if((serv.OS.includes("Linux") || serv.OS.includes("CentOS") || serv.OS.includes("VMware Photon") || serv.os_quick.includes("linux") ) && serv.position.includes("heberge")){
                            if(serv.kb_manquantes < res.serveursBon){
                                this.kb_verte += 1;
                            }
                            else if ((serv.kb_manquantes >= res.serveursBon) && (serv.kb_manquantes < res.serveursAlerte)){
                                this.kb_orange += 1;
                            }
                            else{
                                this.kb_rouge += 1;
                            }
                            taille ++;
                        }
    
                    });
                }


                this.chart.data.datasets[0].data.push(this.kb_rouge);
                this.chart.data.datasets[0].data.push(this.kb_orange);
                this.chart.data.datasets[0].data.push(this.kb_verte);

                let service = this.historiqueService;
                this.chart.options = {
                    
                    
                    
                    responsive: true,
                    aspectRatio: 2,
                    plugins: {
                        legend: {
                            position: 'right',
                        },

                        datalabels: {
                            color: "black",
                            font: {
                                weight: 'bold',
                                size: 16,
                            },
                            formatter: (value, context) => {
                                const nbr_serv = value;
                                const pourcent_serv = (value / taille *100).toFixed(1);
                                if((value / serveurs.length *100) < 8){ 
                                    return null;
                                }
                                return `${pourcent_serv}%`;
                            }
                        },

                        tooltip: {
                            callbacks: {
                                
                                label: function(context) {
                                    return " "+context.formattedValue+" Serveurs, soit : "+(parseInt(context.formattedValue)/ taille *100).toFixed(1)+"%";
                                },  

                            },
                            displayColors: false,
                            
                        },

                        
                        
                    },
    
                    elements: {
                        point:{
                            radius: 0
                        }
                    },

                    onClick: function(e){
                    r.navigate(["patchManagement/serveurs/Alco_Windows"]);
                    },
                    
                    
                    animation: {
                        easing: 'linear',
                        onComplete: function(){
                            service.imgPie.next(this.toBase64Image());
                        }
                    },

                    
                }

                this.chart.update();
                this.chart.resize();           
            });
        });   
    }

    ngAfterViewChecked() {
     
    }
}
