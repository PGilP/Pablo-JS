export interface TaskList{
    toDo     : Task[];
    doing    : Task[];
    complete : Task[];
}

export interface Task{
    name : string;
}