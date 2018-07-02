import { Component,Input } from "@angular/core";


@Component({
    selector:'collapsable-well',
    template:`
      <div (click) ="toggleContent()" class="well pointable">
    
         <h4>
           <ng-content select="[well-title]"></ng-content>
         </h4>
        
        <ng-content select="[well-body]" *ngIf ="toggle"></ng-content>
      </div>
    `,
    styles :[

    ]
})
export class CollapsableComponent {

   @Input() title:string;
   toggle:boolean =true;

   toggleContent() {
       this.toggle= !this.toggle;
   }

}