
import { Component } from '@angular/core';
import { PLATFORM_SERVER_ID } from '@angular/common/src/platform_id';


@Component({
    // tslint:disable-next-line:component-selector
    selector: 'courses',
    template: `
       {{ text | summary:10 }}
    `
})

export class CoursesComponent {
   text = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Aliquam ornare wisi eu metus. Integer in sapien.';
}
