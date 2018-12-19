import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskAddComponent } from './task-add/task-add.component';
import { NavComponent } from './nav/nav.component';
import { TaskEditComponent } from './task-edit/task-edit.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
// import { CommonModule } from '@angular/common'; //does this need to go in here??


@NgModule({
  declarations: [AppComponent, TaskListComponent, TaskAddComponent, NavComponent, TaskEditComponent, TaskDetailComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],  //CommonModule
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
