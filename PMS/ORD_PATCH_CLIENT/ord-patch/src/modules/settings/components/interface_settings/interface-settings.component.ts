import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faWindows } from '@fortawesome/free-brands-svg-icons';
import { User_profil } from '@modules/settings/models';
import { SettingsService } from '@modules/settings/services';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-interface-settings',
  templateUrl: './interface-settings.component.html',
  styleUrls: ['./interface-settings.component.css']
})
export class InterfaceSettingsComponent implements OnInit {

  public theme: string = "Dark"
  public responseConfig = new BehaviorSubject<String>("");
  
  public profil: User_profil = {
    nom: '',
    prenom: '',
    mail: '',
    login: '',
    alertMail: false,
    type: '',
    actions: [],
    serveursAlerte: 0,
    serveursBon: 0,
    theme: 'Dark'
  };

  
  constructor(public userProfilService: SettingsService, public  route: Router) { }

  ngOnInit(): void {
    this.userProfilService.get_user_profil().subscribe(res => {
      this.profil = res;
      this.theme = res.theme;
    });
  }

  submit(){
    this.profil.theme = this.theme;
    this.userProfilService.put_user_profil(this.profil).subscribe(res => {
      this.responseConfig.next(res);
      setTimeout(() => {window.location.reload();}, 1000); 
    });
  }

}
