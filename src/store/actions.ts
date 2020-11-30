import { FETCH_TODOS } from './types'
import Todo from "../models/TodoModel";
import TodoActionModel from "../models/TodoActionModel";

export const fetchTodos = () => async (dispatch: (args: TodoActionModel) => void) => {
    const response = await fetch(
        'https://jsonplaceholder.typicode.com/todos'
    )
    let data:Todo[] = await response.json()
    return dispatch({
        type: FETCH_TODOS,
        payload: data
    })
}
