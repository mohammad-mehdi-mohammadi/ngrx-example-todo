import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, switchMap} from "rxjs/operators";
import {of} from "rxjs";
import {addItem, deleteItem, getItems} from "../actions/todo.actions";
import {TodosService} from "../services/todos.service";

@Injectable()
export class ToDoEffect {
  loadItems$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getItems),
      switchMap(action => {
        const itemsLoaded = this.toDoService.getItems();
        return of({
          type: '[to-do] load items', items: itemsLoaded
        });
      }),
      catchError(error => of({
        type: '[to-do] error item', message: error
      }))
    )
  );

  addItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addItem),
      switchMap(action => {
        this.toDoService.addItem(action.name);
        const itemsLoaded = this.toDoService.getItems();
        return of({
          type: '[to-do] load items', items: itemsLoaded
        });
      }),
      catchError(error => of({
        type: '[to-do] error item', message: error
      }))
    )
  );

  deleteItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteItem),
      switchMap(action => {
        this.toDoService.deleteItem(action.item);
        const itemsLoaded = this.toDoService.getItems();
        return of({
          type: '[to-do] load items', items: itemsLoaded
        });
      }),
      catchError(error => of({
        type: '[to-do] error item', message: error
      }))
    )
  );

  constructor(
    private actions$: Actions,
    private toDoService: TodosService
  ) {}
}
