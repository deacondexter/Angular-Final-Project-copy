import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task } from './task';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskDataService {

  url = "http://localhost:3000/tasks";

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.url);
  }

  getTask = (id: number): Observable<Task> => {
    return this.http.get<Task>(this.url + "/" + id);
  }
  // use this for the details component!

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.url, task);
    //makes a post request to send a type of task to it, using this URL and also the task parameter that was passed in
  }// passing down my task object and sending it to my json server


  deleteTask(id: number): Observable<Task> {
    return this.http.delete<Task>(this.url + "/" + id);
  }


  editTask(task: Task): Observable<Task> {
    return this.http.put<Task>(this.url + "/" + task.id, task);
  }

  constructor(private http: HttpClient) { }
}
