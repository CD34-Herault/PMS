import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, PipeTransform } from '@angular/core';
import {BehaviorSubject, Observable, of, Subject} from 'rxjs';

import {DecimalPipe} from '@angular/common';
import {debounceTime, delay, switchMap, tap} from 'rxjs/operators';
import { SortDirection } from '@modules/waaf/directives';

import * as globalVariable from "../../utility/components/globals"
import { Datum, Tunnels } from '../models';

interface SearchResult {
  tunnels: Datum[];
  total: number;
}

interface State {
  page: number;
  pageSize: number;
  searchTerm: string;
  sortColumn: string;
  sortDirection: SortDirection;
}

const compare = (v1: string | number, v2: string | number) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;

function sort(tunnel: Datum[], column: string, direction: string): Datum[] {
  if (direction === '' || column === '') {
    return tunnel;
  } else {
    return [...tunnel].sort((a, b) => {
      const res = compare(a[column], b[column]);
      return direction === 'asc' ? res : -res;
    });
  }
}

function matches(tunnel: Datum, term: string, pipe: PipeTransform) {
  return (tunnel.name.toLowerCase().includes(term.toLowerCase())
     || tunnel.appliance.name.toLowerCase().includes(term.toLowerCase())  
     || tunnel.network.incoming.serverName.toLowerCase().includes(term.toLowerCase())
     || pipe.transform(tunnel.network.incoming.port).includes(term))
     || tunnel.network.outgoing.address.toLowerCase().includes(term.toLowerCase())
     || tunnel.workflow.name.toLowerCase().includes(term.toLowerCase());
}

const httpOptions = {
  headers: new HttpHeaders({
    "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE",	  
    "Access-Control-Allow-Headers": "Content-type",  
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  }),
  withCredentials: true,
};

@Injectable({
  providedIn: 'root'
})
export class WaafService {
  private _loading$ = new BehaviorSubject<boolean>(true);
  private _searchInProgress$ = new BehaviorSubject<boolean>(false);
  private _search$ = new Subject<void>();
  private _tunnel$ = new BehaviorSubject<Datum[]>([]);
  private _mesTunnel$ = new BehaviorSubject<Datum[]>([]);
  private _total$ = new BehaviorSubject<number>(0);
  private heberge = new BehaviorSubject<boolean>(false);

  public listPop: {selected:Boolean, val: string}[] = [];

  private _state: State = {
    page: 1,
    pageSize: 20,
    searchTerm: '',
    sortColumn: '',
    sortDirection: ''
  };

  // URL vers serveur
  private baseURL: string = "https://"+globalVariable.baseUrl+"/";

  constructor(private http: HttpClient, private pipe: DecimalPipe) {
    this._search$.pipe(
      tap(() => this._loading$.next(true)),
      debounceTime(200),
      switchMap(() => this.getTunnels()),
      delay(200),
      tap(() => this._loading$.next(false))
    ).subscribe(result => {
      let data_master = result.data.filter(function(element) { return element.type =="default"});
      this._mesTunnel$.next(data_master);
    });

    this._mesTunnel$
    .pipe(
      tap(() => this._loading$.next(true)),
      debounceTime(120),
      switchMap((res) =>  this._search(res)),
      delay(120),
      tap(() => this._loading$.next(false))
    )
    .subscribe(result => {
        this._tunnel$.next(result.tunnels);
        this._total$.next(result.total);
    });

    this._search$.next();

    this.heberge.subscribe(res => {
      this._search$.next();
    })
  }

  get tunnels$() { return this._tunnel$.asObservable(); }
  get total$() { return this._total$.asObservable(); }
  get loading$() { return this._loading$.asObservable(); }
  get searchInProgress$() { return this._searchInProgress$}
  get page() { return this._state.page; }
  get pageSize() { return this._state.pageSize; }
  get searchTerm() { return this._state.searchTerm; }

  set page(page: number) { this._set({page}); }
  set pageSize(pageSize: number) { this._set({pageSize}); }
  set searchTerm(searchTerm: string) { this._set({searchTerm}); }
  set sortColumn(sortColumn: string) { this._set({sortColumn}); }
  set sortDirection(sortDirection: SortDirection) { this._set({sortDirection}); }
  set heberge$(val: boolean){ this.heberge.next(val);}

  private _set(patch: Partial<State>) {
    Object.assign(this._state, patch);
    this._search$.next();
  }

  private _search(mesTunnels: Datum[]): Observable<SearchResult> {
    const {sortColumn, sortDirection, pageSize, page, searchTerm} = this._state;

    // 1. sort
    let tunnels = sort(mesTunnels, sortColumn, sortDirection);

    // 2. filter
    let searchTermSplit = searchTerm.split("||");
    let tunnel_final: Datum[] = [];
    searchTermSplit.forEach(term => {
      tunnel_final.push(...tunnels.filter(tunnel => matches(tunnel, term, this.pipe)));
    });
    tunnels = tunnels.filter(tunnel => matches(tunnel, searchTerm, this.pipe));
    tunnels = tunnel_final;
    const total = tunnels.length;
    console.log("TOTAL: "+total)
    // 3. paginate
    tunnels = tunnels.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
    return of({tunnels, total});
  }


  getTunnels(): Observable<Tunnels>{
    try {
      return this.http.get<Tunnels>(this.baseURL+'servNode/waaf/tunnels/'+this.heberge.getValue(),httpOptions);
    } catch (error) {
      throw{ msg: "Erreur récupération des tunnels: "+error};
    }
  }

  maintenance(uid:string,url:string): Observable<string>{
    console.log("uu: "+uid+" ur: "+url);
    try {
      return this.http.get<string>(this.baseURL+'servNode/waaf/maintenance/'+url+'/'+uid+'/'+this.heberge.getValue(),httpOptions);
    } catch (error) {
      throw{ msg: "Erreur mise en maintenance: "+error};
    }
  }

  
  maintenanceMultiple(tunnels: Datum[]): Observable<string>{
    let _load = new BehaviorSubject<number>(0);
    let _fin = new Subject<string>();
    _load.subscribe(num => {
      console.log("le num: "+num);
      if(num == tunnels.length -1){
        this.maintenance(tunnels[num].uid,tunnels[num].network.incoming.serverName).subscribe(res => { _fin.next(res)})
      }
      else{
        
        let inc = num+1;
        return this.maintenance(tunnels[num].uid,tunnels[num].network.incoming.serverName).subscribe(res => { _load.next(inc)});
         
      }
      return 
    });
    return _fin;
  }

  leverMaintenanceMultiple(tunnels: Datum[]): Observable<string>{
    let _load = new BehaviorSubject<number>(0);
    let _fin = new Subject<string>();
    _load.subscribe(num => {
      console.log("le num: "+num);
      if(num == tunnels.length -1){
        this.leverMaintenance(tunnels[num].uid,tunnels[num].network.incoming.serverName).subscribe(res => { _fin.next(res)})
      }
      else{
        
        let inc = num+1;
        return this.leverMaintenance(tunnels[num].uid,tunnels[num].network.incoming.serverName).subscribe(res => { _load.next(inc)});
         
      }
      return 
    });
    return _fin;

  }

  leverMaintenance(uid:string,url:string):  Observable<string>{
    try {
      return this.http.get<string>(this.baseURL+'servNode/waaf/levermaintenance/'+url+'/'+uid+'/'+this.heberge.getValue(),httpOptions);
    } catch (error) {
      throw{ msg: "Erreur lever la maintenance: "+error};
    }
  }

}
