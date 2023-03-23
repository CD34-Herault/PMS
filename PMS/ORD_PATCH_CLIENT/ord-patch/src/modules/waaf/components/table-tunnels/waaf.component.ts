import {DecimalPipe} from '@angular/common';
import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit, QueryList, TemplateRef, ViewChild, ViewChildren} from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from '@modules/generic-services/authentification.service';
import { SortEvent, WaafDirective } from '@modules/waaf/directives';
import { Datum, Tunnels, WorkflowParameter } from '@modules/waaf/models';
import { WaafService } from '@modules/waaf/services';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TreeviewConfig, TreeviewItem } from 'ngx-treeview';
import {Observable} from 'rxjs';
import * as XLSX from 'xlsx';




@Component({
  selector: 'table-tunnels',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './waaf.component.html',
  styleUrls: ['./waaf.component.css']
})
export class WaafTunnelsComponent implements OnInit {

  tunnels$!: Observable<Datum[]>;
  total$!: Observable<number>;
  fileName= 'Tunnels.xlsx';
  auth: {username: String, password: String} | undefined

  masterSelected:boolean;
  checklist: Array<any>;
  checkedList: Array<Datum>;

  popTitre: string = "Not defined"
  popContenu = "test" 
  


  @ViewChild('modalWorkflow', { static: true }) modalWorkflow!:TemplateRef<any>;
  @ViewChild('modalAuth', { static: true }) modalAuth!:TemplateRef<any>;
  @ViewChild('modalMultipleMaintenance', { static: true }) modalMultipleMaintenance!:TemplateRef<any>;
  
  @Input() pagesize = 20;
  @Input() sort!: SortEvent;
  @Input() sortedColumn!: string;
  sortedDirection!: string;


  @ViewChildren(WaafDirective) headers!: QueryList<WaafDirective>;

  public modalWorkflowData: {
    tunnel: Datum | undefined;
  };
  closeResult: string | undefined;

  enMaintenance: boolean = false;

  constructor(public _router: Router,public waafService: WaafService,private changeDetectorRef: ChangeDetectorRef, private modalService: NgbModal, public authentificationService: AuthentificationService) {
    this.modalWorkflowData = { tunnel: undefined};
    this.masterSelected = false;
    this.checklist = []; 
    this.checkedList = []
   }

  ngOnInit(): void {
    if(this.sort != undefined){
      this.onSort(this.sort);
    }

    this.tunnels$ = this.waafService.tunnels$;
    this.total$ = this.waafService.total$;

    this.tunnels$.subscribe(res => {
      this.checklist = []
      this.masterSelected = false;
      res.forEach(myTunnel => {
        this.checklist.push({tunnel: myTunnel, isSelected: false});
      });
      this.getCheckedItemList();
    });

  }

  onSort({column, direction}: SortEvent) {
    this.sortedColumn = column;
    this.sortedDirection = direction;
    this.waafService.sortColumn = column;
    this.waafService.sortDirection = direction;
    this.changeDetectorRef.detectChanges();
  }

  open(content: any, tunnel: Datum | undefined) {
    if(tunnel != undefined){
      this.modalWorkflowData.tunnel = tunnel;
      const found = tunnel.workflowParameters.find(element => element.name.includes("maintenance.enable"));
      if(found != undefined && found.value == "true"){
        this.enMaintenance = true;
      }
      else{
        this.enMaintenance = false;
      }
    }
   
    this.modalService.open(content, { centered: true }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });;
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

  public maintenance(uid: string | undefined, url: string | undefined): void {
    // if(this.auth == undefined){
    //   this.modalService.open(this.modalAuth,{ centered: true });
    // }
    // else{
      if(uid != undefined && url != undefined){
        this.waafService.searchInProgress$.next(true);  
        this.waafService.maintenance(uid,url).subscribe(res => {
          if(res == "Terminé"){
            alert("La mise en maintenance s'est terminée avec succès");
          }
          else{
            alert("Erreur lors de la mise en maintenance: "+res);
          }
          this.waafService.searchInProgress$.next(false); 
          this.waafService.searchTerm = this.modalWorkflowData.tunnel!.name;
        });
      }
    // }

  }

  public maintenanceMultiple(tunnels: Datum[] | undefined): void {
    // if(this.auth == undefined){
    //   this.modalService.open(this.modalAuth,{ centered: true });
    // }
    // else{
      if(tunnels != undefined){
        this.waafService.searchInProgress$.next(true);  
        this.waafService.maintenanceMultiple(tunnels).subscribe(res => {
          if(res == "Terminé"){
            alert("La mise en maintenance s'est terminée avec succès");
          }
          else{
            alert("Erreur lors de la mise en maintenance: "+res);
          }
          this.waafService.searchInProgress$.next(false);
          this.modalService.dismissAll("Fin maintenance"); 

          let chaine_retour = "";
          tunnels.forEach(chaine => {
            if(tunnels[tunnels.length-1].name == chaine.name){
              chaine_retour = chaine_retour + chaine.name;
            }
            else{
              chaine_retour = chaine_retour + chaine.name; 
              chaine_retour = chaine_retour + "||";
            }
          });
          console.log("LA: "+chaine_retour);
          this.waafService.searchTerm = chaine_retour;
          
        });
      }
    // }

  }

