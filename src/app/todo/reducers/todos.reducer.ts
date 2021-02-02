import {createReducer, on} from '@ngrx/store';

import {Todo} from "../models/todo.model";
import {addNewItem, errorItem, loadItems} from "../actions/todo.actions";


export interface State {
  toDo: { items: Todo[]; error: string };
}

export const initialState: State = {
  toDo: {items: [], error: ''}
};

export const ToDoReducer = createReducer(
  initialState,
  // on(addNewItem, (state, action) => ({
  //   ...state,
  //   items: state.toDo.items.concat(action.item)
  //
  // })),
  on(addNewItem, (state: State, {item}) => {
    return {...state, items: [...state.toDo.items, item]}
  }),

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
