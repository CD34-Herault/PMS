import { ErrorHandler, Injectable, PipeTransform } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Subject,  Observable, of,BehaviorSubject } from 'rxjs';
import { DecimalPipe } from '@angular/common';
import {Serveur} from '@modules/serveurs/models';
import { SortDirection } from '@modules/serveurs/directives';
import { debounceTime, delay, switchMap, tap } from 'rxjs/operators';
import { Config_serveur } from '../models';
import * as globalVariable from '../../utility/components/globals';;

const httpOptions = {
  headers: new HttpHeaders({
    "Access-Control-Allow-Methods": "GET,POST,PUT",	  
    "Access-Control-Allow-Headers": "Content-type",  
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  }),
  withCredentials: true,
};


@Injectable({
  providedIn: 'root'
})
export class ConfigServeurService {

  public configServeur: BehaviorSubject<Config_serveur> | undefined;

  // URL vers serveur
  private baseURL: string = "https://"+globalVariable.baseUrl+"/";

  constructor(private http: HttpClient) {
    
    httpOptions.headers.set("Access-Control-Allow-Origin","*");
    this.get_config_serveur().subscribe(res => {
      this.configServeur = new BehaviorSubject<Config_serveur>(res);
    })
  }

  get_config_serveur(): Observable<Config_serveur> {
    try {
      return this.http.get<Config_serveur>(this.baseURL+"servNode/config_serveur", httpOptions); 
    } catch (error) {
      throw{ msg: "Erreur get_config_serveur(): "+error};
    }
  }

  put_config_serveur(config: Config_serveur): Observable<String> {
    try {
      return this.http.put<String>(this.baseURL+"servNode/config_serveur_ajout/", JSON.stringify(config), httpOptions); 
    } catch (error) {
      throw{ msg: "Erreur put_config_serveur(): "+error};
    }
  }

  getUpdateServeurs(): Observable<String> {
    try {
      return this.http.get<String>(this.baseURL+"servNode/updateServ", httpOptions); 
    } catch (error) {
      throw{ msg: "Erreur UpdateServeur(): "+error};
    }
  }




}
