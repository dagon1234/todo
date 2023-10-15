import { TodoItem } from '../app/models/todo';

class TodoList {
  user: string;
  items: TodoItem[];

  constructor(user: string, items: TodoItem[]) {
    this.user = user;
    this.items = items;
  }

  addItem(taskItem: string, timeItem: Date) {
    const newTodoItem: TodoItem = {
      id: this.generateNewId(),
      taskItem,
      timeItem,
      doneItem: false,
    };
    this.items.push(newTodoItem);
  }

  deleteItem(todoItem: TodoItem) {
    const index = this.items.indexOf(todoItem);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }

  private generateNewId(): number {
    const maxId = Math.max(...this.items.map((item) => item.id), 0);
    return maxId + 1;
  }
}

export { TodoList };
