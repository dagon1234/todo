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

  deleteItem(index: number) {
    if (index >= 0 && index < this._items.length) {
      this._items.splice(index, 1);
    }
  }
}