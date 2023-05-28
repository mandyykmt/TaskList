import { Component, Input } from '@angular/core';
import { Todo } from '../models';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent {

  @Input()
  todos: Todo [] = []

  selected(i: number) {
    console.info(this.todos[i])
  }
}
