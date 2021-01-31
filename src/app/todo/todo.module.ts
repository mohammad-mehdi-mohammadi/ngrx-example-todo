import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TodoRoutingModule} from './todo-routing.module';
import {TodoComponent} from './todo.component';
import {StoreModule} from "@ngrx/store";
import {counterReducer} from "./reducers/todos.reducer";


@NgModule({
  declarations: [TodoComponent],
  imports: [
    CommonModule,
    TodoRoutingModule,
    StoreModule.forRoot({ count: counterReducer })
  ],
  providers: [],
  exports: []
})

export class TodoModule {
}
