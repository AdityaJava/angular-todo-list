import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'add-todo',
  standalone: false,
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent {
  title: string;
  description: string;

  //This is an event emitter that will emit the todo item when the add button is clicked
  //This is used to communicate with the parent component
  @Output()
  todoAdd: EventEmitter<Todo> = new EventEmitter<Todo>();

  constructor() {
    this.title = '';
    this.description = '';
  }

  //This method will be called when the add button is clicked
  //It will create a new todo item and emit it to the parent component
  onSubmit() {
    const todo = {
      id: 8,
      title: this.title,
      desc: this.description,
      active: true
    }
    console.log("Submitting todo: ", todo);
    this.todoAdd.emit(todo);
  }

} 
