import React from 'react'
import TodoCard from './todocard'

export default function todolist(props) {
  const { todos,handledeletetodos,handleedittodos } = props
    return (
        <ul className='main'>
            {todos.map((todo, todoIndex) => {
                return (
                    <TodoCard  key={todoIndex} index={todoIndex} handledeletetodos={handledeletetodos} handleedittodos={handleedittodos}>
                        <p>{todo}</p>
                    </TodoCard>
                )
            })}
        </ul>
    )
}
