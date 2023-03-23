import { Component, Input, OnInit } from '@angular/core';
import { serv_exclu } from '@modules/exclusions/models';
import { ExclusionsService } from '@modules/exclusions/services';
import { AuthentificationService } from '@modules/generic-services/authentification.service';
import { Serveur } from '@modules/serveurs/models';
import { ServeursService } from '@modules/serveurs/services';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TreeviewConfig, TreeviewItem } from 'ngx-treeview';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-exclusions-tab',
  templateUrl: './exclusions.component.html',
  styleUrls: ['./exclusions.component.css']
})
export class ExclusionsComponent implements OnInit {
  @Input() urlKey!: string;
  serveurs!: Observable<serv_exclu[]>;
  serveurs$!: Observable<Serveur[]>;
  serv : Serveur[] = [];
  __id: string | undefined = "";
  items_fullServeur!: TreeviewItem[];
  values!: number[];
  config = TreeviewConfig.create({
    hasAllCheckBox: false,
    hasFilter: true,
    hasCollapseExpand: true,
    decoupleChildFromParent: false,
    maxHeight: 400
  });
  closeResult: string = "";
  temporaire: boolean = true;

  totalMajExclus: number = 0;

  matchMaj: {nom: string, kb: number}[] = [];
  comment: string = "";
  constructor(public exclusionsService: ExclusionsService, public serveursService: ServeursService, private modalService: NgbModal,public auth: AuthentificationService) { }

  servs!: Serveur[];
  ngOnInit(): void {



    this.serveurs = this.exclusionsService.getExclusions();
    this.serveurs$ = this.serveursService.messerveurs$;
    this.serveursService.OSSelected = "All";

    this.getTreeItemsFullServeur();


    this.serveurs.subscribe(serveurs_exclus => {
      this.serveurs$.subscribe(lesServeurs => {
        this.servs = lesServeurs;
        this.totalMajExclus = 0;
        serveurs_exclus.forEach(serv_exclu => {
          let ss = lesServeurs.find(serveur => serveur.fullName.match(serv_exclu.name));
          if( ss != undefined){
            this.totalMajExclus += ss.kb_manquantes;
            serv_exclu.kb_manquantes = ss.kb_manquantes;
            // this.matchMaj.push({nom: serv_exclu.name, kb: ss.kb_manquantes});
          }
        });
      })
    });

  }

   callback(exclus: serv_exclu): number|string{
    let res = this.servs.find(serveur => serveur.fullName.match(exclus.name));
    if( res != undefined){
      return res.kb_manquantes;
    }
    else{
      return "NaN";
    }
   }

  getTreeItemsFullServeur(): TreeviewItem[]{
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
    })
    return [serveurs];
  }

  onFilterChange(value: string): void {
    console.log('filter:', value);
  }

  getCheckedItem(tree: TreeviewItem[]): string[]{
    let checkedServName: string[] = [];
    tree[0].children.forEach(os => {
      os.children.forEach(element => {
        element.children.forEach(serv => {
          if(serv.checked){
            checkedServName.push(serv.text);
          }
        });
      });
    });

    return checkedServName;
  }

  creationExclusion(){
    let selected = this.getCheckedItem(this.items_fullServeur);
    let listServ: serv_exclu[] = [];
    this.serv.forEach(srv => {
      if(selected.includes(srv.name)){
        listServ.push({name: srv.fullName,description: srv.description,user: this.auth.user.value.name,temporaire: this.temporaire, _id: undefined,comment: ''});
      }
    });
    this.exclusionsService.ajout(listServ,this.urlKey).subscribe(res => {
      this.ngOnInit();
      setTimeout(function() {alert(res)}, 1000);
    });
  }

  supressionExclusion(){
    if(this.__id != undefined && this.__id != ''){
      this.exclusionsService.deleteExclusions(this.__id,this.auth.user.value.name,this.urlKey).subscribe(res => {
        this.ngOnInit();
      });
    }
    else{
      console.log("error: _ID unfined");
    }
    
  }

  CommenterExclusion(){
    if(this.__id != undefined && this.__id != ''){
      this.exclusionsService.commentExclusions(this.__id,this.comment,this.urlKey).subscribe(res => {
        this.ngOnInit();
        alert(res);
      });
    }
    else{
      console.log("error: _ID unfined");
    }
    
  }

  getcomment(){
    
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


}
