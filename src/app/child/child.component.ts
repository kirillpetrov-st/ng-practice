import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-child',
  template: `
    <p>
      child works!
    </p>
    <ul>
      <li *ngFor="let task of tasks">
        <!-- {{ task.title }} -->
      </li>
    </ul>
  `,
  styles: [
  ]
})
export class ChildComponent implements OnInit {

  tasks = [];

  constructor(private taskService: TaskService) {
    // this.tasks = this.taskService.getTasks();
  }

  ngOnInit(): void {

  }
}
