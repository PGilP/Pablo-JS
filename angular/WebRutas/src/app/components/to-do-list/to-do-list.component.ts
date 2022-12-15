import { Component, OnInit } from '@angular/core';
import { TaskList } from 'src/app/models/tasks.model';

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
    let newTask = {
      name: this.inputText
    }
    this.tasks.toDo.push(newTask);
    this.inputText = '';
  }

}
