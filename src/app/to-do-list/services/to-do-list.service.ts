import { Injectable } from '@angular/core';
import { ToDo } from '../models/to-do';

@Injectable()
export class ToDoListService {

  constructor() { }
  toDos: ToDo[] =
    [
      {"description": "Water the plants", "status": 0},
      {"description": "Call parents", "status": 0}
    ];
  getToDoList(): ToDo[] {
    return this.toDos;
  }

}
