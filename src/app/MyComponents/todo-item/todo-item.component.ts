import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'todo-item',
  standalone: false,
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {

  //This is an input property that will receive the todo item from the parent component
  //The parent component will pass the todo item to this component
  @Input()
  todo! : Todo;

  //This is an event emitter that will emit the todo item when the delete button is clicked
  //This is used to communicate with the parent component
  //The parent component will listen to this event and will delete the todo item from the list
  @Output()
  todoDelete: EventEmitter<Todo> = new EventEmitter<Todo>();

  constructor(){

  }

  onDelete() {
    console.log("Delete todo with id: " + this.todo.id);      
  }
}
