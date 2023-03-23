import { ErrorHandler, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Subject, BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
import * as globalVariable from '../utility/components/globals'


const httpOptions = {
  headers: new HttpHeaders({
    "Access-Control-Allow-Methods": 'GET,POST,OPTIONS,DELETE,PUT',
    "Access-Control-Allow-Headers": "*",
    "Content-Type": "application/json, text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
    "Access-Control-Allow-Origin": "*",
    
  }),
  withCredentials: true,
};


// --------- Interface pour récupérer + facielement les infos de l'user ---------------------
interface User {
  name: String;
  displayName: String;
  groups: string[];
  adUser: any;

}

interface SSOOjbect {
  user: User;
}

interface ConnectionSSOResponse {
  sso: SSOOjbect;
}


@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  //variable qui stockera mon user authentifié
  public user: BehaviorSubject<any> = new BehaviorSubject<any>(undefined);
  public isAdmin: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  public fin_check: BehaviorSubject<any> = new BehaviorSubject<any>(undefined);
  public fin_conn: BehaviorSubject<any> = new BehaviorSubject<any>(undefined);

  // URL vers serveur
  private baseURL: string = "https://"+globalVariable.baseUrl+"/";

  isConnected: Boolean = false;

  constructor(private http: HttpClient) {
    this.user.subscribe(user => {
      if (user != null) {
        if (user.groups.includes('DEPT34\\GG A Admin PatchManagement')) {
          this.isAdmin.next(true);
        }
      }
    });
  }

  // ------------ Mes fonctions services d'authentification --------------


  disconnect(): Observable<any> {
    this.user.next(undefined);
    this.isConnected = false;
    try {
      return this.http.get<any>(this.baseURL + 'mysso/disconnect', httpOptions);

    } catch (error) {
      throw { msg: 'erreur de deconnexion' };
    }
  }

  verificationConnexion(): Observable<any> {
    console.log("Verification Connexion");
    try {
      return this.http.get<ConnectionSSOResponse>(this.baseURL + 'mysso/is-connected', httpOptions);
    } catch (error) {
      throw { msg: 'Not connected sorry' };
    }
  }

  async checkConnection() {
    try {
      const sso = this.http
        .get<ConnectionSSOResponse>(this.baseURL + 'mysso/is-connected',httpOptions).subscribe({
          next: data => {
            console.log('sso', sso);
            this.user.next(data.sso.user);
            this.isConnected = true;
            this.fin_check.next(true);
            this.fin_conn.next(true);

          },
          error: error => {
            console.error('error', error);
            this.isConnected = false;
            this.fin_check.next(true);
          }
        });
    } catch (e) {
      throw { msg: 'Erreur de check_connexion' };
    }
  }

  async connectWithSSO() {

    console.log("Connexion sso");
    await this.checkConnection();

    this.fin_check.subscribe(() => {

      if (this.fin_check.getValue() == true) {
        console.log("After check: " + this.isConnected);

        if (this.isConnected == false) {

          try {
            const sso = this.http.get<ConnectionSSOResponse>(this.baseURL + 'mysso/connect-with-sso', httpOptions).subscribe({
              next: data => {
                console.log("sso: " + JSON.stringify(data));
                this.isConnected = true;
                this.user.next(data.sso.user);
                this.fin_conn.next(true);

              },
              error: error => {
                console.error('error', error);
                this.isConnected = false;
                this.connectWithSSO();

              }
            });

          } catch (error) {
            console.error('error', error);
            this.isConnected = false;
            throw error;
          }
        }
      }
    });
  }


}


