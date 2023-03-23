import {
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    Input,
    OnInit,
    ViewChild,
} from '@angular/core';
import { Historique } from '@modules/historique/models';
import { HistoriqueService } from '@modules/historique/services';
import { Chart } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Observable } from 'rxjs';

interface Mois{
    nom: string;
    kb_necessaire: number;
    kb_failed: number;
    kb_unkown: number;
    nbr_histo: number;
}

@Component({
    selector: 'sb-charts-bar',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './charts-bar.component.html',
    styleUrls: ['charts-bar.component.scss'],
})



export class ChartsBarComponent implements OnInit, AfterViewInit {
    historique$!: Observable<Historique[]>;
    total$!: Observable<number>;
    @ViewChild('myBarChart') myBarChart!: ElementRef<HTMLCanvasElement>;
    @Input() osSelected: string | undefined;
    public chart!: Chart;

    
    constructor(public historiqueService: HistoriqueService) {}
    ngOnInit() {

    }

    ngAfterViewInit() {
        this.historique$ = this.historiqueService.historique$;
        this.total$ = this.historiqueService.total$;
        let service = this.historiqueService;
        this.chart = new Chart(this.myBarChart.nativeElement, {
        
            type: 'bar',
            plugins: [ChartDataLabels],
            data: {
                datasets: []
            },
            options: {
                plugins: {
                    datalabels: {
                      color: '#236be8'
                    }
                },
                animation: {
                    onComplete: function(){
                        if(this.data.datasets[1]!= null){
                            switch (service.typeselected) {
                                case 'Production':
                                    service.imgBarProd.next(this.toBase64Image());
                                    if(this.data.datasets[0].data[0] != undefined){
                                        service.majAvProdAppli.next(this.data.datasets[0].data[0].toString());
                                    }
                                    else{
                                        service.majAvProdAppli.next('0');
                                    }
                                    if(this.data.datasets[0].data[1] != undefined){
                                        service.majApProdAppli.next(this.data.datasets[0].data[1].toString());
                                    }
                                    else{
                                        service.majApProdAppli.next('0');
                                    }
                                    
                                    break;
                                case 'Pre-production':
                                    service.imgBarPre.next(this.toBase64Image());
                                    if(this.data.datasets[0].data[0] != undefined){
                                        service.majAvPreAppli.next(this.data.datasets[0].data[0].toString());
                                    }
                                    else{
                                        service.majAvPreAppli.next('0');
                                    }
                                    if(this.data.datasets[0].data[1] != undefined){
                                        service.majApPreAppli.next(this.data.datasets[0].data[1].toString());
                                    }
                                    else{
                                        service.majApPreAppli.next('0');
                                    }
                                    break;
                                case 'Recette-Formation':
                                    service.imgBarRec.next(this.toBase64Image());
                                    if(this.data.datasets[0].data[0] != undefined){
                                        service.majAvRecAppli.next(this.data.datasets[0].data[0].toString());
                                    }
                                    else{
                                        service.majAvRecAppli.next('0');
                                    }
                                    if(this.data.datasets[0].data[1] != undefined){
                                        service.majApRecAppli.next(this.data.datasets[0].data[1].toString());
                                    }
                                    else{
                                        service.majApRecAppli.next('0');
                                    }
                                    break;
                                case 'BDD':
                                    service.imgBarBdd.next(this.toBase64Image());
                                    break;
                                case 'BDD-Recette':
                                    service.imgBarBddRec.next(this.toBase64Image());
                                    break;
                                case "Production,BDD":
                                    service.imgBarProdBdd.next(this.toBase64Image());
                                    break;   
                                case "Recette-Formation,BDD-Recette":
                                    service.imgBarRecBddRec.next(this.toBase64Image());
                                    if(this.data.datasets[0].data[0] != undefined){
                                        service.majAvRecBdd.next(this.data.datasets[0].data[0].toString());
                                    }
                                    else{
                                        service.majAvRecBdd.next('0');
                                    }
                                    if(this.data.datasets[0].data[1] != undefined){
                                        service.majApRecBdd.next(this.data.datasets[0].data[1].toString());
                                    }
                                    else{
                                        service.majApRecBdd.next('0');
                                    }
                                    break;         
                                case "Production,Pre-production,BDD":
                                    service.imgBarProdBdd.next(this.toBase64Image());
                                    if(this.data.datasets[0].data[0] != undefined){
                                        service.majAvProdBdd.next(this.data.datasets[0].data[0].toString());
                                    }
                                    else{
                                        service.majAvProdBdd.next('0');
                                    }
                                    if(this.data.datasets[0].data[1] != undefined){
                                        service.majApProdBdd.next(this.data.datasets[0].data[1].toString());
                                    }
                                    else{
                                        service.majApProdBdd.next('0');
                                    }
                                    break;                               
    
                                default:
                                    break;
                            }
                        }
                        
                    }
                }
            },
                        
        
        });
        
        let filtre: any = undefined;
        if(this.osSelected != undefined){
            filtre = this.osSelected?.split("_");

        }
        
        this.historique$.subscribe(res => {
            var max =0;
            if(this.historiqueService.dateselected_debut != "TOUT" && this.historiqueService.dateselected_fin != "TOUT"){

                this.chart.data.datasets?.splice(0,this.chart.data.datasets?.length);
                this.chart.data.labels?.splice(0, this.chart.data.labels?.length);

                this.chart.data = {
                    labels: ["Avant","Après"],
                    datasets: [
                        {
                            label: 'MàJ necessaires',
                            backgroundColor: 'rgba(179,0,102,0.2)',
                            borderColor: 'rgba(179,0,102,1)',
                            borderWidth: 1,
                            data: [],
                            
                        },
                        {
                            label: 'MàJ échouées',
                            backgroundColor: 'rgba(210,7,7,0.2)',
                            borderColor: 'rgba(210,7,7,1)',
                            borderWidth: 1,
                            data: [],
                        },
                        {
                            label: 'MàJ inconnues',
                            backgroundColor: 'rgba(103,114,105,0.2)',
                            borderColor: 'rgba(103,114,105,1)',
                            borderWidth: 1,
                            data: [],
                            
                        }
                    ],
                    
                }

                res.forEach(histo => {

                              
                    var kb_unkown = 0;
                    var kb_failed = 0;
                    var kb_necessaire = 0;
                    histo.serveurs.forEach(serv => {
                        if(serv.kb_inconnus != null){
                            kb_unkown += serv.kb_inconnus;
                        }
                        if(serv.kb_failed != null){
                            kb_failed += serv.kb_failed;
                        }
                        if(serv.kb_manquantes != null){
                            kb_necessaire += serv.kb_manquantes;
                        }
                        
                    });

                    let maDate = new Date(histo.date);
                    maDate.setHours(0);
                    maDate.setMinutes(0);
                    maDate.setSeconds(0);
                    maDate.setMilliseconds(0);

                    if(this.historiqueService.dateselected_debut instanceof Date && maDate.getTime() == this.historiqueService.dateselected_debut.getTime() ){
                        this.chart.data.datasets?.[0].data?.push(kb_necessaire);
                        this.chart.data.datasets?.[1].data?.push(kb_failed);
                        this.chart.data.datasets?.[2].data?.push(kb_unkown);
                    }

                    if(this.historiqueService.dateselected_fin instanceof Date  && maDate.getTime() == this.historiqueService.dateselected_fin.getTime()){
                        this.chart.data.datasets?.[0].data?.push(kb_necessaire);
                        this.chart.data.datasets?.[1].data?.push(kb_failed);
                        this.chart.data.datasets?.[2].data?.push(kb_unkown);
                    }

                    if(kb_unkown >= max ){
                        max = kb_unkown;
                    }
                    if(kb_failed >= max){
                        max = kb_failed;
                    }
                    if(kb_necessaire >= max){
                        max = kb_necessaire;
                    }
                    


                    
                })


                if(this.chart.options['scales'] ==  undefined){
                    let service = this.historiqueService;
                    this.chart.options = {
                        responsive: true,
                        scales: {
                            xAxes: 
                                {
                                    time: {
                                        unit: 'month',
                                    },
                                    grid: {
                                        display: false,
                                    },
                                    ticks: {
                                        maxTicksLimit: 6,
                                    },
                                },
                            yAxes: 
                                {
                                    ticks: {
    
                                        maxTicksLimit: 5,
                                    },
                                    min: 0,
                                    max: Math.round(max*1.5),
                                    grid: {
                                        display: true,
                                    },
                                },

                        },
                        
                        animation: {
                            onComplete: function(){
                                if(this.data.datasets[0].data[0] != null){
                                    switch (service.typeselected) {
                                        case 'Production':
                                            service.imgBarProd.next(this.toBase64Image());
                                            if(this.data.datasets[0].data[0] != undefined){
                                                service.majAvProdAppli.next(this.data.datasets[0].data[0].toString());
                                            }
                                            else{
                                                service.majAvProdAppli.next('0');
                                            }
                                            if(this.data.datasets[0].data[1] != undefined){
                                                service.majApProdAppli.next(this.data.datasets[0].data[1].toString());
                                            }
                                            else{
                                                service.majApProdAppli.next('0');
                                            }
                                            
                                            break;
                                        case 'Pre-production':
                                            service.imgBarPre.next(this.toBase64Image());
                                            if(this.data.datasets[0].data[0] != undefined){
                                                service.majAvPreAppli.next(this.data.datasets[0].data[0].toString());
                                            }
                                            else{
                                                service.majAvPreAppli.next('0');
                                            }
                                            if(this.data.datasets[0].data[1] != undefined){
                                                service.majApPreAppli.next(this.data.datasets[0].data[1].toString());
                                            }
                                            else{
                                                service.majApPreAppli.next('0');
                                            }
                                            break;
                                        case 'Recette-Formation':
                                            service.imgBarRec.next(this.toBase64Image());
                                            if(this.data.datasets[0].data[0] != undefined){
                                                service.majAvRecAppli.next(this.data.datasets[0].data[0].toString());
                                            }
                                            else{
                                                service.majAvRecAppli.next('0');
                                            }
                                            if(this.data.datasets[0].data[1] != undefined){
                                                service.majApRecAppli.next(this.data.datasets[0].data[1].toString());
                                            }
                                            else{
                                                service.majApRecAppli.next('0');
                                            }
                                            break;
                                        case 'BDD':
                                            service.imgBarBdd.next(this.toBase64Image());
                                            break;
                                        case 'BDD-Recette':
                                            service.imgBarBddRec.next(this.toBase64Image());
                                            break;
                                        case "Production,BDD":
                                            service.imgBarProdBdd.next(this.toBase64Image());
                                            break;   
                                        case "Recette-Formation,BDD-Recette":
                                            service.imgBarRecBddRec.next(this.toBase64Image());
                                            if(this.data.datasets[0].data[0] != undefined){
                                                service.majAvRecBdd.next(this.data.datasets[0].data[0].toString());
                                            }
                                            else{
                                                service.majAvRecBdd.next('0');
                                            }
                                            if(this.data.datasets[0].data[1] != undefined){
                                                service.majApRecBdd.next(this.data.datasets[0].data[1].toString());
                                            }
                                            else{
                                                service.majApRecBdd.next('0');
                                            }
                                            break;         
                                        case "Production,Pre-production,BDD":
                                            service.imgBarProdBdd.next(this.toBase64Image());
                                            if(this.data.datasets[0].data[0] != undefined){
                                                service.majAvProdBdd.next(this.data.datasets[0].data[0].toString());
                                            }
                                            else{
                                                service.majAvProdBdd.next('0');
                                            }
                                            if(this.data.datasets[0].data[1] != undefined){
                                                service.majApProdBdd.next(this.data.datasets[0].data[1].toString());
                                            }
                                            else{
                                                service.majApProdBdd.next('0');
                                            }
                                            break;                               
            
                                        default:
                                            break;
                                    }
                                }
                            }
                        }
                    }
                }
                
                this.chart.update();
            
            }
            else{
                this.chart.data.datasets?.splice(0,this.chart.data.datasets?.length);

                this.chart.data = {
                    labels: [],
                    datasets: [
                        {
                            label: 'MàJ necessaires',
                            backgroundColor: 'rgba(179,0,102,0.2)',
                            borderColor: 'rgba(179,0,102,1)',
                            borderWidth: 1,
                            data: [],
                            
                        },
                        {
                            label: 'MàJ échouées',
                            backgroundColor: 'rgba(210,7,7,0.2)',
                            borderColor: 'rgba(210,7,7,1)',
                            borderWidth: 1,
                            data: [],
                        },
                        {
                            label: 'MàJ inconnues',
                            backgroundColor: 'rgba(103,114,105,0.2)',
                            borderColor: 'rgba(103,114,105,1)',
                            borderWidth: 1,
                            data: [],
                            
                        },
                        
                    ],
                    
                };

                var lesMois: Array<Mois> = [];
                res.forEach(histo => {

                    let monMoisName = new Date(histo.date).toLocaleString('default',{month: 'short'});
                    if(!this.moisInTab(lesMois, monMoisName)){
                        lesMois.push({nom: monMoisName, kb_failed: 0, kb_necessaire: 0, kb_unkown: 0, nbr_histo: 0});
                    };

                    

                    
                    var kb_unkown = 0;
                    var kb_failed = 0;
                    var kb_necessaire = 0;
                    
                    histo.serveurs.forEach(serv => {
                        //console.log("value: "+kb_unkown+' '+kb_failed+' '+kb_necessaire);
                      
                        if(filtre != undefined && filtre[0].includes("alco") && filtre[1].includes("windows")){
                            
                            if(!(serv.OS.includes("Linux") || serv.OS.includes("CentOS") || serv.OS.includes("VMware Photon") || serv.os_quick.includes("linux")) && serv.position.includes("alco")){
                                
                                if(serv.kb_inconnus != null){
                                    kb_unkown += serv.kb_inconnus;
                                }
                                if(serv.kb_failed != null){
                                    kb_failed += serv.kb_failed;
                                }
                                if(serv.kb_manquantes != null){
                                    kb_necessaire += serv.kb_manquantes;
                                }
                            }
                        }
                        else if(filtre != undefined && filtre[0].includes("alco") && filtre[1].includes("linux")){
                            if((serv.OS.includes("Linux") || serv.OS.includes("CentOS") || serv.OS.includes("VMware Photon") || serv.os_quick.includes("linux")) && serv.position.includes("alco")){
                                if(serv.kb_inconnus != null){
                                    kb_unkown += serv.kb_inconnus;
                                }
                                if(serv.kb_failed != null){
                                    kb_failed += serv.kb_failed;
                                }
                                if(serv.kb_manquantes != null){
                                    kb_necessaire += serv.kb_manquantes;
                                }
                            }
                        }
                        else if(filtre != undefined && filtre[0].includes("heberge") && filtre[1].includes("windows")){
                            if(!(serv.OS.includes("Linux") || serv.OS.includes("CentOS") || serv.OS.includes("VMware Photon") || serv.os_quick.includes("linux")) && serv.position.includes("heberge")){
                                if(serv.kb_inconnus != null){
                                    kb_unkown += serv.kb_inconnus;
                                }
                                if(serv.kb_failed != null){
                                    kb_failed += serv.kb_failed;
                                }
                                if(serv.kb_manquantes != null){
                                    kb_necessaire += serv.kb_manquantes;
                                }
                            }
                        }
                        else if(filtre != undefined && filtre[0].includes("heberge") && filtre[1].includes("linux")){
                            if((serv.OS.includes("Linux") || serv.OS.includes("CentOS") || serv.OS.includes("VMware Photon") || serv.os_quick.includes("linux")) && serv.position.includes("heberge")){
                                if(serv.kb_inconnus != null){
                                    kb_unkown += serv.kb_inconnus;
                                }
                                if(serv.kb_failed != null){
                                    kb_failed += serv.kb_failed;
                                }
                                if(serv.kb_manquantes != null){
                                    kb_necessaire += serv.kb_manquantes;
                                }
                            }
                        }
                        else{
                            
                            if(serv.kb_inconnus != null){
                                kb_unkown += serv.kb_inconnus;
                            }
                            if(serv.kb_failed != null){
                                kb_failed += serv.kb_failed;
                            }
                            if(serv.kb_manquantes != null){
                                kb_necessaire += serv.kb_manquantes;
                            }
                        }
                    });
                
                    for (let index = 0; index < lesMois.length; index++) {
                        if(lesMois[index].nom == monMoisName){
                            lesMois[index].kb_failed += kb_failed;
                            lesMois[index].kb_necessaire += kb_necessaire;
                            lesMois[index].kb_unkown += kb_unkown;
                        }
                    }

                });



                
                lesMois.forEach(res => {
                    
                    res.kb_failed = Math.round(res.kb_failed/(res.nbr_histo+1));
                    res.kb_necessaire = Math.round(res.kb_necessaire/(res.nbr_histo+1));
                    res.kb_unkown = Math.round(res.kb_unkown/(res.nbr_histo+1));

                    this.chart.data.labels?.push(res.nom);

                    this.chart.data.datasets?.[0].data?.push(res.kb_necessaire);
                    this.chart.data.datasets?.[1].data?.push(res.kb_failed);
                    this.chart.data.datasets?.[2].data?.push(res.kb_unkown);

                    if(res.kb_unkown >= max ){
                        max = res.kb_unkown;
                    }
                    if(res.kb_failed >= max){
                        max = res.kb_failed;
                    }
                    if(res.kb_necessaire >= max){
                        max = res.kb_necessaire;
                    }
                });

                if(this.chart.options['scales'] ==  undefined){
                    let service = this.historiqueService;
                    this.chart.options = {
                        responsive: true,
                        scales: {
                            xAxes: 
                                {
                                    time: {
                                        unit: 'month',
                                    },
                                    grid: {
                                        display: false,
                                    },
                                    ticks: {
                                        maxTicksLimit: 6,
                                    },
                                },
                            yAxes: 
                                {
                                    ticks: {
    
                                        maxTicksLimit: 5,
                                    },
                                    min: 0,
                                    max: Math.round(max*1.5),
                                    grid: {
                                        display: true,
                                    },
                                },

                        },
                        animation: {
                            onComplete: function(){
                                if(this.data.datasets[0].data[0] != null){
                                    switch (service.typeselected) {
                                        case 'Production':
                                            service.imgBarProd.next(this.toBase64Image());
                                            if(this.data.datasets[0].data[0] != undefined){
                                                service.majAvProdAppli.next(this.data.datasets[0].data[0].toString());
                                            }
                                            else{
                                                service.majAvProdAppli.next('0');
                                            }
                                            if(this.data.datasets[0].data[1] != undefined){
                                                service.majApProdAppli.next(this.data.datasets[0].data[1].toString());
                                            }
                                            else{
                                                service.majApProdAppli.next('0');
                                            }
                                            
                                            break;
                                        case 'Pre-production':
                                            service.imgBarPre.next(this.toBase64Image());
                                            if(this.data.datasets[0].data[0] != undefined){
                                                service.majAvPreAppli.next(this.data.datasets[0].data[0].toString());
                                            }
                                            else{
                                                service.majAvPreAppli.next('0');
                                            }
                                            if(this.data.datasets[0].data[1] != undefined){
                                                service.majApPreAppli.next(this.data.datasets[0].data[1].toString());
                                            }
                                            else{
                                                service.majApPreAppli.next('0');
                                            }
                                            break;
                                        case 'Recette-Formation':
                                            service.imgBarRec.next(this.toBase64Image());
                                            if(this.data.datasets[0].data[0] != undefined){
                                                service.majAvRecAppli.next(this.data.datasets[0].data[0].toString());
                                            }
                                            else{
                                                service.majAvRecAppli.next('0');
                                            }
                                            if(this.data.datasets[0].data[1] != undefined){
                                                service.majApRecAppli.next(this.data.datasets[0].data[1].toString());
                                            }
                                            else{
                                                service.majApRecAppli.next('0');
                                            }
                                            break;
                                        case 'BDD':
                                            service.imgBarBdd.next(this.toBase64Image());
                                            break;
                                        case 'BDD-Recette':
                                            service.imgBarBddRec.next(this.toBase64Image());
                                            break;
                                        case "Production,BDD":
                                            service.imgBarProdBdd.next(this.toBase64Image());
                                            break;   
                                        case "Recette-Formation,BDD-Recette":
                                            service.imgBarRecBddRec.next(this.toBase64Image());
                                            if(this.data.datasets[0].data[0] != undefined){
                                                service.majAvRecBdd.next(this.data.datasets[0].data[0].toString());
                                            }
                                            else{
                                                service.majAvRecBdd.next('0');
                                            }
                                            if(this.data.datasets[0].data[1] != undefined){
                                                service.majApRecBdd.next(this.data.datasets[0].data[1].toString());
                                            }
                                            else{
                                                service.majApRecBdd.next('0');
                                            }
                                            break;         
                                        case "Production,Pre-production,BDD":
                                            service.imgBarProdBdd.next(this.toBase64Image());
                                            if(this.data.datasets[0].data[0] != undefined){
                                                service.majAvProdBdd.next(this.data.datasets[0].data[0].toString());
                                            }
                                            else{
                                                service.majAvProdBdd.next('0');
                                            }
                                            if(this.data.datasets[0].data[1] != undefined){
                                                service.majApProdBdd.next(this.data.datasets[0].data[1].toString());
                                            }
                                            else{
                                                service.majApProdBdd.next('0');
                                            }
                                            break;                               
            
                                        default:
                                            break;
                                    }
                                }
                            }
                        }
                        
                    }
                }
                
                this.chart.update();
            }
            this.chart.hide(2);
        });
    }

    moisInTab(tab: Array<Mois>, val: string): boolean{
        for (let i = 0; i < tab.length; i++) {
            if(tab[i].nom == val){
                tab[i].nbr_histo++;
                return true;
            }
        }
        return false;
        
    }
}
