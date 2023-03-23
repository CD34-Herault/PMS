import { Component, OnInit } from '@angular/core';
import { WaafService } from '../services';

@Component({
  selector: 'app-waafPage',
  templateUrl: './waaf.component.html',
  styleUrls: ['./waaf.component.css']
})
export class WaafPageComponent implements OnInit {

  constructor(public waafService: WaafService) { }

  ngOnInit(): void {

    
  }


}
