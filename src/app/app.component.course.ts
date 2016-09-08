import {Component} from '@angular/core';
import {Injectable} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'course',
   template: `
   <h1>  This is from Course Component !!</h1>
   <ul>
   <li *ngFor = "let course of Courses"> {{course}} </li> 
    </ul>
   `
})
export class CourseComponent{
@Injectable() 
Courses:String[] = ['English', 'French', 'Arabic'];

}