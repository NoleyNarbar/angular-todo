import { Injectable } from '@angular/core';
import { ITodo } from '../todo/todo.interface';
import { OneTimeTodo } from '../todo/one-time-todo.model';
import { RecurringTodo } from '../todo/recurring-todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoFactoryService {
  private todoMappings: { [key: string]: new () => ITodo } = {
    'one-time': OneTimeTodo,
    'recurring': RecurringTodo
  };

  createTodo(type: string): ITodo {
    const TodoClass = this.todoMappings[type];
    if (TodoClass) {
      return new TodoClass();
    }
    // Handle invalid type or default case
    return null;
  }
}
