import { useState, useEffect } from "react"
import { Header } from "./Components/Header"
import { Tabs } from "./Components/Tabs"
import { TodoInput } from "./Components/TodoInput"
import { TodoList } from "./Components/TodoList"


function App() {
  // const todos = [
  //   {input: 'Hello! Add your first todo!', complete:true},
  //   {input: 'Get the Groceries!', complete:false},
  //   {input: 'Learn how to web design', complete:false},
  //   {input: 'Say hi to gran gran', complete:true}
  // ]

  const [todos, setTodos] = useState([
    {input: 'Hello! Add your first todo!', complete:true}

  ])
  const [selectedTab, setSelectedTab] = useState('Open') 

  function handleAddTodo(newTodo){
    const newTodoList = [...todos, {input: newTodo, complete:false}]
    setTodos(newTodoList)
    handleSaveData(newTodoList)
  }
  function handleCompleteTodo(index){
    let newTodoList = [...todos]
    let completedTodo = todos[index]
    completedTodo['complete'] = true
    newTodoList[index] = completedTodo
    setTodos(newTodoList)
    handleSaveData(newTodoList)
  }
  function handleDeleteTodo(index){
    let newTodoList = todos.filter((val, valindex) => {
      return valindex !== index
    })
    setTodos(newTodoList)
    handleSaveData(newTodoList)
  }
  function handleSaveData(currTodos){
    localStorage.setItem('todo-app', JSON.stringify({todos:currTodos}))
  }

  useEffect(() => {
    if(!localStorage || !localStorage.getItem('todo-app')) { return }
    let db = JSON.parse(localStorage.getItem('todo-app'))
    setTodos(db.todos)
  }, [])

  return (
    <>
      <Header todos={todos}/>
      <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} todos={todos}/>
      <TodoInput handleAddTodo={handleAddTodo}/>
      <TodoList handleCompleteTodo={handleCompleteTodo} handleDeleteTodo={handleDeleteTodo} selectedTab={selectedTab} todos={todos}/>

    </>
      
  )
}

export default App
