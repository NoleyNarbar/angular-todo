import { Injectable } from '@angular/core';

import { Todo, OneTimeTodo, RecurringTodo } from '../services';

export class TodoFactory {
  createOneTimeTodo(title: string, dueDate: Date): Todo {
    return new OneTimeTodo(title, dueDate);
  }

  createRecurringTodo(title: string, frequency: string): Todo {
    return new RecurringTodo(title, frequency);
  }
}
