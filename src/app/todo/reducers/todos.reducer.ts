import {Todo} from './../models/todo.model';
import * as actions from "../actions/todo.actions";



export interface TodoState {
  data: Todo[];
}

export const initialState: TodoState = {
  data: [],
};

export function reducer(state: TodoState = initialState, action: actions.TodoActions) {
  switch (action.type) {
    case actions.ADD_TODO: {
      const data = [...state.data, action.payload];
      return { ...state, data };
    }

    case actions.REMOVE_TODO: {
      const data = state.data.filter(
        todo => todo.label !== action.payload.label
      );
      return { ...state, data };
    }
  }

  return state;
}
