import { Component, Input, Output } from '@angular/core';
import { Task, Todo } from '../models';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {

  @Input()
  todo: Todo | null = null

  @Output()
  onSave = new Subject<Todo>()

  todoForm!: FormGroup
  todoArray!: FormArray

  constructor(private fb: FormBuilder) {}

  private createTask(task : Task | null): FormGroup{
    return this.fb.group({
      description: this.fb.control<string>(''),
      priority: this.fb.control<string>('medium'),
      date: this.fb.control<string>('')
    })
  }

  private createTasks(tasks: Task[]): FormArray {
    return this.fb.array(
      tasks.map(task => this.createTask(task))
    )
  }

  private createTodo(todo : Todo | null): FormGroup {
    this.todoArray = this.createTasks([])
    return this.fb.group({
      title: this.fb.control<string>(''),
      name: this.fb.control<string>(''),
      tasks: this.todoArray
    })
  }

  ngOnInit() {
    console.info(">> todo: ", this.todoForm)
    this.todoForm = this.createTodo(this.todo)
  }

  saveForm() {
    const todoThings = this.todoForm.value as Todo
    this.onSave.next(todoThings)
    console.info(">> todoThings: ", todoThings)
    this.todoForm = this.createTodo(null)
  }

  addTask() {
    this.todoArray.push(this.createTask(null))
  }

  remove(i: number) {
    this.todoArray.removeAt(i)
  }
}