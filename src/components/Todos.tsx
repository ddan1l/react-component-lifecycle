import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Todo from "../models/TodoModel"
import {createUseStyles} from 'react-jss'

import { fetchTodos } from '../store/actions'
const useStyles = createUseStyles({
    toDoItem: {
        color: 'black',
        'background-color': 'beige',
        'font-family': 'Georgia, serif;',
        padding:{
            top: 5, // jss-plugin-default-unit makes this 5px
            right: 5,
            bottom: 5,
            left: 5
        },
        margin: {
            top: 5,
        },
    },
})
// eslint-disable-next-line no-shadow
// @ts-ignore
const TodosComponent = ({ fetchTodos, todos }) => {
    useEffect(() => {
        fetchTodos()
    }, []);
    const classes = useStyles()
    // @ts-ignore
    return (
        <div>
            <h1>Todo</h1>
            {todos.map((todo: Todo) => (
                <p className={classes.toDoItem} key={todo.id}>
                    {todo.id} {todo.title}
                </p>
            ))}
    </div>
);
};

const mapStateToProps = (state: { todos: Todo[] }) => ({
    todos: state.todos,
})

const mapDispatchToProps = { fetchTodos }

export default connect(mapStateToProps, mapDispatchToProps)(TodosComponent);
