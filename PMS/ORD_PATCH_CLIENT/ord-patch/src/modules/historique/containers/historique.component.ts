import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit, QueryList, ViewChildren, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { HoraireMajServeurService } from '@modules/generic-services/horaire-maj-serveur.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BehaviorSubject, Observable } from 'rxjs';
import { ChartsPieComponent } from '../components';
import { HistoriqueService } from '../services';


@Component({
  selector: 'app-historique',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.css']
})


export class HistoriqueComponent implements OnInit, OnDestroy {
  @Input() pageSize = 4;
  
  maRecherche =  Array<string>();
  search = "";
  public title: string = "Nombres de patchs /mois";
  horaireMaj= new BehaviorSubject<string>("");
  osSelected = new BehaviorSubject<string>("All");
  closeResult: string | undefined;
  joursRapport: number = 1;

  // Attributs pour la génération de rapport
  loading_rapport = new BehaviorSubject<Boolean>(false);
  progress = 0;
  environnement: string = "Prod";
  bdd_checked: boolean = true;

  email: string = "";


  constructor(public historiqueService: HistoriqueService, public horaireMajService: HoraireMajServeurService, private route: ActivatedRoute,  private modalService: NgbModal,private viewContainerRef: ViewContainerRef) { }

  ngOnDestroy(): void {
    this.search = "";
    this.maRecherche.splice(0,this.maRecherche.length);
    this.historiqueService.serveursselected = [];
  }

  ngOnInit(): void {

    this.horaireMajService.getHoraireMaj().subscribe(res => {
      console.log("horaire: "+res);
      this.horaireMaj.next(res);
    });

    this.route.params.subscribe((params: Params) => {
      if(params['OSSelected'] != undefined){
        this.osSelected.next(params['OSSelected']);
        this.osSelected.subscribe(val =>{
          this.historiqueService.OSSelected = val;
        })
      }
      
    });
  }

  RemoveElementFromArray(element: string) {
    this.maRecherche.forEach((value,index)=>{
        if(value==element) this.maRecherche.splice(index,1);
    });
  }

  
  deleteItem(args: string) {
    this.RemoveElementFromArray(args);
    var test = this.historiqueService.serveursselected;
    test.forEach((value,index)=>{
      if(value==args){ 
        test.splice(index,1);
      }
      
    });
    this.historiqueService.serveursselected = test;
    //this.historiqueService.serveursselected = test.filter(function(f) {return f != args});
  }

