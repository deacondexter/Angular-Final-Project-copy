import { Component, OnInit } from '@angular/core';
import { TaskDataService } from '../task-data.service';
import { Task } from '../task';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {

  taskDetails: Task;
  id: number;

  deleteTask(id: number): void {
    this.taskDataService.deleteTask(id).subscribe(
      t =>
        // this.getTasks());  // doesn't work here since we're not establishing a method for getTasks inside of this component
        this.router.navigate(['list']));  //manually routing to list page after clicking delete button
  }
  //  shouldn't I be able to bring this in from the service or task list somehow....instead of re-writing the same thing...?


  constructor(
    private taskDataService: TaskDataService,
    private router: Router, // brought in the router to manually route back to list page after deleting item from details page
    private route: ActivatedRoute
  ) { }



  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params["id"];
      this.taskDataService.getTask(this.id).subscribe(t => (this.taskDetails = t));
    });
  }
}

// ngOnInit() {
  //   this.getTasks();
  // }
  //  I'm not sure I understand how taskdetail or tasklist work without this now that I removed it...?