import { DecimalPipe } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, PipeTransform } from '@angular/core';
import { Serveur } from '@modules/serveurs/models';
import { BehaviorSubject, debounceTime, delay, Observable, of, Subject, switchMap, tap } from 'rxjs';
import { Historique } from '../models';
import * as globalVariable from '../../utility/components/globals';

const httpOptions = {
  headers: new HttpHeaders({
    "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE",	  
    "Access-Control-Allow-Headers": "Content-type",  
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  }),
  withCredentials: true,
};


interface SearchResult {
  historiques: Historique[];
  total: number;
}

interface State {
  dateSelected_debut: Date | string;
  dateSelected_fin: Date | string;
  typeSelected: string;
  serveursSelected: string[];
  OSSelected: string,
}


function matches_type_serveur(serveur: Serveur, type: string){
  let lesTypes = type.split(",");
  if(lesTypes[0] == "Tous"){
    return true;
  }
  return lesTypes.includes(serveur.type);
}

function matches_serveur_selected(serv: Serveur, serveurs: string[], pipe: PipeTransform){
  if(serveurs.length == 0){
    //console.log("toujours true par de selec");
    return true;
  }
  
  let res = false;
  serveurs.forEach(serveur => {
    if(matches(serv,serveur,pipe) == true){
      res = true;
    };
  });
  return res;
}


function matches_date(historique: Historique, date_debut : Date | string, date_fin: Date | string){
  let maDate = new Date(historique.date);
  maDate.setHours(0)
  if(date_debut == "TOUT" && date_fin == "TOUT"){
    return true;
  }
  else if(date_debut == "TOUT" && date_fin instanceof Date){
    return (
      maDate.getTime() === date_fin.getTime()
    );
  }
  else if(date_debut instanceof Date && date_fin == "TOUT"){
    return (
      maDate.getTime() === date_debut.getTime()
    );
  }
  else if ( date_debut instanceof Date && date_fin instanceof Date){
    return (
      maDate.getTime()  >= date_debut.getTime() && maDate.getTime() <= date_fin.getTime()
    );
  }
  throw console.error("Erreur Date type");
  
}


function matches(serveur: Serveur, term: string, pipe: PipeTransform) {
  return (
      serveur.name.toLowerCase().includes(term.toLowerCase()) ||
      serveur.type.toLowerCase().includes(term.toLowerCase()) ||
      serveur.ip.toLowerCase().includes(term.toLowerCase()) ||
      serveur.OS.toLowerCase().includes(term.toLowerCase()) ||
      serveur.description.toLowerCase().includes(term.toLowerCase()) ||
      pipe.transform(serveur.kb_manquantes).includes(term) ||
      pipe.transform(serveur.kb_failed).includes(term) ||
      pipe.transform(serveur.kb_inconnus).includes(term) ||
      serveur.date_dernier_update.toLocaleLowerCase().includes(term.toLocaleLowerCase()) ||
      serveur.date_last_rapport.toLowerCase().includes(term.toLowerCase()) 
  );
}



@Injectable({
  providedIn: 'root'
})
export class HistoriqueService {
  private _loading$ = new BehaviorSubject<boolean>(true);
  private _search$ = new Subject<void>();
  private _mesHisto$ = new Subject<Historique[]>();
  private _historique$ = new BehaviorSubject<Historique[]>([]);
  private _total$ = new BehaviorSubject<number>(0);

  //Images pour rapport
  public imgAreaProd = new BehaviorSubject<string>("");
  public imgAreaPre = new BehaviorSubject<string>("");
  public imgAreaBdd = new BehaviorSubject<string>("");
  public imgAreaProdBdd = new BehaviorSubject<string>("");

  public imgAreaRec = new BehaviorSubject<string>("");
  public imgAreaBddRec = new BehaviorSubject<string>("");
  public imgAreaRecBddRec = new BehaviorSubject<string>("");

  public imgBarProd = new BehaviorSubject<string>("");
  public imgBarPre = new BehaviorSubject<string>("");
  public imgBarBdd = new BehaviorSubject<string>("");
  public imgBarProdBdd = new BehaviorSubject<string>("");

  public imgBarRec = new BehaviorSubject<string>("");
  public imgBarBddRec = new BehaviorSubject<string>("");
  public imgBarRecBddRec = new BehaviorSubject<string>("");

  public imgPie = new BehaviorSubject<string>("");

  public majAvProdAppli = new BehaviorSubject<string>("");
  public majApProdAppli = new BehaviorSubject<string>("");
  public majAvPreAppli = new BehaviorSubject<string>("");
  public majApPreAppli = new BehaviorSubject<string>("");
  
  public majAvProdBdd = new BehaviorSubject<string>("");
  public majApProdBdd = new BehaviorSubject<string>("");

  public majAvRecAppli = new BehaviorSubject<string>("");
  public majApRecAppli = new BehaviorSubject<string>("");

  public majAvRecBdd = new BehaviorSubject<string>("");
  public majApRecBdd = new BehaviorSubject<string>("");

  // URL vers serveur
  private baseURL: string = "https://"+globalVariable.baseUrl+"/";

  private _state: State = {
    dateSelected_debut: "TOUT",
    dateSelected_fin: "TOUT",
    typeSelected: 'Tous',
    serveursSelected: [],
    OSSelected: 'Alco_Windows',
  };

  constructor(private pipe: DecimalPipe,private http: HttpClient) {
    


    this._search$
    .pipe(
        tap(() => this._loading$.next(true)),
        debounceTime(120),
        switchMap(() =>  this.get_historiques()),
        delay(120),
    )
    .subscribe(result => {
        this._mesHisto$.next(result);
    });

    this._mesHisto$
    .pipe(
        debounceTime(120),
        switchMap((res) =>  this._search(res)),
        delay(120),
        tap(() => this._loading$.next(false))
    )
    .subscribe(result => {
        this._historique$.next(result.historiques);
        this._total$.next(result.total);
    });

    this._search$.next();
   }

