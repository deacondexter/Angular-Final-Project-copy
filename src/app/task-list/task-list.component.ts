import { Component, OnInit } from '@angular/core';
import { TaskDataService } from '../task-data.service';
import { Task } from '../task';
import { Router, ActivatedRoute } from '@angular/router'; // this was added to manually route back to lists page after deleting an item

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks: Task[];

  getTasks(): void {
    this.taskDataService.getTasks().subscribe(
      t => (this.tasks = t)
    );
  }
  //  this stays here...or move to details page...?????

  deleteTask(id: number): void {
    this.taskDataService.deleteTask(id).subscribe(
      t =>
        this.getTasks());
  }

  constructor(private taskDataService: TaskDataService, private router: Router, private route: ActivatedRoute) {
    this.taskDataService.getTasks().subscribe(t => (this.tasks = t));
  }

  ngOnInit() {

  }

  // ngOnInit() {
  //   this.getTasks();
  // }
  //  this stays here...or move to details page...?????


}