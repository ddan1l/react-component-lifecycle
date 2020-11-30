import Todo from "../models/TodoModel";
export default interface TodoActionModel { type: string; payload: Todo[]}
