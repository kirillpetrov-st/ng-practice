import { Component, ChangeDetectorRef, ChangeDetectionStrategy, OnChanges } from '@angular/core';

@Component({
  selector: 'app-todos',
  template: `
    <p>
      add todo
    </p>
    <input (keydown.enter)="addTodo($event)">
    <div *ngIf="this.todos">
      {{ this.todos }}
    </div>
    <ul>
      <li *ngFor="let todo of this.todos" [style.text-decoration]="textDecoration">
        <button (click)="triggerTodo()">Done!/Undone</button>{{ todo }}
      </li>
    </ul>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.Default
})
export class TodosComponent implements OnChanges {
  completed = false
  textDecoration = ''
  ngOnChanges() {

  }

  triggerTodo() {
    this.completed = !this.completed

    if(!this.completed) {
      this.textDecoration = "line-through"
    } else {
      this.textDecoration = ""
    }
  }

  todos = ['todo 1', 'todo 2'];

  constructor(private changeDetectorRef: ChangeDetectorRef) { }

  addTodo(event: any) {
    if (event.key === 'Enter') {
      this.todos.push(event.target.value);
      console.log(this.todos)
      event.target.value = '';
      this.changeDetectorRef.markForCheck();
    }
  }

  values = '';

  onKey(event: any) {
    this.values += event.target.value + ' | ';
  }
}
