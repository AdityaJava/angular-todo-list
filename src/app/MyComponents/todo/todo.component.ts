import { Component } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'todo-component',
  standalone: false,
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  todos: Todo[];
  constructor() {
    this.todos = [
      { id: 1, title: 'Learn Angular', desc: 'Learn Angular', active: false },
      { id: 2, title: 'Build a Todo App', desc: 'Build a Todo App', active: false },
      { id: 3, title: 'Deploy the App', desc: 'Deploy the App', active: false }
    ]
  }
  deleteTodo(todo: Todo){
    console.log("Delete todo listened in paren with id:  " + todo.id);
  }

}
