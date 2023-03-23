import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '@modules/generic-services/authentification.service';
import { User_profil } from '@modules/settings/models';
import { SettingsService } from '@modules/settings/services';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.css']
})
export class UserSettingsComponent implements OnInit {

  public responseConfig = new BehaviorSubject<String>("");
  
  public profil_user: User_profil= {
    nom: '',
    prenom: '',
    mail: '',
    login: '',
    alertMail: false,
    type: '',
    actions: [] = [],
    serveursAlerte: 0,
    serveursBon: 0,
    theme: 'dark'
  };

  public alertMail: boolean = false;
  public seuilAlerte: number = 50;
  public seuilBon: number = 15;

  constructor(public userProfilService : SettingsService, public auth: AuthentificationService) { }

  ngOnInit(): void {
    this.userProfilService.get_user_profil().subscribe(res => {
      res.actions.reverse()
      this.profil_user = res;
      this.alertMail = res.alertMail;
      this.seuilAlerte = res.serveursAlerte;
      this.seuilBon = res.serveursBon;
      
    });
  }

  ngAfterViewInit(){

  }

  submit(){
    this.profil_user.alertMail = this.alertMail;
    this.profil_user.serveursAlerte = this.seuilAlerte;
    this.profil_user.serveursBon = this.seuilBon;

    this.userProfilService.put_user_profil(this.profil_user).subscribe(res => {
      this.responseConfig.next(res);
    });
  }



}
