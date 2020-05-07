import React, { useState, useContext } from 'react'
import { TodoContext } from './TodoContext'

export default function Navbar() {

  const [todos, setTodos] = useContext(TodoContext)
  const [value, setValue] = useState("")

  const addTodo = (e) => {
    e.preventDefault()
    setTodos([...todos, {
      "id": Date.now(),
      "value": value,
      "done": false
    }])
    setValue("")
  }

  return (
    <div className="list navbar">
      <p>Manage Todo-List</p>
        <form onSubmit={addTodo}>
          <input value={value} type="text" onChange={(e) => setValue(e.target.value)}/><br/><br/>
          <button className="button">Add Todo</button>
        </form>
    </div>
  );
};