import { ChangeDetectionStrategy, Component, Injectable, OnInit } from '@angular/core';
import { plannification_exceptionnel } from '@modules/plannification-exceptionnel/models';
import { PlannificationExceptionnelService } from '@modules/plannification-exceptionnel/services';
import { BehaviorSubject, Observable } from 'rxjs';
import { TreeviewItem, TreeviewConfig } from 'ngx-treeview';
import {ModalDismissReasons, NgbActiveModal, NgbDate, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { AuthentificationService } from '@modules/generic-services/authentification.service';
import { ServeursService } from '@modules/serveurs/services';
import { Serveur } from '@modules/serveurs/models';
import { CalendrierService } from '@modules/calendrier/services';
import { CalendarEvent } from 'angular-calendar';




@Component({
  selector: 'app-table-plannif',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './table-plannif.component.html',
  styleUrls: ['./table-plannif.component.css']
})


export class TablePlannifComponent implements OnInit {

  serveurs$!: Observable<Serveur[]>;
  serv : Serveur[] = [];

  mesPlannifs = new BehaviorSubject<plannification_exceptionnel[]>([]);

  mesPlannifs_old = new BehaviorSubject<plannification_exceptionnel[]>([]);
  mesPlannifs_futur = new BehaviorSubject<plannification_exceptionnel[]>([]);
  closeResult: string | undefined;
  planel: string = "detail";

  userModal: string = "";
  idModal: string | undefined = "";

  date_plannif: NgbDate | undefined;

  dropdownEnabled = true;
  items!: TreeviewItem[];
  items_fullServeur!: TreeviewItem[];
  values!: number[];
  config = TreeviewConfig.create({
    hasAllCheckBox: false,
    hasFilter: true,
    hasCollapseExpand: true,
    decoupleChildFromParent: false,
    maxHeight: 400
  });

  public horaire_debut: string = "19:00";
  public horaire_fin: string = "23:00";
  
 
 
  constructor(
    public plannificationExceptionnelService: PlannificationExceptionnelService,
    public calendrierService: CalendrierService,
    private modalService: NgbModal,
    public auth: AuthentificationService,
    public serveursService: ServeursService) { }

  ngOnInit(): void {

    this.plannificationExceptionnelService.getPlannifications().subscribe(res => {
      this.mesPlannifs.next(res);
      this.trie();

    });

    this.serveurs$ = this.serveursService.messerveurs$;
    this.serveursService.OSSelected = "All";

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

  trie(){

    let plannif_old: plannification_exceptionnel[] = [];
    let plannif_futur: plannification_exceptionnel[] = [];

    this.mesPlannifs.getValue().forEach(element => {

      let tab_date_split = element.date_plannif.split("/");
      let date1 = new Date(tab_date_split[2]+"/"+tab_date_split[1]+"/"+tab_date_split[0]+" 21:00:00");
      let date2 = new Date();
      
      if(date1.getTime() >= date2.getTime()){
        plannif_futur.push(element);
      }
      else{
        plannif_old.push(element);
      }
    });

    this.mesPlannifs_old.next(plannif_old);
    this.mesPlannifs_futur.next(plannif_futur);
  }

  supressionPlannif(plannif: string | undefined){
    if(plannif != undefined){
      this.plannificationExceptionnelService.supressionPlannification(plannif).subscribe(res => {
        this.calendrierService.deleteEventById(plannif).subscribe(res => {
          alert("Supression Terminée");
        })
        this.ngOnInit();
      });
    }
    else{
      console.log("error: _ID unfined");
    }
    
  }

  creationPlannification(){
    
    // récupération des items séléctionnés
    let selected = this.getCheckedItem(this.items_fullServeur);
    let listServ: Serveur[] = [];
    this.serv.forEach(srv => {
      if(selected.includes(srv.name)){
        listServ.push(srv);
      }
    });

    // Création de la planification
    this.plannificationExceptionnelService.plannification(listServ,this.auth.user.value.name,this.horaire_debut,this.horaire_fin, this.date_plannif).subscribe(res => {

      // Récupération des calendrier pour ajout dans calendrier
      this.calendrierService.get_calendrier().subscribe(cals => {
        let calendrier = cals.find((cal) => cal.name.match("Exceptionnel"))
        if(calendrier != undefined){
          let startDate = new Date(this.date_plannif!.year, this.date_plannif!.month -1, this.date_plannif!.day);
          startDate.setHours(parseInt(this.horaire_debut.split(':')[0]));
          startDate.setMinutes(parseInt(this.horaire_debut.split(':')[1]));
          let endDate = new Date(this.date_plannif!.year, this.date_plannif!.month -1, this.date_plannif!.day);
          endDate.setHours(parseInt(this.horaire_fin.split(':')[0]));
          endDate.setMinutes(parseInt(this.horaire_fin.split(':')[1]));
          let chaine = "Planification Exceptionnel";
          let event: CalendarEvent = {
            title: chaine,
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
            id: ''+res,
            actions: [
              {
              label: "<small>supprimer</small>",
              a11yLabel: 'Delete',
              onClick({ event, sourceEvent, }) {
                
              },
              }
            ]

          };

          // Ajout dans calendrier
          this.calendrierService.put_dates(event,calendrier._id!).subscribe(res2 => {
            this.ngOnInit();
            setTimeout(function() {alert("Ajout Terminé")}, 1000);
          });
        }
       
      });


    });
  }

  modificationPlannification(plannif: string | undefined){
    let selected = this.getCheckedItem(this.items_fullServeur);
    let listServ: Serveur[] = [];
    this.serv.forEach(srv => {
      if(selected.includes(srv.name)){
        listServ.push(srv);
      }
    });
    if(plannif != undefined){
      this.plannificationExceptionnelService.modificationPlannification(plannif,listServ,this.auth.user.value.name,this.horaire_debut,this.horaire_fin, this.date_plannif).subscribe(res => {
        this.ngOnInit();
        setTimeout(function() {alert(res)}, 1000);
      });
    }
    else{
      console.log("error: _ID unfined");
    }
  }


  setDatePlannif(plannif: plannification_exceptionnel){
    let tab_date = plannif.date_plannif.split("/");
    let day = parseInt(tab_date[0]);
    let month = parseInt(tab_date[1]);
    let year = parseInt(tab_date[2]);

    this.date_plannif = new NgbDate(year,month,day);
  }

  getCheckedItem(tree: TreeviewItem[]): string[]{
    let checkedServName: string[] = [];
    tree[0].children.forEach( OS => {
      OS.children.forEach(element => {
        element.children.forEach(serv => {
          if(serv.checked){
            checkedServName.push(serv.text);
          }
        });
      });
    }) 
    return checkedServName;
  }

  getTreeItemsFullServeur(isPlannif: boolean,plannif: plannification_exceptionnel | null): TreeviewItem[]{
    const serveurs = new TreeviewItem({
      text: 'serveurs', value: 9, children: [
        {
          text: 'Windows', value: 91, children: [
            {
              text: 'Production', value: 911, children: [
                {text: "", value:0,disabled:true,checked:false}
              ],collapsed:true
            },
            {
              text: 'Pre-production', value: 912, children: [
                {text: "", value:0,disabled:true,checked:false}
              ],collapsed:true
            },
            {
              text: 'Recette-Formation', value: 913, children: [
                {text: "", value:0,disabled:true,checked:false}
              ],collapsed:true
            },
            {
              text: 'BDD', value: 914, children: [
                {text: "", value:0,disabled:true,checked:false}
              ],collapsed:true
            },
            {
              text: 'BDD-Recette', value: 915, children: [
                {text: "", value:0,disabled:true,checked:false}
              ],collapsed:true
            },
            {
              text: 'DMZ', value: 916, children: [
                {text: "", value:0,disabled:true,checked:false}
              ],collapsed:true
            },
          ],collapsed:true
        },
        {
          text: 'Linux', value: 92, children: [
            {
              text: 'PROD-PRE', value: 921, children: [
                {text: "", value:0,disabled:true,checked:false}
              ],collapsed:true
            },
            {
              text: 'REC-FOR', value: 922, children: [
                {text: "", value:0,disabled:true,checked:false}
              ],collapsed:true
            },
            {
              text: 'BDD-ProPre', value: 923, children: [
                {text: "", value:0,disabled:true,checked:false}
              ],collapsed:true
            },
            {
              text: 'BDD-RECFOR', value: 924, children: [
                {text: "", value:0,disabled:true,checked:false}
              ],collapsed:true
            },
          ],collapsed:true
        },
      ]
    });

    this.serveurs$.subscribe(res => {
      this.serv = res;
      res.forEach(serv => {
      
        serveurs.children.forEach( OS => {
          OS.children.forEach(categorie => {
            if(categorie.text == serv.type){
              categorie.children.push(new TreeviewItem({text: serv.name,value:categorie.value+1001,checked: false}));
            }
          });
        });
      });
      this.items_fullServeur = [serveurs];
      if(isPlannif == true && plannif != null){
        plannif.plannifs.forEach(serv => {
          this.items_fullServeur.forEach(OS => {
            OS.children.forEach(categorie => {
              if(categorie.text == serv.type){
                categorie.children.forEach(srv => {
                  if(srv.text == serv.name){
                    srv.checked = true;
                  }
                });
              }
            });
          });
        });
      }
     
    })
    
    return [serveurs];
  }



  onFilterChange(value: string): void {
    console.log('filter:', value);
  }

}
