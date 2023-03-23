import { ErrorHandler, Injectable, PipeTransform } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Subject,  Observable, of,BehaviorSubject } from 'rxjs';
import { DecimalPipe } from '@angular/common';
import {Serveur} from '@modules/serveurs/models';
import { SortDirection } from '@modules/serveurs/directives';
import { debounceTime, delay, switchMap, tap } from 'rxjs/operators';
import * as globalVariable from '../../utility/components/globals';;

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
  serveurs: Serveur[];
  total: number;
  total_maj: number;
}

interface State {
  page: number;
  pageSize: number;
  searchTerm: string;
  sortColumn: string;
  sortDirection: SortDirection;
  typeSelected: string;
  OSSelected: string,
}



function compare(v1: number | string | Date, v2: number | string | Date) {
  return v1 < v2 ? -1 : v1 > v2 ? 1 : 0;
}

function sort(serveurs: Serveur[], column: string, direction: string): Serveur[] {
  if (direction === '') {
      return serveurs;
  } else {
      return [...serveurs].sort((a, b) => {
        var res = null
        if (column == "date_last_rapport") {
          let date_split = a[column].split("/");
          let date1=new Date(date_split[2]+'/'+date_split[1]+'/'+date_split[0]);

          let date_split2 = b[column].split("/");
          let date2=new Date(date_split2[2]+'/'+date_split2[1]+'/'+date_split2[0]);

           res = compare(date1, date2);
        }
        else{
           res = compare(a[column], b[column]);
        }
        return direction === 'asc' ? res : -res; 
      });
  }
}

function matches_type(serveur: Serveur, type: string){
  if(type == "Tous" || type == "All"){
    return true;
  }
  return serveur.type == type || serveur.os_quick.toLocaleLowerCase().includes(type.toLocaleLowerCase());
}

function matches(serveur: Serveur, term: string, pipe: PipeTransform) {
  return (
      serveur.name.toLowerCase().includes(term.toLowerCase()) ||
      serveur.type.toLowerCase().includes(term.toLowerCase()) ||
      serveur.ip.toLowerCase().includes(term.toLowerCase()) ||
      serveur.OS.toLowerCase().includes(term.toLowerCase()) ||
      serveur.description.toLowerCase().includes(term.toLowerCase()) ||
      pipe.transform(serveur.kb_manquantes).includes(term) ||
      serveur.date_last_rapport.toLowerCase().includes(term.toLowerCase())
  );
}


@Injectable({
  providedIn: 'root'
})
export class ServeursService {
  private _loading$ = new BehaviorSubject<boolean>(true);
  private _search$ = new Subject<void>();
  private _mesServ$ = new BehaviorSubject<Serveur[]>([]);
  private _serveurs$ = new BehaviorSubject<Serveur[]>([]);
  private _total$ = new BehaviorSubject<number>(0);
  private _total_maj$ = new BehaviorSubject<number>(0);

  // URL vers serveur
  private baseURL: string = "https://"+globalVariable.baseUrl+"/";

  private _state: State = {
    page: 1,
    pageSize: 20,
    searchTerm: '',
    sortColumn: '',
    sortDirection: '',
    typeSelected: 'Tous',
    OSSelected: 'Alco_Windows',
  };

  constructor(private pipe: DecimalPipe,private http: HttpClient) {


    this._search$
    .pipe(
        tap(() => this._loading$.next(true)),
        debounceTime(120),
        switchMap(() =>  this.get_serveurs()),
        delay(120),
        tap(() => this._loading$.next(false))
    )
    .subscribe(result => {
        this._mesServ$.next(result);
    });

    this._mesServ$
    .pipe(
        tap(() => this._loading$.next(true)),
        debounceTime(120),
        switchMap((res) =>  this._search(res)),
        delay(120),
        tap(() => this._loading$.next(false))
    )
    .subscribe(result => {
        this._serveurs$.next(result.serveurs);
        this._total$.next(result.total);
        this._total_maj$.next(result.total_maj);
    });

    this._search$.next();
   }

  get messerveurs$() {
    return this._mesServ$.asObservable();
  }
  get serveurs$() {
    return this._serveurs$.asObservable();
  }
  get total$() {
    return this._total$.asObservable();
  }
  get total_maj$() {
    return this._total_maj$.asObservable();
  }
  get loading$() {
    return this._loading$.asObservable();
  }
  get page() {
    return this._state.page;
  }
  set page(page: number) {
    this._set({ page });
  }
  get pageSize() {
    return this._state.pageSize;
  }
  set pageSize(pageSize: number) {
    this._set({ pageSize });
  }
  get typeselected() {
    return this._state.typeSelected;
  }
  set typeselected(typeSelected: string) {
    this._set({ typeSelected });
  }
  get searchTerm() {
    return this._state.searchTerm;
  }
  set searchTerm(searchTerm: string) {
    this._set({ searchTerm });
  }
  set sortColumn(sortColumn: string) {
    this._set({ sortColumn });
  }
  set sortDirection(sortDirection: SortDirection) {
    this._set({ sortDirection });
  }
  set OSSelected(OSSelected: string) {
    this._set({ OSSelected });
  }


  private _set(patch: Partial<State>) {
    Object.assign(this._state, patch);
    this._search$.next();
  }

  private _search(mesServ: Serveur[]): Observable<SearchResult> {
    
      const { sortColumn, sortDirection, pageSize, page, searchTerm, typeSelected } = this._state;

      // 1. tri
      let serveurs = sort(mesServ, sortColumn, sortDirection);
      
      // 2. filtre
      let searchTermSplit = searchTerm.split("");
      let serveurs_final: Serveur[] = [];
      if(searchTerm.includes("||")){
        searchTermSplit = searchTerm.split(" || ");        
        searchTermSplit.forEach(term => {
          serveurs_final.push(...serveurs.filter(serveurs => matches(serveurs, term, this.pipe)));
        });
        
        serveurs = serveurs_final;
      }
      else if(searchTerm.includes("&&")){
        searchTermSplit = searchTerm.split(" && ");
        searchTermSplit.forEach(term => {
          serveurs_final.push(...serveurs.filter(serveurs => matches(serveurs, term, this.pipe)));
          serveurs = serveurs_final;
        });
      }
      else{
        serveurs = serveurs.filter(serveur => matches(serveur, searchTerm, this.pipe));
      }


       // 2. filtre sur le type
      serveurs = serveurs.filter(serveur => matches_type(serveur, typeSelected));
      const total = serveurs.length;

      let total_maj = 0;
      serveurs.forEach(serv => {
        total_maj += serv.kb_manquantes;
      });

      // 3. pagination
      serveurs = serveurs.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
      return of({ serveurs, total, total_maj });
  }


  private get_serveurs(): Observable<Serveur[]> {
    try {
      return this.http.get<Serveur[]>(this.baseURL+"servNode/serveurs/"+this._state.OSSelected,  httpOptions); 
    } catch (error) {
      throw{ msg: "Erreur get_serveurs(): "+error};
    }
  }

  public get_serveursFixed(): Observable<Serveur[]> {
    try {
      return this.http.get<Serveur[]>(this.baseURL+"servNode/FixedServer",  httpOptions); 
    } catch (error) {
      throw{ msg: "Erreur get_FixedServer(): "+error};
    }
  }

  public put_serveursFixed(serv: Serveur): Observable<String> {
    try {
      return this.http.put<String>(this.baseURL+"servNode/addFixedServer",serv, httpOptions); 
    } catch (error) {
      throw{ msg: "Erreur put_FixedServer(): "+error};
    }
  }




}
