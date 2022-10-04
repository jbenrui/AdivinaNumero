import { APP_BASE_HREF } from '@angular/common';
import { Directive, ElementRef, HostListener, Input } from '@angular/core';


@Directive({
  selector: '[appHighlight]'
})

export class HighlightDirective {

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight.nativeElement.style.transition = "all 2s";
    this.highlight.nativeElement.style.background = "#0066cc"  
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight.nativeElement.style.transition = "all 2s";
    this.highlight.nativeElement.style.background = "#7dbeff"  
  }

  constructor(private highlight : ElementRef){} ////Inyecta el elemento nativo con angular en la variable privada highlight.


  @Input() appHighlight = '';
}


