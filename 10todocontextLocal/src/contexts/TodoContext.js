import {createContext, useContext} from "react"

//properties, functionalities
//iss context m kya kya values aur methods h? see down
export const TodoContext = createContext({
    
    todos: [
        {
            //har ek todo kaise banega? har ek pei id hogi, todo mssg, by default kya h completed->false, (checked bhi bol saktei)
            //abhi bs ek todo likhenge taaki model yaad rhe
            id:1,
            todo: "Todo mssg",
            completed: false,
        }
    ],

    addTodo : (todo) => {}, //todo here means "mssg", line 12 string
    updateTodo: (id, todo) => {},
    deleteTodo:  (id) => {},
    toggleComplete: (id) => {}
})

export const useTodo = () => {
    return useContext(TodoContext)
}

export const Todoprovider = TodoContext.Provider