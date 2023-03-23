import { AfterViewInit, Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '.proc'
})
export class CheckTimeLineDirective implements AfterViewInit {

  constructor(private el: ElementRef,
    private renderer: Renderer2) { }


  ngAfterViewInit(): void {
    setTimeout(() => {
      this.check();  
    },100);
    
  }


  public check(){
    
    const scriptElement = this.el.nativeElement.querySelector(".script");

    if(scriptElement.innerHTML != "--:--:--"){
      this.renderer.setStyle(this.el.nativeElement,"color","#3f903f");
    }

  }

}
