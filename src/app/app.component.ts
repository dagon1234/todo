import { Component } from '@angular/core';
import { tododata } from './data/todo';
import { TodoList } from './todolist';
import { TodoItem } from './models/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  private list: TodoList;
  newTask: string = '';

  constructor() {
    this.list = new TodoList(tododata[0].user, tododata[0].items);
  }

  showComplete = false;

  get username(): string {
    return this.list.user;
  }

  get itemCount(): number {
    return this.list.items.filter((item) => !item.doneItem).length;
  }

  get items(): readonly TodoItem[] {
    return this.list.items.filter(
      (item) => this.showComplete || !item.doneItem || item.doneItem
    );
  }

  addItem(newItem: string): void {
    if (newItem !== '') {
      const time = new Date();
      this.list.addItem(newItem, time);
      this.newTask = '';
    }
  }

  deleteItem(todo: TodoItem): void {
    this.list.deleteItem(todo);
  }
}
