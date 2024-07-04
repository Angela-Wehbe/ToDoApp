import React, { useRef, useContext } from 'react';
import { TodoContext } from './TodoContext';
import { useNavigate } from 'react-router-dom';
function Add() {
    const Navigate = useNavigate();
    const inputRef = useRef();
    const { todos, setTodos } = useContext(TodoContext);
    const handleAddTask = () => {
        const newTask = inputRef.current.value;
        setTodos(
            [...todos, newTask]
        );
        Navigate('/');
    };
    return (
        <div>
            <input type='text' placeholder='Task' ref={inputRef} />
            <button type='button' onClick={handleAddTask}>Add Task</button>
        </div>
    )
}

export default Add