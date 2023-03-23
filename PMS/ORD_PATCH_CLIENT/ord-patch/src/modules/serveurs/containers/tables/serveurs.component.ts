import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { HoraireMajServeurService } from '@modules/generic-services/horaire-maj-serveur.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-serveurs',
  templateUrl: './serveurs.component.html',
  styleUrls: ['./serveurs.component.scss']
})
export class ServeursComponent implements OnInit {

  horaireMaj= new BehaviorSubject<string>("");
  osSelect = new BehaviorSubject<string>("All");

  constructor(public horaireMajService: HoraireMajServeurService,  private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.horaireMajService.getHoraireMaj().subscribe(res => {
      this.horaireMaj.next(res);
    });

    this.route.params.subscribe((params: Params) => {
      if(params['OSSelected'] != undefined){
        this.osSelect.next(params['OSSelected']);
      }
      
    });

  }

}
