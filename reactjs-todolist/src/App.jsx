import { useEffect, useState } from 'react';
import './App.css'
import Todoinput from './components/todoinput'
import Todolist from './components/todolist'

function App() {
  const [todos,setTodos]=useState([]);
  const [todoValue,setTodoValue]=useState('')
  function persistData(newList) {
    localStorage.setItem('todos', JSON.stringify({ todos: newList }))
  }
  function handleaddTodos(newTodo){
    const newTodoList=[...todos,newTodo]
    persistData(newTodoList)
    setTodos(newTodoList)
  }
  function handledeletetodos(index) {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index
    });
    persistData(newTodoList)
    setTodos(newTodoList);
  }
  function handleedittodos(index){
    const valuetobeedited=todos[index]
    setTodoValue(valuetobeedited)
    handledeletetodos(index)
  }
  useEffect(()=>{
    if(!localStorage){
      return
    }
    let localtodos=localStorage.getItem("todos")
    if(!localtodos){
      return}
      localtodos=JSON.parse(localtodos).todos
      setTodos(localtodos)
    
  },[])
  return (
    <>
      <Todoinput todoValue={todoValue} setTodoValue={setTodoValue} handleaddTodos={handleaddTodos}/>
      <Todolist todos={todos} handledeletetodos={handledeletetodos} handleedittodos={handleedittodos}/>
    </>
  )
}

export default App
