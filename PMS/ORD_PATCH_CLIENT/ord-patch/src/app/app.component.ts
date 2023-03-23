import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ChildActivationEnd, Router } from '@angular/router';
import { AuthentificationService } from '@modules/generic-services/authentification.service';
import { filter } from 'rxjs/operators';
import { slideInAnimation } from './app.animation';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [slideInAnimation]
})
export class AppComponent {
  title = 'ord-patch';
  
  constructor(public router: Router, private titleService: Title, public authService: AuthentificationService) {
       
        this.router.events
            .pipe(filter(event => event instanceof ChildActivationEnd))
            .subscribe(event => {
                let snapshot = (event as ChildActivationEnd).snapshot;
                while (snapshot.firstChild !== null) {
                    snapshot = snapshot.firstChild;
                }
                this.titleService.setTitle(snapshot.data['title'] || 'ord-update');
            });
    }
	
	ngOnInit(): void {
    this.authService.connectWithSSO();
  }
  
}
