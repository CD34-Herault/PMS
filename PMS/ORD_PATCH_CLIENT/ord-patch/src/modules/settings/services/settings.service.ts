import { ErrorHandler, Injectable, PipeTransform } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Subject,  Observable, of,BehaviorSubject } from 'rxjs';
import { DecimalPipe } from '@angular/common';
import {Serveur} from '@modules/serveurs/models';
import { SortDirection } from '@modules/serveurs/directives';
import { debounceTime, delay, switchMap, tap } from 'rxjs/operators';
import { User_profil} from '../models';
import * as globalVariable from '../../utility/components/globals';

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
export class SettingsService {

  public userProfil: BehaviorSubject<User_profil> | undefined;

  // URL vers serveur
  private baseURL: string = "https://"+globalVariable.baseUrl+"/";

  constructor(private http: HttpClient) {
    this.get_user_profil().subscribe(res => {
      this.userProfil = new BehaviorSubject<User_profil>(res);
    })
  }

  public  get_user_profil(): Observable<User_profil> {
    try {
      return this.http.get<User_profil>(this.baseURL+"servNode/users_profil", httpOptions); 
    } catch (error) {
      throw{ msg: "Erreur get_user_profil(): "+error};
    }
  }

  public get_user_profil_all(): Observable<User_profil[]>{
    try {
      return this.http.get<User_profil[]>(this.baseURL+"servNode/users_profil_all", httpOptions); 
    } catch (error) {
      throw{ msg: "Erreur get_user_profil(): "+error};
    }
  }

  put_user_profil(profil: User_profil): Observable<String> {
    try {
      return this.http.put<String>(this.baseURL+"servNode/users_profil_ajout", JSON.stringify(profil), httpOptions); 
    } catch (error) {
      throw{ msg: "Erreur put_config_serveur(): "+error};
    }
  }
}
