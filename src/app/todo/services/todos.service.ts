import { Injectable } from '@angular/core';
import {Todo} from "../models/todo.model";

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor() {}

  getItems() {
    let items = JSON.parse(<string>window.localStorage.getItem('items'));
    if (items === null) {
      items = [];
    }
    return items;
  }

  // addItem(addItem: string) {
  //   const itemsStored = window.localStorage.getItem('items');
  //   let items = [];
  //   if (itemsStored !== null) {
  //     items = JSON.parse(itemsStored);
  //   }
  //   const item: Todo = {
  //     id: items.length + 1,
  //     name: addItem
  //   };
  //   items.push(item);
  //   window.localStorage.setItem('items', JSON.stringify(items));
  // }

  deleteItem(deleteItem: any) {
    const items = JSON.parse(<string>window.localStorage.getItem('items'));
    console.log(items);
    console.log(deleteItem);
    const saved = items.filter((item: any) => {
      return item.id !== deleteItem.id;
    });
    window.localStorage.setItem('items', JSON.stringify(saved));
  }
}
