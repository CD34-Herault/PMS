import { Component, OnInit } from '@angular/core';
import { Config_serveur, User_profil } from '@modules/settings/models';
import { ConfigServeurService, SettingsService } from '@modules/settings/services';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-serveur-settings',
  templateUrl: './serveur-settings.component.html',
  styleUrls: ['./serveur-settings.component.css']
})
export class ServeurSettingsComponent implements OnInit {

  public lesProfils = new Observable<User_profil[]>();
  public responseConfig = new BehaviorSubject<String>("");
  
  public conf: Config_serveur = {
    horaireMaj: "07:00",
    dureeLogs: 183,
  };

  
  constructor(public userProfilService: SettingsService, public configServeurService: ConfigServeurService) { }

  ngOnInit(): void {

    this.lesProfils = this.userProfilService.get_user_profil_all();
    this.configServeurService.get_config_serveur().subscribe(res => {
      this.conf = res;
    });

  }

  submit(){
    this.configServeurService.put_config_serveur(this.conf).subscribe(res => {
      this.responseConfig.next(res);
    });
  }

  updateServeurs(){
    this.configServeurService.getUpdateServeurs().subscribe(res => {
      alert(res);
    })
  }



}
