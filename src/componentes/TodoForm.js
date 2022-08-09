import React, { useState } from 'react'
import {CgAdd} from "react-icons/cg"

function TodoForm({addTodo}) {

  const [userInput, setUserInput] = useState(" ")

  const handleOnchange=(e)=>{
    setUserInput(e.currentTarget.value);

  }

  const handleOnSubmit= (e)=>{
    e.preventDefault();
    if(userInput.trim() !== ``)
      addTodo(userInput)
      setUserInput(``)
    
  }
  return (
    <div>
        <form onSubmit={handleOnSubmit}>
            <input type="text" value={userInput} onChange={handleOnchange} placeholder="Ingrese una actividad" />
            <CgAdd color='black' fontSize="1.3rem" cursor={"pointer"}/>
        </form>
    </div>
  )
}

export default TodoForm;