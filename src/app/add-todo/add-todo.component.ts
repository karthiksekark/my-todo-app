import { Component, OnInit } from '@angular/core';
import { CreateTodo } from './create-todo';
@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  todosCollection;
  todosList = this.todosCollection;
  totalCount;
  indexCount;
  constructor() {
  }

  ngOnInit() {
    this.todosCollection = [];
    this.indexCount = 1;
    if(!this.totalCount) {
      this.totalCount = 'No';
    }
  }

  addTodo($event, todoName) {
    if(this.todosCollection.length > 0) {
      this.indexCount = this.todosCollection[this.todosCollection.length - 1].id + 1;
    }
    this.todosCollection.push(new CreateTodo(this.indexCount, todoName.value));
    this.totalCount = this.todosCollection.length;
    todoName.value = '';
    // console.log(JSON.stringify(this.todosCollection));
  }

  countUpdate(count) {
    this.totalCount = (count.length) ? count.length : 'No';
    this.todosCollection = count;
  }

}
