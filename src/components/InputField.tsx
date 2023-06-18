import React from 'react'
import "./InputStyle.css"

interface InputProps{
    todo : string,
    setTodo: React.Dispatch<React.SetStateAction<string>>,
    handleAdd : (e: React.FormEvent) => void
}

const InputField = ({todo,setTodo , handleAdd} : InputProps) => {
  return (
    <div>
        <form className='form' onSubmit={handleAdd}>
            <input 
            value={todo}
            onChange={(e)=>setTodo(e.target.value)}
            type="input"
             placeholder='Enter a task'
              className='input_box'
              />
            <button className='input_submit' type="submit">Go</button>
        </form>
    </div>
  )
}

export default InputField