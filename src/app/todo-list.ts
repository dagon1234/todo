import { TodoItem } from './todo-item';

export class TodoList {
  private _items: TodoItem[] = [];

  constructor(public user: string, items: TodoItem[] = []) {
    this._items = items;
  }

  get items(): readonly TodoItem[] {
    return this._items;
  }

  addItem(task: string) {
    this._items.push(new TodoItem(task));
  }
}