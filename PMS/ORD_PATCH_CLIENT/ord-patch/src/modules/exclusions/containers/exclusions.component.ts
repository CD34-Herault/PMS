import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { ExclusionsService } from '../services';

@Component({
  selector: 'app-exclusions',
  templateUrl: './exclusions.component.html',
  styleUrls: ['./exclusions.component.css']
})
export class ExclusionsComponent implements OnInit {

  urlKey = new BehaviorSubject<string>(" ");
  
  constructor( private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      if(params['urlKey'] != undefined){
        this.urlKey.next(params['urlKey']);
      }
    });
  }

}