  get meshistorique$() {
    return this._mesHisto$.asObservable();
  }
  get historique$() {
    return this._historique$.asObservable();
  }
  get total$() {
    return this._total$.asObservable();
  }
  get loading$() {
    return this._loading$.asObservable();
  }

  get dateselected_debut(){
    return this._state.dateSelected_debut;
  }
  get dateselected_fin(){
    return this._state.dateSelected_fin;
  }

  set dateSelected_debut(date: Date | null) {
    if(date == null){
      let dateSelected_debut = "TOUT"
      this._set({ dateSelected_debut });
    }
    else{
      let dateSelected_debut = date;
      this._set({ dateSelected_debut });
    }
    console.log("DATEEE: "+date);
  }
  

  set dateSelected_fin(date: Date | null) {
    if(date == null){
      let dateSelected_fin = "TOUT"
      this._set({ dateSelected_fin });
    }
    else{
      let dateSelected_fin = date;
      this._set({ dateSelected_fin });
    }
  }

  get typeselected() {
    return this._state.typeSelected;
  }
  set typeselected(typeSelected: string) {
    this._set({ typeSelected });
  }

  get serveursselected() {
    return this._state.serveursSelected;
  }
  set serveursselected(serveursSelected: string[]) {
    this._set({ serveursSelected });
  }
  set OSSelected(OSSelected: string) {
    this._set({ OSSelected });
  }

  private _set(patch: Partial<State>) {
    Object.assign(this._state, patch);
    this._search$.next();
  }




  
  private _search(mesHisto: Historique[]): Observable<SearchResult> {
    
    const {dateSelected_debut, dateSelected_fin, typeSelected, serveursSelected } = this._state;

    let historiques = mesHisto;

    // 1 filtre
    historiques = historiques.filter(histo => matches_date(histo,dateSelected_debut, dateSelected_fin));

    // 2 filtre sur le type
    historiques.forEach(historique => {
      historique.serveurs = historique.serveurs.filter(serveur => matches_type_serveur(serveur,typeSelected));
    });
    
    
    // 2.2 filtre sur les serveurs séléctionnés
    historiques.forEach(historique => {
      historique.serveurs = historique.serveurs.filter(serveur => matches_serveur_selected(serveur,serveursSelected,this.pipe));
    });

    historiques = historiques.filter(historique => historique.serveurs.length > 0);
    // 3. pagination
    //serveurs = serveurs.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
    const total = historiques.length;

    return of({ historiques, total });
}

private get_historiques(): Observable<Historique[]> {
  try {
    return this.http.get<Historique[]>(this.baseURL+"servNode/historiques/"+this._state.OSSelected, httpOptions); 
  } catch (error) {
    throw{ msg: "Erreur get_serveurs(): "+error};
  }
}

public generateRapport(nbr_jours: number,env: string,bdd: boolean, email: string): Observable<string>{
  try {
    if(env == "Prod"){
      if(bdd == true){
        return this.http.put<string>(this.baseURL+"servNode/historiques_rapport/"+env+"/"+email+"/true/"+this.majAvProdBdd.getValue()+"/"+this.majApProdBdd.getValue(),{areaProd: this.imgAreaProd.getValue(),areaPre: this.imgAreaPre.getValue(), areaBdd: this.imgAreaBdd.getValue(),areaProdBdd: this.imgAreaProdBdd.getValue(),barProd: this.imgBarProd.getValue(),barPre: this.imgBarPre.getValue(), barBdd: this.imgBarBdd.getValue(),barProdBdd: this.imgBarProdBdd.getValue(), pie: this.imgPie.getValue()},httpOptions); 
      }
      else{
        return this.http.put<string>(this.baseURL+"servNode/historiques_rapport/"+env+"/"+email+"/false/"+(parseInt(this.majAvProdAppli.getValue())+parseInt(this.majAvPreAppli.getValue()))+"/"+(parseInt(this.majApProdAppli.getValue())+parseInt(this.majApPreAppli.getValue())),{areaProd: this.imgAreaProd.getValue(),areaPre: this.imgAreaPre.getValue(),barProd: this.imgBarProd.getValue(),barPre: this.imgBarPre.getValue(), pie: this.imgPie.getValue()},httpOptions); 

      }
    }
    else{
      if(bdd == true){

        return this.http.put<string>(this.baseURL+"servNode/historiques_rapport/"+env+"/"+email+"/true/"+this.majAvRecBdd.getValue()+"/"+this.majApRecBdd.getValue(),{areaRec: this.imgAreaRec.getValue(), areaBddRec: this.imgAreaBddRec.getValue(),areaRecBddRec: this.imgAreaRecBddRec.getValue(),barRec: this.imgBarRec.getValue(),barBddRec: this.imgBarBddRec.getValue(),barRecBddRec: this.imgBarRecBddRec.getValue(), pie: this.imgPie.getValue()}, httpOptions); 
      }
      else{

        return this.http.put<string>(this.baseURL+"servNode/historiques_rapport/"+env+"/"+email+"/false/"+this.majAvRecAppli.getValue()+"/"+this.majApRecAppli.getValue(),{areaRec: this.imgAreaRec.getValue(),barRec: this.imgBarRec.getValue(), pie: this.imgPie.getValue()}, httpOptions); 

      }
    }
  } catch (error) {
    throw{ msg: "Erreur get_serveurs(): "+error};
  }
}

}
