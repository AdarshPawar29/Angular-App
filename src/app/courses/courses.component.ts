import { CoursesService } from './courses.service';
import { Component} from '@angular/core';

@Component({
  selector: 'courses',
  template: `
        <h1>{{ getTitle() }}</h1>
        <ul>
          <li *ngFor="let course of courses"> 
            {{ course }}
          </li>
        </ul>
        <button class="btn btn-primary">Save</button>
        `,
        // *ngFor is a "structural directive". Structural directives shape or reshape the DOM's structure, typically by adding, removing, and manipulating the elements to which they are attached. Directives with an asterisk, *, are structural directives.
  // templateUrl: './courses.component.html',
  // styleUrls: ['./courses.component.scss']
})
export class CoursesComponent{
  
    title = "List of courses";
    getTitle = () => this.title;
    courses;
    constructor(service: CoursesService) {
      // let service = new CoursesService();
      this.courses = service.getCourses();
    }
}
