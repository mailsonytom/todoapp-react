import React, {createContext, useState} from 'react'

export const TodoContext = createContext();

export const TodoProvider = (props) => {
    const [todos, setTodos] = useState([
      {
        "id": Date.now(),
        "value": "Buy milk",
        "done": false
      }
    ]);
  
    return (
      <TodoContext.Provider value={[todos, setTodos]}>
        {props.children}
      </TodoContext.Provider>
    )
  }