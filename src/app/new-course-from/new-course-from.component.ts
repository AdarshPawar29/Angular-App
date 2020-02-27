import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'new-course-from',
  templateUrl: './new-course-from.component.html',
  styleUrls: ['./new-course-from.component.scss']
})
export class NewCourseFromComponent {
  form = new FormGroup({
    topics: new FormArray([])
  });

  addTopic(topic: HTMLInputElement){ //type annotation
    // (this.form.get('topics') as FormArray).push(new FormControl(topic.value));
    // after topics() fun
    this.topics.push(new FormControl(topic.value));
    console.log(topic.value);
    topic.value = '';
  }
  removeTopic(topic: FormControl) {
    let index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }

  get topics() {
    return this.form.get('topics') as FormArray;
  }
}
