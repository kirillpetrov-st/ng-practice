import { Component } from '@angular/core';
import { TaskService } from './task.service';

@Component({
  selector: 'app-root',
  template: `
    Hello world!
    <div [style.color]="myColor">
      {{ title }}
    </div>

    <app-child></app-child>
    <app-child2 *ngIf="myColor == 'green'"></app-child2>
    <button (click)="paintMyApp()">Change color</button>
    <!-- <input (input)="myColor = $event.target.value"> -->
    <input (keydown.enter) = "myColor = 'black'">
  `,
  styles: [`
    .red {
      color: red;
    }
  `]
})
export class AppComponent {
  number = 3;
  title = 'myapp';
  myclass = 'red';
  myColor = 'green'

  paintMyApp() {
    const colors = ['red', 'pink', 'green', 'blue', 'purple', 'gold']
    this.myColor = colors[Math.floor(Math.random()* colors.length)]
  }
}
