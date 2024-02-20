import React , { useState } from "react";
//import {useTodo} from '../components/TodoContext'
import {useTodo} from '../contexts/TodoContext'

function TodoForm() {
    //defining state for individual todo
    const [todo , setTodo] = useState("")
    const {addTodo} = useTodo()

    const add = (e) => {
        e.preventDefault()

        if(!todo) return

        //54 min
       // addTodo({id: Date.now(), todo: todo, completed:false})
       // addTodo( todo: todo, completed:false})  if field and val are same then you can write todo only
       addTodo( {todo, completed:false} ) // if field and val are same
        setTodo("")
    }


    return (
        <form onSubmit={add}  className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value = {todo}
                onChange = {(e) => setTodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm