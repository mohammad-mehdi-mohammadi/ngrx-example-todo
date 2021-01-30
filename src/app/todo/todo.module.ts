import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TodoRoutingModule} from './todo-routing.module';
import {TodoComponent} from './todo.component';

@NgModule({
    declarations: [TodoComponent],
    imports: [
        CommonModule,
        TodoRoutingModule,
    ],
    providers: [],
    exports: []
})

export class TodoModule {
}
