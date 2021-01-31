import {Todo} from './../models/todo.model';
import * as actions from "../actions/todo.actions";
import {createAction, createReducer, on, props} from "@ngrx/store";


export interface TodoState {
  data: Todo[];
}

export const initialState: TodoState = {
  data: []
};

const addTodo = createAction('[blah] add todo', props<{ todo: Todo }>());
const removeTodo = createAction('[blah] remove todo', props<{ todo: Todo }>());

const reducer = createReducer(initialState,
  on(addTodo, (state, { todo }) => ({
    data: [...state.data, todo]
  })),
  on(removeTodo, (state, { todo }) => ({
    // you're not supposed to have modified the todo so same instance
    data: state.data.filter(existingTodo => existingTodo !== todo)
  }))
);













//
// export function reducer(state = initialState, action: actions.TodoActions) {
//   switch (action.type) {
//     case actions.ADD_TODO: {
//
//       const data = [...state.data, action.payload];
//
//       return { ...state, data };
//     }
//
//     case actions.REMOVE_TODO: {
//       const data = state.data.filter(
//         todo => todo.label !== action.payload.label
//       );
//       return { ...state, data };
//     }
//   }
//
//   return state;
// }
