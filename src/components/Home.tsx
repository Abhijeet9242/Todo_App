import InputField from './InputField';
import "./Home.css"
import { useState } from 'react';
import { Todo } from './model';
import { TodoList } from './TodoList';

const Home = () => {

    const[todo,setTodo] = useState<string>("")
    const[todos , setTodos] = useState<Todo[]>([])

    // console.log(todo)

    const handleAdd = (e : React.FormEvent) => {
      e.preventDefault()

      if(todos){
        setTodos([...todos, {id:Date.now() , todo:todo , isDone:false}])
        setTodo("")
      }
    }

    console.log(todos)

  return (
    <div className='homepage'>
        <span className="heading">TODO</span>
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>

        <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  )
}

export default Home