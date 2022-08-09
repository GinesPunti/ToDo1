import { useState } from 'react';
import './App.css';
import TodoList from './componentes/TodoList';
import data from "./data.json"
import TodoForm from './componentes/TodoForm';


function App() {
  const [todos , setTodos ]= useState(data);

  const onDeleteItem=(id)=>{
    setTodos([...todos].filter(todo => todo.id !== id));
  }

  const addTodo=(newTodo)=>{
    let newItem= {id: +new Date(), task: newTodo};
    setTodos([...todos, newItem])
}
  
  return (
    <div className="body">
      <h1>ToDo List</h1>
      <TodoForm addTodo={addTodo}/>
      <TodoList todos={todos} onDeleteItem={onDeleteItem}>
      </TodoList> 
    </div>
  );
}

export default App;
