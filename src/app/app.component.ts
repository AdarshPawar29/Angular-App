import { Component, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  post={
    title: "Title",
    isFavorite: false
  }

  onFavoriteChange() {
    console.log("Favorite Change");
  }

  //ngSwitchCase
  viewMode = "list";

  //ngFor
  course = [];

  onAdd = () => this.course.push({id:5, name: 'course5'});
  onRemove(course){
    let index = this.course.indexOf(course);
    this.course.splice(index, 1);
  }
  loadCourses = () => {
    this.course = [
      { id:1, name: 'course1'},
      { id:2, name: 'course2'},
      { id:3, name: 'course3'},
      { id:4, name: 'course4'},
    ]
  }  
  trackCourse(index, i){ 
    // return (i ? i.id : undefined);
    // return index ;
    return i.id;
  }
}
