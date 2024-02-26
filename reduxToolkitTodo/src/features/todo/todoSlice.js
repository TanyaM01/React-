import {  createSlice, nanoid } from "@reduxjs/toolkit";
//nanoid: method for generating uniqueIDs
//redux toolkit m Ab jo reducer banta h woh thoda alag hai, hum boltein h isko slices

//now how store should look at the start? for that use initial state which can be array or obj , here obj
const initialState = {
    todos: [{id : 1, text: "hello world"}] //array of objs
}


//now make slice( bigger version of reducer i.e.(functionality))
export const todoSlice =  createSlice({
    //slices have name
    name: 'todo',
    initialState,

    //reducer: store m kiuch change krna h , functionality part. reducer is ibj
    reducers: {
    
        addTodo:  (state, action) => {
            const todo = {
                id : nanoid(), 
                text: action.payload  //payload is an obj action.payload.text
            }
            state.todos.push(todo)
        },

        removeTodo : (state, action) => { //ab ik here ki remove krne k liye action m ek id toh bheja hi hoga
            state.todos = state.todos.filter((todo) =>todo.id !==action.payload )//action.payload(automatically id compare krlega)
        },

        updateTodo : (state,action) => {
            state.todos = state.todos.map((todo) => todo.id === action.payload.id? {...todo, text:action.payload.text} : todo)
        }
    }
    //properties(addtodo) and function
    //state and Action : state-abhi initialstate m kya vals h wo val degi ad action: jo bhi data pass hora h

})

//2 part needs to be exported

//this will help in components
export const {addTodo, removeTodo, updateTodo} = todoSlice.actions

//now store also needs to know abt the above reducers as store restrictive store h jo reducers registered h bs usnse val leke update krta hu
export default todoSlice.reducer