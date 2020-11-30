    import { FETCH_TODOS } from '../types'
    import Todo from "../../models/TodoModel";
    import TodoActionModel from "../../models/TodoActionModel";

    const initialState: Todo[] = []

    export default (state = initialState, action: TodoActionModel) => {
        switch (action.type) {
            case FETCH_TODOS:
                return action.payload;
            default:
                return state
        }
    }
