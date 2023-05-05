export interface TodoModel {
    id: number;
    title: string;
    completed: boolean;
}



export let todos: TodoModel [] = [
    {
        id:1,
        completed:false,
        title:"hi"
    },
    {
        id:1,
        completed:false,
        title:"hello"
    }
]