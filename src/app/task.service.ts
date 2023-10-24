import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasks = [
    { title: "task todo 1" },
    { title: "task todo 2" },
    { title: "task todo 3" },
    { title: "task todo 4" },
    { title: "task todo 5" },
  ]

  constructor() { }

  getTasks() {
    return this.tasks;
  }
}
