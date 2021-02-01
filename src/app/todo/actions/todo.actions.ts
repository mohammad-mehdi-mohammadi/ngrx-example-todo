import {createAction, props} from '@ngrx/store';
import {Todo} from "../models/todo.model";

export const getItems = createAction('[to-do] get items');

export const loadItems = createAction(
  '[to-do] load items',
  props<{ items: Todo[] }>()
);

// export const addItem = createAction(
//   '[to-do] add item',
//   props<{ item: Todo }>()
// );
export const addNewItem = createAction(
  '[to-new-do] add item',
  props<{ item: Todo }>()
);
export const deleteItem = createAction(
  '[to-do] delete item',
  props<{ item: Todo }>()
);

export const errorItem = createAction(
  '[to-do] error item',
  props<{ message: string }>()
);
