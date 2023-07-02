import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})

export class TodoItemComponent {
  //Properties for the todo item
  title = 'Default Tag';
  completed = false;
  id = 0;
}
