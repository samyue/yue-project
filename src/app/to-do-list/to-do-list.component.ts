import { Component, OnInit } from '@angular/core';
import { ToDoListService } from './services/to-do-list.service';
import { ToDo } from './models/to-do';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {

  toDoList: ToDo[];
  constructor(
    private toDoListService: ToDoListService
  ) { }

  ngOnInit() {
    this.initToDoList();
  }

  addToDo(desc: string) {
    console.log('add to do', desc);
    this.toDoList.push({description: desc, status: 0});
  }

  markDone(toDo: ToDo) {
    toDo.status = 1;
  }

  delete(toDo: ToDo) {
    console.log('delete:', toDo);
    this.toDoList = this.toDoList.filter(function(item){
      return item !== toDo;
    })
  }

  initToDoList() {
    this.toDoList = this.toDoListService.getToDoList();
  }

}
