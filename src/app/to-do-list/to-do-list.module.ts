import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ToDoListRoutingModule} from './to-do-list-routing.module';
import {ToDoListComponent} from './to-do-list.component';

@NgModule({
  imports: [
    CommonModule,
    ToDoListRoutingModule
  ],
  declarations: [ToDoListComponent]
})
export class ToDoListModule { }
