import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ToDoListComponent} from "./to-do-list/to-do-list.component";
import {HomeComponent} from "./home/home.component";
import {BlogComponent} from "./blog/blog.component";

const routes: Routes = [
  {
    path: '',
    children: [],
    component: HomeComponent
  },
  {
    path: 'to-do-list',
    component: ToDoListComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
