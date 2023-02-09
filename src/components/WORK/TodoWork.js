import React, { useState, useRef } from 'react';
import './TodoWork.css';
import { Link } from 'react-router-dom';
import life from './life.png'
import work from './work.png'

import WorkInput from './WorkInput';
import WorkList from './WorkList';
import WorkTitle from './WorkTitle';

function TodoWork() {

    const [todos, setTodos] = useState([]);

    const nextId = useRef(0);

    const handleSubmit = (text) => {
        const todo = {
            id: nextId.current,
            text,
            checked: false,
        };
        setTodos(todos.concat(todo));
        nextId.current += 1;
    }

    const remove = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    }

    const onToggle = (id) => {
        setTodos(
            todos.map((todo) => {
                return todo.id === id ? { ...todo, checked: !todo.checked } : todo;
            })
        )
    }

    return (
        <main>
            <img src='./life.png'></img>
            <WorkTitle>...Really?</WorkTitle>
            <WorkInput onSubmit={handleSubmit} />
            <WorkList todos={todos} onRemove={remove} onToggle={onToggle} />
        </main>
    )
}

export default TodoWork;