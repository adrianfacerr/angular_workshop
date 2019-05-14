import { Directive, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appZoom]'
})
export class ZoomDirective {
  @HostBinding("style.transition") translation = 'transform 2s'
  @HostListener('mouseenter')
private mouseEnter()
{
this.zoomIn();
}

@HostListener('mouseleave')
private mouseLeave()
{
  this.zoomOut();
}

private zoomIn() : void

{

this.elementRef.nativeElement.style.transform = 'scale(1.3)';
// this.elementRef.nativeElement.style.transition ="transform .5s;"
}

private zoomOut() : void 
{
  this.elementRef.nativeElement.style.transform = 'scale(1)';
  // this.elementRef.nativeElement.style.transition ="transform .5s;"
}

  constructor(private elementRef:ElementRef ) { 
     console.log(this.elementRef.nativeElement)
   }

}
