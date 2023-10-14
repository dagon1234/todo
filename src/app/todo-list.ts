import { TodoItem } from './todo-item';

export class TodoList {
  constructor(public user: string, public todoItems: TodoItem[] = []) {
  }
  get items(): TodoItem[] {
    return this.todoItems;
  }
  addItem(task: string) {
    this.todoItems.push(new TodoItem(task));
  }
}

let list = new TodoList('aa',[])
list.items