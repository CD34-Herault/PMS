import { Component, Input, OnInit } from '@angular/core';
import { Calendrier, TimeLineItem } from '@modules/calendrier/models';
import { CalendrierService } from '@modules/calendrier/services';
import { AuthentificationService } from '@modules/generic-services/authentification.service';
import { CalendarEvent } from 'angular-calendar';



@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  @Input() calendrier?:Calendrier;
  @Input() daySelected!: CalendarEvent;

  items: TimeLineItem[] = [];

  constructor(private calendrierService: CalendrierService) { }

  ngOnInit(): void {
    this.items = [];
    
    if(this.calendrier){
      this.calendrierService.get_oneCalendrier(this.calendrier._id!).subscribe(res => {
        this.calendrier = res;

        let cal_order = this.calendrier.scripts.sort((a,b)=> {
          return a.order-b.order;
        });
        cal_order.forEach(elem => {
          this.items.push(elem);
        })
        this.getTasks();
      });
    }
    else{
      this.items = [];
    }
    // console.log(this.calendrier?.scripts[0].processus[0].duree);
    // console.log(this.items[0].processus[0].duree);
 

  }

  getTasks(){
    this.calendrierService.get_tasks(this.daySelected.start.toString()).subscribe(res => {
      let date = new Date(this.daySelected.start);

      let event_hier = res.filter((val) => val.jour.split("/")[0].match((date.getDate()-1).toString()));
      let event_today = res.filter((val) => val.jour.split("/")[0].match((date.getDate()).toString()));

      event_hier = event_hier.filter((val) => parseInt(val.heure.split(":")[0]) >= 18);

      event_hier = event_hier.sort((a,b)=> {

        let timeA = a.heure.split(":");
        let timeB = b.heure.split(":");
        if(parseInt(timeA[0]) == parseInt(timeB[0])){
          if(parseInt(timeA[1]) == parseInt(timeB[1])){
            return parseInt(timeA[2])-parseInt(timeB[2]);
          }
          else{
            return parseInt(timeA[1])-parseInt(timeB[1]);  
          }
        }
        else{
          return parseInt(timeA[0])-parseInt(timeB[0]);
        }
        
      });
      event_today = event_today.sort((a,b)=> {
        let timeA = a.heure.split(":");
        let timeB = b.heure.split(":");
        if(parseInt(timeA[0]) == parseInt(timeB[0])){
          if(parseInt(timeA[1]) == parseInt(timeB[1])){
            return parseInt(timeA[2])-parseInt(timeB[2]);
          }
          else{
            return parseInt(timeA[1])-parseInt(timeB[1]);  
          }
        }
        else{
          return parseInt(timeA[0])-parseInt(timeB[0]);
        }
        
      });

      console.log(event_hier.length);
      console.log(event_today.length);

      let i =0;
      var part1 = this.items.find((val) => val.nom.match("Partie 1"));
      var bdd1 = this.items.find((val) => val.nom.match("Stop BDD"));
      var bdd2 = this.items.find((val) => val.nom.match("Start BDD"));
      var part2 = this.items.find((val) => val.nom.match("Partie 2"));
      var part3 = this.items.find((val) => val.nom.match("Partie 3"));


      event_hier.forEach(element => {
        part1!.processus[i].duree = element.durée; 
        part1!.processus[i].heure = element.heure; 
        part1!.processus[i].script = element.script; 
        part1!.processus[i].content = element.description; 
        i++
      });

      let j =0;
      let f =0;
      
      event_today.forEach(element => {

        if(element.partie.match("BDD-1")){
          bdd1!.processus[0].duree = element.durée;
          bdd1!.processus[0].heure = element.heure;
          bdd1!.processus[0].script = element.script; 
          bdd1!.processus[0].content = element.description; 
        } 
        if(element.partie.match("BDD-2")){
          bdd2!.processus[0].duree = element.durée;
          bdd2!.processus[0].heure = element.heure; 
          bdd2!.processus[0].script = element.script; 
          bdd2!.processus[0].content = element.description; 
        } 

        if(element.partie == "Rec-2" || element.partie == "Prod-2"){
          part2!.processus[j].duree = element.durée;
          part2!.processus[j].heure = element.heure;
          part2!.processus[j].script = element.script;
          part2!.processus[j].content = element.description; 
          j++
        } 

        if(element.partie == "Rec-3" || element.partie == "Prod-3"){
          part3!.processus[f].duree = element.durée;
          part3!.processus[f].heure = element.heure;
          part3!.processus[f].script = element.script;
          part3!.processus[f].content = element.description; 
          f++
        }  
        
      });

      this.items.forEach(cal => {
        if(this.checkFull(cal) == true){
          cal.iconePre = "fas";
          cal.iconeName = "check";
          cal.color = "#9acd32"
        }
        else{
          cal.iconePre = "fas";
          cal.iconeName = "clock";
          cal.color = "#2e6da4";
        }
      });
    });


  }

  public checkFull(cal: TimeLineItem): boolean{
    let bool = true;
    cal.processus.forEach(element => {
      if(element.duree == "--:--:--"){
        bool = false;
      }
    });
    return bool;
  }


}
