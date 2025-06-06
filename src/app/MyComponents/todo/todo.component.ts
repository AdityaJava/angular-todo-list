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
  //This is a method that will be called when the delete button is clicked in the child component
  //It will receive the todo item as an argument and will remove it from the todos array
  deleteTodo(todo: Todo){
    console.log("Delete todo listened in paren with id:  " + todo.id);
    this.todos = this.todos.filter(t =>t.id!=todo.id)
  }

  //This is a method that will be called when the add button is clicked in the child component
  //It will receive the todo item as an argument and will add it to the todos array
  addTodo(todo : Todo){
    console.log("Add todo listened in parent with id: " + todo);
    this.todos.push(todo);
  }
}
