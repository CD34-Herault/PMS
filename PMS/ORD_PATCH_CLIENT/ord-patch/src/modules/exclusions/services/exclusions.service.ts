import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { serv_exclu } from '../models';
import * as globalVariable from "../../utility/components/globals"

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
export class ExclusionsService {

  // URL vers serveur
  private baseURL: string = "https://"+globalVariable.baseUrl+"/";

  constructor(private http: HttpClient) {}

  ajout(mesServ: serv_exclu[],urlKey: string): Observable<string>{
    try {
      if(urlKey.length <= 2){
        return this.http.put<string>(this.baseURL+'servNode/exclusions_add/0',JSON.stringify(mesServ),httpOptions);
      }
      else{
        return this.http.put<string>(this.baseURL+'servNode/exclusions_add/'+urlKey,JSON.stringify(mesServ),httpOptions);
      }
    } catch (error) {
      throw{ msg: "Erreur envoie des exclusions: "+error};
    }
  }

  getExclusions(): Observable<serv_exclu[]>{
    try {
      return this.http.get<serv_exclu[]>(this.baseURL+'servNode/exclusions',httpOptions);
    } catch (error) {
      throw{ msg: "Erreur récupération des exclusions: "+error};
    }
  }
  deleteExclusions(_id: string,user: string,urlKey: string): Observable<string>{
    try {
      if(urlKey.length <= 2){
        return this.http.delete<string>(this.baseURL+'servNode/exclusions_delete/'+_id+'/'+user+'/0',httpOptions);
      }
      else{
        return this.http.delete<string>(this.baseURL+'servNode/exclusions_delete/'+_id+'/'+user+'/'+urlKey,httpOptions);
      }
    } catch (error) {
      throw{ msg: "Erreur supression des exclusions: "+error};
    }
  }

  commentExclusions(_id: string,comment: string,urlKey: string): Observable<string>{
    try {
      if(urlKey.length <= 2){
        return this.http.put<string>(this.baseURL+'servNode/exclusions_comment/'+_id+'/0',JSON.stringify({commentaire: comment}),httpOptions);
      }
      else{
        return this.http.put<string>(this.baseURL+'servNode/exclusions_comment/'+_id+'/'+urlKey,JSON.stringify({commentaire: comment}),httpOptions);
      }
    } catch (error) {
      throw{ msg: "Erreur envoie des exclusions: "+error};
    }
  }
}
