import { Injectable } from '@angular/core';
import { TodoFactory } from './todo-factory';
import { Todo } from '../todo/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoFactoryService {
  constructor(private todoFactory: TodoFactory) {}

  createTodo(todoType: string, title: string, options?: any): Todo {
    switch (todoType) {
      case 'one-time':
        return this.todoFactory.createOneTimeTodo(title, options.dueDate);
      case 'recurring':
        return this.todoFactory.createRecurringTodo(title, options.frequency);
      default:
        throw new Error('Invalid todo type');
    }
  }
}
