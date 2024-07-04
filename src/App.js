import './Styles/App.css';
import React from 'react';
import { BrowserRouter, Routes, Route,Link } from 'react-router-dom';
import Home from './Pages/Home';
import Add from './Pages/Add';
import { TodoProvider } from './Pages/TodoContext';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <div className='navbar'>
          <Link to='/'>Home</Link>
          <Link to='/add-todo'>Add Task</Link>
        </div>
        <TodoProvider>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/add-todo' element={<Add />} />
          </Routes>
        </TodoProvider>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
