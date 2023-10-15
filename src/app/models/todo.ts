export interface TodoItem {
    id: number;
    taskItem: string;
    timeItem: Date;
    doneItem: boolean;
}

export interface TodoData {
    user: string;
    items: TodoItem[];
}
