import { Component, Input } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'todo-item',
  standalone: false,
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {

  @Input()
  todo! : Todo;

  constructor(){

  }
}
