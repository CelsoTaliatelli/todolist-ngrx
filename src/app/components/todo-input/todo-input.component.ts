import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { actions } from 'src/app/providers/todos.actions';
import { todoSelector } from 'src/app/providers/todos.reducers';
import { TodoModel } from 'src/app/providers/todos.states';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.scss']
})
export class TodoInputComponent {

  public inputTodo!: string;
  private todos!: TodoModel[];

  constructor(private store:Store){
    this.store.select(todoSelector).subscribe((state) => this.todos = state);
  }
  
  addTodo(){
      this.store.dispatch(actions.addTodoAction({
        id:this.todos.length+1,
        completed:false,
        title:this.inputTodo
      }));
    }

}
