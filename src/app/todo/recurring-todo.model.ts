import { ITodo } from './todo.interface';

export class RecurringTodo implements ITodo {
  id: number;
  title: string;
  completed: boolean;
  recurringPattern: string;
  recurringEndDate: Date;

  constructor(id: number, title: string, recurringPattern: string, recurringEndDate: Date) {
    this.id = id;
    this.title = title;
    this.completed = false;
    this.recurringPattern = recurringPattern;
    this.recurringEndDate = recurringEndDate;
  }

  // Add any additional methods or properties specific to the RecurringTodo

  // ...
}
