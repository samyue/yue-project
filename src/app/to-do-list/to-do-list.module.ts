import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToDoListRoutingModule } from './to-do-list-routing.module';
import { ToDoListComponent } from './to-do-list.component';
import { ToDoListService } from './services/to-do-list.service';

@NgModule({
  imports: [
    CommonModule,
    ToDoListRoutingModule
  ],
  declarations: [ToDoListComponent],
  providers: [ToDoListService]
})
export class ToDoListModule { }
