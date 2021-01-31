import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TodoRoutingModule} from './todo-routing.module';
import {TodoComponent} from './todo.component';
import {StoreModule} from "@ngrx/store";
import {reducer} from "./reducers/todos.reducer";

@NgModule({
  declarations: [TodoComponent],
  imports: [
    CommonModule,
    TodoRoutingModule,
    StoreModule.forFeature('todos', reducer)
  ],
  providers: [],
  exports: []
})

export class TodoModule {
}
