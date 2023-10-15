import { TodoData } from '../models/todo';

export const tododata: TodoData[] = [
    {
        user: 'Bob',
        items: [
            {
                id: 1,
                taskItem: 'Go for a run',
                timeItem: new Date(),
                doneItem: true
            },
            {
                id: 2,
                taskItem: 'Get flowers',
                timeItem: new Date(),
                doneItem: false
            },
            {
                id: 3,
                taskItem: 'Collect tickets',
                timeItem: new Date(),
                doneItem: false
            }
        ]
    },
];