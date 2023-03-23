import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition, state } from '@angular/animations';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-apropos-team',
  templateUrl: './apropos.component.html',
  styleUrls: ['./apropos.component.css'],
  animations:[
    trigger('fade', [
      state('in', style({ 'opacity': '1' })),
      state('out', style({ 'opacity': '0' })),
      transition('* <=> *', [
        animate(1000)
      ])
    ]),
    
  ]
})
export class AproposComponent implements OnInit {


  constructor(private modal: NgbModal) { }

  choice = 2;
  choice2 = 2;
  choice3 = 2;
  state = 'in';
  state2 = 'in';
  state3 = 'in';
  counter = 0;
  counter2 = 0;
  counter3 = 0;
  enableAnimation = false;
  enableAnimation2 = false;
  enableAnimation3 = false;
  imageSource = '';
  imageSource2 = '';
  imageSource3 = '';

  imgSteph1= '../../../assets/img/profil/steph1.JPG';
  imgSteph2 = '../../../assets/img/profil/steph2.JPG';
  imgSteph3 = '../../../assets/img/profil/steph3.JPG';

  imgSeb1= '../../../assets/img/profil/default.png';
  imgSeb2 = '../../../assets/img/profil/default.png';
  imgSeb3 = '../../../assets/img/profil/default.png';
  
  imgFred = '../../../assets/img/profil/fred.jpg';

  imgYves1 = "../../../assets/img/profil/default.png";
  imgYves2 = '../../../assets/img/profil/default.png';

  gifCel1 = "../../../assets/img/profil/cel1.gif";

  imgSelect: string = "";

  ngOnInit() {
    this.imageSource = this.imgSteph1;
    this.imageSource2 = this.imgYves1;
    this.imageSource3 = this.imgSeb1;
  }

  changeStephPicture() {

    this.enableAnimation = true;
    this.counter = 0;
    this.toggleState();

  }

  changeYvesPicture() {

    this.enableAnimation2 = true;
    this.counter2 = 0;
    this.toggleState2();

  }

  changeSebPicture() {

    this.enableAnimation3 = true;
    this.counter3 = 0;
    this.toggleState3();

  }

  toggleImg() {
    
    if (this.choice === 1) {
      this.imageSource = this.imgSteph1;
      this.choice = 2;
    } else if(this.choice === 2){
      this.imageSource = this.imgSteph2;
      this.choice = 3;
    } else {
      this.imageSource = this.imgSteph3;
      this.choice = 1;
    }
  }

  toggleImgYves() {
    
    if (this.choice2 === 1) {
      this.imageSource2 = this.imgYves1;
      this.choice2 = 2;
    } else {
      this.imageSource2 = this.imgYves2;
      this.choice2 = 1;
    }
  }

  toggleImgSeb() {
    
    if (this.choice3 === 1) {
      this.imageSource3 = this.imgSeb1;
      this.choice3 = 2;
    } else if(this.choice3 === 2){
      this.imageSource3 = this.imgSeb2;
      this.choice3 = 3;
    } else {
      this.imageSource3 = this.imgSeb3;
      this.choice3 = 1;
    }
  }

  onDone($event: any) {
    if (this.enableAnimation) {
      if (this.counter === 1) {
        this.toggleImg();
      }
      this.toggleState();
    }
    
  }

  onDone2($event: any) {
    if (this.enableAnimation2) {
      if (this.counter2 === 1) {
        this.toggleImgYves();
      }
      this.toggleState2();
    }
    
  }

  onDone3($event: any) {
    if (this.enableAnimation3) {
      if (this.counter3 === 1) {
        this.toggleImgSeb();
      }
      this.toggleState3();
    }
    
  }

  toggleState() {
    if (this.counter < 2) {
      this.state = this.state === 'in' ? 'out' : 'in';
      this.counter++;
    }
  }

  toggleState2() {
    if (this.counter2 < 2) {
      this.state2 = this.state2 === 'in' ? 'out' : 'in';
      this.counter2++;
    }
  }

  toggleState3() {
    if (this.counter3 < 2) {
      this.state3 = this.state3 === 'in' ? 'out' : 'in';
      this.counter3++;
    }
  }

  playAudio(){
    let audio = new Audio();
    audio.src = "../../../assets/star-wars-chewbacca-sound-effect_LF9zOetY.mp3";
    audio.load();
    audio.play();
  }

  playAudioYves(){
    let audio = new Audio();
    audio.src = "../../../assets/car_sound.wav";
    audio.pause();
    audio.load();
    audio.play();
    
  }

  open(content: any) {
    this.modal.open(content, { centered: true });
  }

}
