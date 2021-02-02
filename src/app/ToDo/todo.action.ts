import {createAction, props} from '@ngrx/store';
import ToDo from './todo.model';

export const GetToDoAction = createAction('[ToDo] - Get ToDo');

export const CreateToDoAction = createAction(
  '[ToDo] - Create ToDo',
  props<ToDo>()
);

export const BeginGetToDoAction = createAction('[ToDo] - Begin Get ToDo');

export const SuccessGetToDoAction = createAction(
  '[ToDo] - Sucess Get ToDo',
  props<{ payload: ToDo[] }>()
);

export const BeginCreateToDoAction = createAction(
  '[ToDo] - Begin Create ToDo',
  props<{ payload: ToDo }>()
);
export const SuccessDeleteToDoAction = createAction(
  '[ToDo] - Begin Create ToDo',
  props<{ payload: number }>()
);

export const SuccessCreateToDoAction = createAction(
  '[ToDo] - Delete Create ToDo',
  props<{ payload: ToDo }>()
);

export const ErrorToDoAction = createAction('[ToDo] - Error', props<Error>());
