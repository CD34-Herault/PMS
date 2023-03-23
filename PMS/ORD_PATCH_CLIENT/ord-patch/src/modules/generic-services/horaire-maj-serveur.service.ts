import { ErrorHandler, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Subject, BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
import * as globalVariable from '../utility/components/globals';

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
export class HoraireMajServeurService {

  // URL vers serveur
  private baseURL: string = "https://"+globalVariable.baseUrl+"/";

  constructor(private http: HttpClient) {}


  public getHoraireMaj(): Observable<string>{
    try {
      return this.http.get<string>(this.baseURL + 'servNode/config_serveur_horaire_maj',httpOptions);
    } catch (error) {
      throw { msg: error };
      }
  }
  
}
