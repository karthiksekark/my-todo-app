import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todos-list',
  inputs: ['todos:todos'],
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css']
})
export class TodosListComponent implements OnInit {
  todos;
  @Output() todosCount = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  deleteThis($event, todo) {
    this.todos = this.todos.filter((td) => {
      return td.id != todo.id;
    });
    this.todosCount.emit(this.todos);
    // console.log(JSON.stringify(this.todos.length));
  }

}
