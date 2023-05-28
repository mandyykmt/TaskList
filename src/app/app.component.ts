import { Component } from '@angular/core';
import { Todo } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  appTodos: Todo[] = []

  save(t: Todo) {
    this.appTodos.push(t)
    console.info(">> appTodo: ", t)
    console.info(">> appTodos: ", this.appTodos)
  }
}