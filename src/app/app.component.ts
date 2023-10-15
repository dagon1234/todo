import { Component, OnInit } from '@angular/core';
import { TodoItem } from './todo-item';
import { TodoList } from './todo-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  private list = new TodoList('Bob', [
    new TodoItem('Go for run', true),
    new TodoItem('Get flowers'),
    new TodoItem('Collect tickets'),
  ]);
  showComplete = false;

  ngOnInit() {
    const storedData = localStorage.getItem('todoListData');
    if (storedData) {
      this.list = new TodoList('Bob', JSON.parse(storedData));
    }
  }

  get username(): string {
    return this.list.user;
  }

  get itemCount(): number {
    return this.list.items.filter((item) => !item.complete).length;
  }

  get items(): readonly TodoItem[] {
    localStorage.setItem('todoListData', JSON.stringify(this.list.items));
    return this.list.items.filter(item => this.showComplete || !item.complete || item.complete);
  }

  addItem(newItem: string) {
    if (newItem !== '') {
      this.list.addItem(newItem);
      localStorage.setItem('todoListData', JSON.stringify(this.list.items));
    }
  }
  
  deleteItem(todo: any) {
    
  }
}