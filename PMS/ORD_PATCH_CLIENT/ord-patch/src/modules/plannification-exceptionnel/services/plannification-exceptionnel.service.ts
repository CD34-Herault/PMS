import { Injectable } from '@angular/core';
import {formatDate} from '@angular/common';
import { AuthentificationService } from '@modules/generic-services/authentification.service';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Subject,  Observable, of,BehaviorSubject } from 'rxjs';
import { DecimalPipe } from '@angular/common';
import { SortDirection } from '@modules/serveurs/directives';
import { debounceTime, delay, switchMap, tap } from 'rxjs/operators';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { plannification_exceptionnel, serv } from '../models/plannification_exceptionnel.model';
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




@Injectable({
  providedIn: 'root'
})
export class PlannificationExceptionnelService {

  // URL vers serveur
  private baseURL: string = "https://"+globalVariable.baseUrl+"/";

  private plannif: plannification_exceptionnel = {
    date_plannif: formatDate(new Date(), 'dd/MM/yyyy', 'en'),
    horaire_debut: "19:00",
    horaire_fin: "23:00",
    user: '',
    plannifs: [],
    _id: undefined
  };

  constructor(public authService: AuthentificationService, private http: HttpClient) {   }

  plannification(plannifs: Array<serv>, user: string, debut: string,fin: string, date_plannif: NgbDate | undefined): Observable<string>{

    try {
      this.plannif.plannifs = plannifs;
      this.plannif.user = user;
      this.plannif.horaire_debut = debut;
      this.plannif.horaire_fin = fin; 
      if(date_plannif != undefined){
        this.plannif.date_plannif = date_plannif.day.toString().padStart(2, '0')+'/'+date_plannif.month.toString().padStart(2, '0')+'/'+date_plannif.year.toString().padStart(2, '0');
        
      }
      
      return this.http.put<string>(this.baseURL+"servNode/plannificationExceptionnel_add",JSON.stringify(this.plannif), httpOptions); 
    } catch (error) {
      throw{ msg: "Erreur plannification() "+error};
    }
  }

  getPlannifications(): Observable<plannification_exceptionnel[]>{
    try {
      return this.http.get<plannification_exceptionnel[]>(this.baseURL+"servNode/plannificationExceptionnel",httpOptions);
    } catch (error) {
      throw{ msg: "Erreur récupération des plannifs: "+error};
    }
  }
  
  getPlannification(id:string): Observable<plannification_exceptionnel>{
    try {
      return this.http.get<plannification_exceptionnel>(this.baseURL+"servNode/plannificationExceptionnelByid/"+id,httpOptions);
    } catch (error) {
      throw{ msg: "Erreur récupération d'une plannif: "+error};
    }
  }

  supressionPlannification(id: string): Observable<string> {
    try {
      console.log("Test supp: "+id);
      return this.http.delete<string>(this.baseURL+"servNode/deletePlannificationExceptionnel/"+id,httpOptions);
    } catch (error) {
      throw{ msg: "Erreur supression plannif: "+error};
    }
  }

  modificationPlannification(id: string, plannifs: Array<serv>, user: string, debut: string, fin: string, date_plannif: NgbDate | undefined): Observable<String>{
    try {
      this.plannif.plannifs = plannifs;
      this.plannif.user = user;
      this.plannif.horaire_debut = debut;
      this.plannif.horaire_fin = fin;
      if(date_plannif != undefined){
        this.plannif.date_plannif = date_plannif.day.toString().padStart(2, '0')+'/'+date_plannif.month.toString().padStart(2, '0')+'/'+date_plannif.year.toString().padStart(2, '0');
      }
      return this.http.put<String>(this.baseURL+"servNode/PlannificationExceptionnel_modify/"+id,JSON.stringify(this.plannif),httpOptions);
    } catch (error) {
      throw{ msg: "Erreur modification Plannification: "+error};
    }
  }


}
