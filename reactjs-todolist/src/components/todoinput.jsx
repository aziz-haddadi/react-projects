import {  useState } from "react"

export default function Todoinput(props){
    const {todoValue,setTodoValue,handleaddTodos} = props
    
    return (
        <header>
            <input value={todoValue} onChange={(e) => {
                setTodoValue(e.target.value)
            }} placeholder="Enter todo..." />
            <button onClick={() => {
                handleaddTodos(todoValue)
                setTodoValue("")
            }}>Add</button>
        </header>
    )
}