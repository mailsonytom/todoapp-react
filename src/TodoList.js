import React, { useContext } from 'react'
import { TodoContext } from "./TodoContext"
import Todo from "./Todo"
import styles from './App.css'

export default function TodoList() {
  const [todos, setTodos] = useContext(TodoContext);

  // toggleDone
  const toggleDone = (todo) => {
    todos.map(_todo => _todo === todo ? _todo.done = !todo.done : _todo)
    setTodos([...todos])
  }
  // delete
  const deleteTodo = (todo) => {
    const _todos = todos.filter(_todo => _todo !== todo)
    setTodos(_todos)
  }

  return (
    <div className="list">
      <p>{todos.length} Todos</p>
     <div className="box">
     {todos.map(todo => (
          <Todo key={todo.id} todo={todo} toggleDone={toggleDone} deleteTodo={deleteTodo} />
      ))}
     </div>
    </div>
  )
}