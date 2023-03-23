import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';
import { Observable } from 'rxjs';
import { Calendrier, Colors, TaskItem, TimeLineItem } from '../models';
import * as globalVariable from "../../utility/components/globals"
import { PlannificationExceptionnelService } from '@modules/plannification-exceptionnel/services';

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
export class CalendrierService {

  // URL vers serveur
  private baseURL: string = "https://"+globalVariable.baseUrl+"/";

  constructor(private http: HttpClient, private ExceptionnelService: PlannificationExceptionnelService) {}

  public get_calendrier(): Observable<Calendrier[]> {
    try {
      return this.http.get<Calendrier[]>(this.baseURL+"servNode/getCalendriers/", httpOptions); 
    } catch (error) {
      throw{ msg: "Erreur get_calendrier(): "+error};
    }
  }

  public get_oneCalendrier(id: string): Observable<Calendrier> {
    try {
      return this.http.get<Calendrier>(this.baseURL+"servNode/getCalendrier/"+id, httpOptions); 
    } catch (error) {
      throw{ msg: "Erreur get_oneCalendrier(): "+error};
    }
  }
  
  public put_calendrier(calendrier: Calendrier): Observable<string> {
    try {
      return this.http.put<string>(this.baseURL+"servNode/putCalendriers/",JSON.stringify(calendrier), httpOptions); 
    } catch (error) {
      throw{ msg: "Erreur get_calendrier(): "+error};
    }
  }

  public put_dates(dates: CalendarEvent,calendrier: string): Observable<string> {
    try {
      return this.http.put<string>(this.baseURL+"servNode/putDate/"+calendrier,JSON.stringify(dates), httpOptions); 
    } catch (error) {
      throw{ msg: "Erreur get_calendrier(): "+error};
    }
  }

  public supressionCalendrier(id: string): Observable<string> {
    try {
      return this.http.delete<string>(this.baseURL+"servNode/deleteCalendriers/"+id,httpOptions);
    } catch (error) {
      throw{ msg: "Erreur supression calendrier: "+error};
    }
  }

  public updateCalendrier(id:string,color:Colors): Observable<string>{
    try {
      return this.http.put<string>(this.baseURL+"servNode/updateCalendriers/"+id,JSON.stringify(color),httpOptions);
    } catch (error) {
      throw{ msg: "Erreur update calendrier: "+error};
    }
  }

  public get_tasks(day: string): Observable<TaskItem[]> {
    try {
      return this.http.get<TaskItem[]>(this.baseURL+"servNode/getTasks/"+day, httpOptions); 
    } catch (error) {
      throw{ msg: "Erreur get_tasks(): "+error};
    }
  }

  public deleteEvent(event: CalendarEvent): Observable<string>{
    try {
      return this.http.delete<string>(this.baseURL+"servNode/deleteDate/"+event.start,httpOptions);
    } catch (error) {
      throw{msg: "Erreur deleteEvent(): "+error};
    }
  }

  public deleteEventById(_id: string): Observable<string>{
    try {
      return this.http.delete<string>(this.baseURL+"servNode/deleteDateById/"+_id,httpOptions);
    } catch (error) {
      throw{msg: "Erreur deleteEventById(): "+error};
    }
  }


}
