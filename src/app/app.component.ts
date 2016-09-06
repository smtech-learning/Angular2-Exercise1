import { Component,Directive } from '@angular/core';
import {CourseComponent} from './app.component.course'; 

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives:[CourseComponent]
})  
export class AppComponent {
  title = 'app works!';
  textValue :String;
  onExecuteThis(event){
    console.log("Button Clicked !!! " +event.target.value );
    
  }
  logthis(event){
    console.log(event.target.value);
    
  }
}
