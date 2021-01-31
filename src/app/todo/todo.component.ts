import {Component, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {Todo} from "./models/todo.model";
// import {AppState} from "../app.state";
import * as actions from "./actions/todo.actions";
import {addItem, deleteItem, getItems} from './actions/todo.actions';
import {FormControl, FormGroup} from "@angular/forms";
import {selectError, selectItems} from "./reducers/todos.reducer";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.sass']
})
export class TodoComponent implements OnInit {
  toDoForm = new FormGroup({
    name: new FormControl('')
  });
  items$: Observable<any>;
  error$: Observable<any>;

  constructor(private store: Store<{ toDo: { items: Todo[] } }>) {
    this.store.dispatch(getItems());
    // @ts-ignore
    this.items$ = this.store.pipe(select(selectItems));
    // @ts-ignore
    this.error$ = this.store.pipe(select(selectError));
  }

  onSubmit() {
    this.store.dispatch(
      addItem({name: this.toDoForm.controls.name.value})
    );
    this.toDoForm.controls.name.reset();
  }

  deleteItem(deleted: Todo) {
    this.store.dispatch(deleteItem({ item: deleted }));
  }

  ngOnInit() {
  }
}
