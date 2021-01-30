
import { Todo } from '../models/todo.model';
import { Action } from '@ngrx/store';

export const ADD_TODO = '[Todo] Add Todo';
export const REMOVE_TODO = '[Todo] Remove Todo';

export class AddTodo implements Action {
  readonly type = ADD_TODO;
  constructor(public payload: Todo) {}
}

export class RemoveTodo implements Action {
  readonly type = REMOVE_TODO;
  constructor(public payload: Todo) {}
}

// exporting a custom type
export type TodoActions = AddTodo | RemoveTodo;
