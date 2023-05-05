import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { actions } from 'src/app/providers/todos.actions';
import { TodoModel } from 'src/app/providers/todos.states';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit{
  @Input() todo!: TodoModel;
  public editTodo: boolean = false;
  public todoInput!: string;

  constructor(private store:Store){}
  
  ngOnInit(): void {
    this.editTodo = this.todo!.completed;
    this.todoInput = this.todo!.title;
  }

  public updateToggle() {
    this.editTodo = !this.editTodo;
  }

  public updateTodo(){
    this.editTodo = !this.editTodo;
    this.store.dispatch(actions.updateTodoAction({
      id:this.todo!.id,
      completed:this.todo.completed,
      title:this.todoInput
    }));
  }

  public deleteTodo(){
    this.store.dispatch(actions.deleteTodoAction({
      id:this.todo!.id,
      completed:this.todo.completed,
      title:this.todo.title
    }));
  }

}
