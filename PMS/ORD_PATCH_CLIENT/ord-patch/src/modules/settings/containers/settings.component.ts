import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '@modules/generic-services/authentification.service';
import { SettingsService } from '../services';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

 public  sectionSelected: string | undefined;
 

  constructor(public userProfil: SettingsService) { }

  ngOnInit(): void {
  }

}
