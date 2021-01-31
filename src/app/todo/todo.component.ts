import {Component, OnInit} from '@angular/core';
import {createFeatureSelector, createSelector, Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {Todo} from "./models/todo.model";
// import {AppState} from "../app.state";
import * as actions from "./actions/todo.actions";
import {TodoActions} from "./actions/todo.actions";
import {TodoState} from "./reducers/todos.reducer";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.sass']
})
const todo: Todo = {..};
export class TodoComponent implements OnInit {
  // todos$: Observable<Todo[]>;
y
  constructor(private store: Store<{ todos: Todo[] }>) {
    // this.todos$ = this.store.select('todos')

  }


  ngOnInit(): void {
    this.store.dispatch(addTodo({ todo }));
    // const x = createFeatureSelector<TodoState>('todos');
    // const getTodos = createSelector(x, state => state.data);
    // this.store.dispatch(
    //   new actions.AddTodo({label: 'Eat pizza', complete: false})
    // );
    // this.todos$ = this.store.select('todos')

  }

}
