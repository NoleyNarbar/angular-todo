import { ITodo } from '../todo/todo.interface';

export class OneTimeTodo implements ITodo {
  id: number;
  title: string;
  completed: boolean;
  dueDate: Date;

  constructor(id: number, title: string, dueDate: Date) {
    this.id = id;
    this.title = title;
    this.completed = false;
    this.dueDate = dueDate;
  }

  // Add any additional methods or properties specific to the OneTimeTodo

  // ...
}
