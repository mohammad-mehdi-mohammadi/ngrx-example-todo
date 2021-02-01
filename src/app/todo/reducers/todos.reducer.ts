import {createReducer, on} from '@ngrx/store';

import {Todo} from "../models/todo.model";
import {addNewItem, errorItem, loadItems} from "../actions/todo.actions";

// export const initialState = ;
//
// const _counterReducer = createReducer(
//   initialState,
//   on(increment, (state) => state + 1),
//   on(decrement, (state) => state - 1),
//   on(reset, (state) => 0)
// );
//
// export function counterReducer(state: any, action: any) {
//   return _counterReducer(state, action);
// }


export interface State {
  toDo: { items: Todo[]; error: string };
}

export const initialState: State = {
  toDo: {items: [], error: ''}
};

export const ToDoReducer = createReducer(
  initialState,
  on(addNewItem, (state, action) => ({
    ...state,
    items: [...state.toDo.items, {name: action.item}]
  })),

  on(loadItems, (state, action) => ({
    ...state,
    items: action.items
  })),
  on(errorItem, (state, action) => ({
    ...state,
    error: action.message
  }))
);

export const selectItems = (state: State) => state.toDo.items;

export const selectError = (state: State) => state.toDo.error;
/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/
