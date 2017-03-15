import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ToDoListComponent} from './to-do-list.component';

const routes: Routes = [
  { path: 'to-do-list',    component: ToDoListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ToDoListRoutingModule { }
