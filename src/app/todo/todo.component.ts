import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {Todo} from "./models/todo.model";
// import {AppState} from "../app.state";
import * as actions from "./actions/todo.actions";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.sass']
})
export class TodoComponent implements OnInit {
  todos$: Observable<Todo[]>;

  constructor(private store: Store<{ todos: Todo[] }>) {
    this.todos$ = this.store.select('todos')

  }

  addProduct(name: any, price: any) {
    console.log(name, price)
    // this.store.dispatch({
    //   type: 'ADD_PRODUCT',
    //   payload: <Post> {
    //     id: 1,
    //     name: name
    //   }
    // });


  }

  ngOnInit(): void {
    // this.products = this.store.select('todos')

    this.store.dispatch(
      new actions.AddTodo({label: 'Eat pizza', complete: false})
    );
    this.todos$ = this.store.select('todos')
    this.todos$.subscribe(value => {
      console.log(value)
    })
  }

}
