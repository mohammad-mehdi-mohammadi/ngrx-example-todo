import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TodoRoutingModule} from './todo-routing.module';
import {TodoComponent} from './todo.component';
import {StoreModule} from "@ngrx/store";
import {ToDoReducer} from "./reducers/todos.reducer";
import {EffectsModule} from "@ngrx/effects";
import {ToDoEffect} from "./effects/todos.effect";
import {ReactiveFormsModule} from "@angular/forms";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {environment} from "../../environments/environment";

@NgModule({
  declarations: [TodoComponent],
  imports: [
    CommonModule,
    TodoRoutingModule,
    StoreModule.forRoot({toDo: ToDoReducer}),
    EffectsModule.forRoot([ToDoEffect]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    ReactiveFormsModule,
  ],
  providers: [],
  exports: []
})

export class TodoModule {
}
