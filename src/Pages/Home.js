import React, { useContext, useEffect } from 'react';
import { TodoContext } from './TodoContext';

function Home() {
    const { todos } = useContext(TodoContext);
    useEffect(() => {
        console.log('Todos:', todos);
    }, [todos]);

    return (
        <div className='Home'>
            <h1>List</h1>
            <ul>
                {todos.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default Home;
