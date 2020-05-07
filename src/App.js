import React from 'react'
import {TodoProvider} from './TodoContext'
import Navbar from './Navbar'
import TodoList from './TodoList'


function App() {
  return (
    <TodoProvider>
      <Navbar/>
      <TodoList/>
    </TodoProvider>
  );
}

export default App;