  public leverMaintenanceMultiple(tunnels: Datum[] | undefined): void {
    // if(this.auth == undefined){
    //   this.modalService.open(this.modalAuth,{ centered: true });
    // }
    // else{
      if(tunnels != undefined){
        this.waafService.searchInProgress$.next(true);  
        this.waafService.leverMaintenanceMultiple(tunnels).subscribe(res => {
          if(res == "Terminé"){
            alert("Les levées de maintenances ce sont terminées avec succès");
          }
          else{
            alert("Erreur lors des levées de maintenances: "+res);
          }
          this.waafService.searchInProgress$.next(false); 
          this.modalService.dismissAll("Fin levée");
          let chaine_retour = "";
          tunnels.forEach(chaine => {
            if(tunnels[tunnels.length-1].name == chaine.name){
              chaine_retour = chaine_retour + chaine.name;
            }
            else{
              chaine_retour = chaine_retour + chaine.name; 
              chaine_retour = chaine_retour + "||";
            }
          });
          console.log("LA: "+chaine_retour);
          this.waafService.searchTerm = chaine_retour;
          
        });
      }
    // }

  }

  public leverMaintenance(uid: string | undefined, url: string | undefined): void {
    // if(this.auth == undefined){
    //   this.modalService.open(this.modalAuth,{ centered: true });
    // }
    // else{
      if(uid != undefined && url != undefined){    
        this.waafService.searchInProgress$.next(true);  
        this.waafService.leverMaintenance(uid,url).subscribe(res => {
          if(res == "Terminé"){
            alert("La levée de maintenance s'est terminée avec succès");
          }
          else{
            alert("Erreur lors de la levée de maintenance: "+res);
          }
          this.waafService.searchInProgress$.next(false); 
          this.waafService.searchTerm = this.modalWorkflowData.tunnel!.name;
        
        });
      }
    // }

  }


  public checkMaintenance(tunnel: Datum): boolean{
    let bool = false;
    tunnel.workflowParameters.forEach(param => {
      if(param.name == "maintenance.enable" && param.value == "true"){
        bool = true;
      }
    });

    return bool;
  }

  public exportexcel(): void
  {
    /* pass here the table id */
    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
 
    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Tunnels RPs');
 
    /* save to file */  
    XLSX.writeFile(wb, this.fileName);
 
  }

  // The master checkbox will check/ uncheck all items
  checkUncheckAll() {
    console.log("Taille: "+this.checklist.length);
    for (var i = 0; i < this.checklist.length; i++) {
      this.checklist[i].isSelected = this.masterSelected;
    }
    this.getCheckedItemList();
  }

  // Check All Checkbox Checked
  isAllSelected() {
    this.masterSelected = this.checklist.every(function(item:any) {
        return item.isSelected == true;
      })
    this.getCheckedItemList();
  }

  // Get List of Checked Items
  getCheckedItemList(){
    this.checkedList = [];
    for (var i = 0; i < this.checklist.length; i++) {
      if(this.checklist[i].isSelected)
      this.checkedList.push(this.checklist[i].tunnel);
    }
  }
  
  // fonction de trie pour former la liste de filtre pop
  filterPopAppliance(tunnels: Datum[]){
    let tabName: {selected:Boolean, val: string}[] = [];
    tunnels.forEach(element => {
      let elem = {selected:false, val:element.appliance.name};
      if(!this.tablePresent(element.appliance.name,tabName)){
        tabName.push(elem);
      }
    });
    
    this.waafService.listPop = tabName;
  }

    // fonction de trie pour former la liste de filtre pop
    filterPopPort(tunnels: Datum[]){
      let tabName: {selected:Boolean, val: string}[] = [];
      tunnels.forEach(element => {
        let elem = {selected:false, val:element.network.incoming.port.toString()};
        if(!this.tablePresent(element.network.incoming.port.toString(),tabName)){
          tabName.push(elem);
        }
      });
      
      this.waafService.listPop = tabName;
    }

    // fonction de trie pour former la liste de filtre pop
    filterPopCipherProfile(tunnels: Datum[]){
      let tabName: {selected:Boolean, val: string}[] = [];
      
      tunnels.forEach(element => {
        let text = ""
        if(element.network.outgoing.ssl.profile != undefined){
          text = element.network.outgoing.ssl.profile!.name.toString();
        }
        let elem = {selected:false, val:text};
        if(!this.tablePresent(text,tabName)){
          tabName.push(elem);
        }
      });
      
      this.waafService.listPop = tabName;
    }

    // fonction de trie pour former la liste de filtre pop
    filterPopPortBackend(tunnels: Datum[]){
      let tabName: {selected:Boolean, val: string}[] = [];
      tunnels.forEach(element => {
        let elem = {selected:false, val:element.network.outgoing.port.toString()};
        if(!this.tablePresent(element.network.outgoing.port.toString(),tabName)){
          tabName.push(elem);
        }
      });
      
      this.waafService.listPop = tabName;
    }

    // fonction de trie pour former la liste de filtre pop
    filterPopActif(tunnels: Datum[]){
      let tabName: {selected:Boolean, val: string}[] = [];
      tunnels.forEach(element => {
        let elem = {selected:false, val:element.enabled.toString()};
        if(!this.tablePresent(element.enabled.toString(),tabName)){
          tabName.push(elem);
        }
      });
      
      this.waafService.listPop = tabName;
    }

  changePop(pop: String){
    this.waafService.listPop.forEach(elem => {
      if(elem.val == pop){
        if(elem.selected){
          elem.selected = false;
          this.waafService.searchTerm.replace(elem.val.toString(),'');
        }
        else{
          elem.selected = true;
          this.waafService.searchTerm  += "||"+elem.val;
        }
      }

    })
  }

  tablePresent(name: string, tabName: {selected:Boolean, val: string}[]){
    let test = false;
    tabName.forEach(element => {
      if(element.val == name){
        test = true;
      }
    });
    return test;
  }
}