  ajout(): void{
    this.maRecherche.push(this.search);
    var test = this.historiqueService.serveursselected;
    test.push(this.search);
    this.historiqueService.serveursselected = test;
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

  genereRapport(): void {
    this.loading_rapport.next(true);
    const today = new Date()
    today.setHours(0)
    today.setMinutes(0)
    today.setSeconds(0)
    today.setMilliseconds(0)
    const debut = new Date(today)
    debut.setDate(debut.getDate() - this.joursRapport)
    debut.setHours(0);
    debut.setMinutes(0)
    debut.setSeconds(0)
    debut.setMilliseconds(0)


    // partie historique
    this.historiqueService.dateSelected_fin = today;
    this.historiqueService.dateSelected_debut = debut;

    // On vide toutes les images
    this.historiqueService.imgAreaProd.next(" ");
    this.historiqueService.imgAreaPre.next(" ");
    this.historiqueService.imgAreaBdd.next(" ");
    this.historiqueService.imgAreaProdBdd.next(" ");
  
    this.historiqueService.imgAreaRec.next(" ");
    this.historiqueService.imgAreaBddRec.next(" ");
    this.historiqueService.imgAreaRecBddRec.next(" ");
  
    this.historiqueService.imgBarProd.next(" ");
    this.historiqueService.imgBarPre.next(" ");
    this.historiqueService.imgBarBdd.next(" ");
    this.historiqueService.imgBarProdBdd.next(" ");
  
    this.historiqueService.imgBarRec.next(" ");
    this.historiqueService.imgBarBddRec.next(" ");
    this.historiqueService.imgBarRecBddRec.next(" ");
  
    this.historiqueService.imgPie.next(" ");

    this.historiqueService.majAvProdAppli.next(" ");
    this.historiqueService.majApProdAppli.next(" ");
    
    this.historiqueService.majAvProdBdd.next(" ");
    this.historiqueService.majApProdBdd.next(" ");
  
    this.historiqueService.majAvRecAppli.next(" ");
    this.historiqueService.majApRecAppli.next(" ");
  
    this.historiqueService.majAvRecBdd.next(" ");
    this.historiqueService.majApRecBdd.next(" ");
   
    this.progress = 10;
    // Creation du component camembert
    const pieChart = this.viewContainerRef.createComponent(ChartsPieComponent);
    pieChart.instance.osSelected = "alco_windows";
    

    // On commence le chargement des images selon l'environnement
    if(this.environnement == "Prod"){
      let abonnement_loading = this.historiqueService.loading$.subscribe(res => {
        if(res == false){
          setTimeout(() => {
            if(this.historiqueService.imgAreaProd.getValue() != " " && this.historiqueService.imgAreaPre.getValue() != " " && this.historiqueService.imgBarProd.getValue() != " " && this.historiqueService.imgBarPre.getValue() != " "){
              if(this.bdd_checked == true){
                if(this.historiqueService.imgAreaBdd.getValue() != " " && this.historiqueService.imgAreaProdBdd.getValue() != " " && this.historiqueService.imgBarBdd.getValue() != " " && this.historiqueService.imgBarProdBdd.getValue() != " "){
                  abonnement_loading.unsubscribe();
                  pieChart.destroy();
                  this.historiqueService.generateRapport(this.joursRapport,'Prod',true,this.email).subscribe(res => {
                    this.progress = 100;
                    this.loading_rapport.next(false);
                    alert(res);
                  });
  
                }
                else{
                  if(this.historiqueService.imgAreaBdd.getValue() == " " || this.historiqueService.imgBarBdd.getValue() == " "){
                    this.progress = 70;
                    this.historiqueService.typeselected="BDD";
                  }
                  else{
                    this.progress = 90;
                    this.historiqueService.typeselected="Production,Pre-production,BDD";
                  }
                }
              }
              else{
                this.progress = 75;
                abonnement_loading.unsubscribe();
                pieChart.destroy();
                this.historiqueService.generateRapport(this.joursRapport,'Prod',false,this.email).subscribe(res => {
                  this.progress = 100;
                  this.loading_rapport.next(false);
                  alert(res);
                });
            
              }
              
            }
            else{
              if(this.historiqueService.imgAreaProd.getValue() == " " || this.historiqueService.imgBarProd.getValue() == " "){
                this.progress = 25;
                this.historiqueService.typeselected="Production";
              }
              else if (this.historiqueService.imgAreaPre.getValue() == " " || this.historiqueService.imgBarPre.getValue() == " "){
                this.progress = 40;
                this.historiqueService.typeselected="Pre-production";
              }
              
            }
          }, 10000);

        }
      });
      
    }
    else if (this.environnement == "Rec"){
      let abonnement_loading = this.historiqueService.loading$.subscribe(res => {
        if(res == false){
          setTimeout(() => {
            if(this.historiqueService.imgAreaRec.getValue() != " " && this.historiqueService.imgBarRec.getValue() != " "){
              if(this.bdd_checked == true){
                if(this.historiqueService.imgAreaBddRec.getValue() != " " && this.historiqueService.imgAreaRecBddRec.getValue() != " " && this.historiqueService.imgBarRec.getValue() != " " && this.historiqueService.imgBarRecBddRec.getValue() != " "){
                  abonnement_loading.unsubscribe();
                  pieChart.destroy();
                  this.historiqueService.generateRapport(this.joursRapport,'Rec',true,this.email).subscribe(res => {
                    this.progress = 100;
                    this.loading_rapport.next(false);
                    alert(res);
                  });
  
                }
                else{
                  if(this.historiqueService.imgAreaBddRec.getValue() == " " || this.historiqueService.imgBarRec.getValue() == " "){
                    this.progress = 50;
                    this.historiqueService.typeselected="BDD-Recette";
  
                  }
                  else{
                    this.progress = 70;
                    this.historiqueService.typeselected="Recette-Formation,BDD-Recette";
  
                  }
                }
              }
              else{
                this.progress = 80;
                abonnement_loading.unsubscribe();
                pieChart.destroy();
                this.historiqueService.generateRapport(this.joursRapport,'Rec',false,this.email).subscribe(res => {
                  this.progress = 100;
                   this.loading_rapport.next(false);
                  alert(res);
                });
  
              }
              
            }
            else{
              if(this.historiqueService.imgAreaRec.getValue() == " " || this.historiqueService.imgBarRec.getValue() == " "){
                this.progress = 25;
                this.historiqueService.typeselected="Recette-Formation";
  
              }
            }
          }, 10000);

        }
      });
      

    }



  }
}


