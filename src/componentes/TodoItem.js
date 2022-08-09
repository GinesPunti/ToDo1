import React from 'react'
import {BsFillTrashFill} from "react-icons/bs"

function TodoItem({todo, onDeleteItem}) {
  return (
    <p className='todoItem'>
      {todo.task}
      <BsFillTrashFill fontSize="1.3rem" cursor="pointer" onClick={()=>{
        onDeleteItem(todo.id)
      }}/>
    </p>
    
  )
}

export default TodoItem;