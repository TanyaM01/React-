import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Todoprovider } from "./contexts/TodoContext";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function App() {
  //todos store rkhoge.. ui change hora h
  const [todos, setTodos] = useState([]); //state mai saarei todos hai

  //todo is a string val
  const addTodo = (todo) => { // this todo needs to go in todos line 11
    //setTodos(todo) purani saari vals todos array m se del hojyegi, aur todo aajyegi
    //prev->old todos
    setTodos((prev) => [{ id: Date.now(),...todo}, ...prev]); //purana array yahan mil jyega ..nayi bhi add hojyengi...naya array banra h
  };
  //id: Date.now(): This creates a new property id in the new todo object and assigns it the current timestamp using Date.now(). This ensures that each todo has a unique identifier based on the current time.
  //and spreads the properties of the todo parameter. This ensures that the new todo has a unique ID and inherits any additional properties from the input todo object.
  //The ...todo part will make sure that the new to-do includes both the new ID and the existing properties:

  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
  };

  /*
If prevTodo.id === id (i.e., the ID of the current todo matches the provided id), the value todo is used for that element in the new array.
If prevTodo.id !== id (i.e., the ID doesn't match), the original value prevTodo is used for that element in the new array.
const array = [1,2,3,4,5]
const ans = array.map((num) => num === 4? 0 : 4)
console.log(ans)   [ 4, 4, 4, 0, 4 ]*/

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id? {...prevTodo, completed: !prevTodo.completed} : prevTodo))
  }


  //jb application load kri toh already vals aajyei ui m tab k liye h yei..
  //jb tak react m ho, local storage can be accessed directly
  useEffect(() => {  //tell key .. LS gives val in string so you need to convert in JSON so do json.parse 
    const todos = JSON.parse(localStorage.getItem("todos"))//key

    if(todos && todos.length > 0){
      setTodos(todos)
    }
  }, [])

  //jb hum todo add kr rei toh we want it to be added in localstorage too
  //dobara get na ho issiliye we have to use useeffect again
  useEffect (() => {  //key val    //convert from array to string
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos]) //state wala todos




  return (
    <Todoprovider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            <TodoForm/>
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div key={todo.id}
              className="w-full"
              >
                <TodoItem todo={todo}/>
              </div>  
            ))}
          </div>
        </div>
      </div>
    </Todoprovider>
  );
}

export default App;
