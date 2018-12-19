import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskAddComponent } from './task-add/task-add.component';
import { TaskEditComponent } from './task-edit/task-edit.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "list",
    pathMatch: "full"
  },
  {
    path: "list",
    component: TaskListComponent
  },
  {
    path: "add",
    component: TaskAddComponent
  },
  {
    path: "edit/:id",
    component: TaskEditComponent
  },
  {
    path: "details/:id",
    component: TaskDetailComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
