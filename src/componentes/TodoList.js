import React from 'react'
import TodoItem from './TodoItem';


function TodoList({todos, onDeleteItem}) {

  return (
    <div className='todoList'>
        {
            todos.map((todo, index)=>{
                return <TodoItem key= {`todo-${index}`} todo = {todo} onDeleteItem= {onDeleteItem} />
            })
        }
    </div>
)}

export default TodoList;