import { Directive, Input, ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appIf]'
})
export class IfDirective {

@Input()
set appIf(show: boolean)
{
  if(show)
  {
    this.vc.createEmbeddedView(this.template)

  }
  else{
    this.vc.clear();
  }
}
// get appIf(): boolean{
//   return show;
// }

  constructor(private vc: ViewContainerRef, private template: TemplateRef<any>) {
    
   }

}
