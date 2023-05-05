import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { TodoModel, todos } from "./todos.states";
import { actions } from "./todos.actions";

export const todoReducer = createReducer(
    todos,
    on(actions.addTodoAction,(state,todo) => {
        return [...state,todo]
    }),
    on(actions.updateTodoAction,(state,todo) => {
        let tempTodoIndex = state.findIndex((t) => t.id == todo.id);
        var tempStates = [...state];
        if(tempTodoIndex != -1) {
            tempStates[tempTodoIndex] = todo;
        }

        return [...tempStates]
    }),
    on(actions.deleteTodoAction,(state,todo) => {
       let todos = state.filter((t) => t.id != todo.id);
      
        return [...todos]
    })
);

export const todoSelector = createSelector(createFeatureSelector("todos"),
    (state:TodoModel[]) => state
);