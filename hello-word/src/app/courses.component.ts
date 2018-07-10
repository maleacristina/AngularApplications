
import { Component } from '@angular/core';


@Component({
    // tslint:disable-next-line:component-selector
    selector: 'courses',
    template: `
       {{ text | summary }}
    `
})

export class CoursesComponent {
   text = ' lorem hcgashasha sdaskugash gdasugdakusgd.  dasgdagsduasg dsadgasgd ';
 }
