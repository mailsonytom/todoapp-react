import React from 'react'
import styles from './App.css'

export default function Todo(props) {
  return (
    <div className="">
      <p className={`title ${props.todo.done}`}>{props.todo.value}</p>
      <button onClick={props.toggleDone.bind(this, props.todo)} className={`button ${props.todo.done}`}>{props.todo.done ? "Undo" : "Done"}</button>
      <button onClick={props.deleteTodo.bind(this, props.todo)} className="button">Delete</button>
    </div>
  )
}