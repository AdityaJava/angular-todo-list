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
  localTodos : string;

  constructor() {
    // this.todos = [
    //   { id: 1, title: 'Learn Angular', desc: 'Learn Angular', active: false },
    //   { id: 2, title: 'Build a Todo App', desc: 'Build a Todo App', active: false },
    //   { id: 3, title: 'Deploy the App', desc: 'Deploy the App', active: false }
    // ]
    this.localTodos = localStorage.getItem("todos") || "";
    if ( this.localTodos === "") {
      this.todos = [];
    }
    else {
      this.todos = JSON.parse(this.localTodos);
    }

  }
  //This is a method that will be called when the delete button is clicked in the child component
  //It will receive the todo item as an argument and will remove it from the todos array
  deleteTodo(todo: Todo) {
    console.log("Delete todo listened in paren with id:  " + todo.id);
    this.todos = this.todos.filter(t => t.id != todo.id);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  //This is a method that will be called when the add button is clicked in the child component
  //It will receive the todo item as an argument and will add it to the todos array
  addTodo(todo: Todo) {
    console.log("Add todo listened in parent with id: " + todo);
    this.todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  toggleTodo(todo: Todo){
    let index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active;
    console.log("Toggle todo listened in parent with id: " + todo.id + " and active: " + this.todos[index].active);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
}
