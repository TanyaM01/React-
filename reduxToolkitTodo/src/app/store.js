//what is store? store from where we take all the things thru single source of truth ( collecting data from across the enterprise and aggregating it into a central repository)
//kinda global variable 
import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../features/todo/todoSlice'

export const store = configureStore({
    reducer: todoReducer
})