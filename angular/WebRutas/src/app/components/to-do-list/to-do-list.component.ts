import { Component, OnInit } from '@angular/core';
import { TaskList } from 'src/app/models/tasks.model';
import { Task } from 'src/app/models/tasks.model';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {

  public tasks:TaskList = {
    toDo:[],
    doing:[],
    complete:[]
  }
  public inputText:string = '';

  constructor() { }

  ngOnInit(): void {
  }

  addTask(){
    if(this.inputText){
      
      let newTask:Task = {
        name : this.inputText
      }

      this.tasks.toDo.push(newTask);

    }
    this.inputText = '';
  }

  public startTask(task:Task){
    console.log(task);
  }
  public deleteTask(task:Task){
    console.log(task);
  }

}
