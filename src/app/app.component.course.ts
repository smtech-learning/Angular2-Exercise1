import {Component} from '@angular/core';


@Component({
  moduleId: module.id,
  selector: 'course',
   template: `
   <h1>  This is from Course Component !!</h1>
   `
})
export class CourseComponent{

Courses:String[] = ['English', 'French', 'Arabic'];

}