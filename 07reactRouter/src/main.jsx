import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route } from 'react-router-dom';
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx';
import Github, { githubInfoLoader } from './components/Github/Github.jsx';

/*
const router = createBrowserRouter([
  {
    path: '/'  ,
    element : <Layout/> , // '/' kya render krega? layout
    children: [
      {
        path: "",  // / ke baad kuch nahi,   '/' pei bhi toh kuch display krenge
        element: <Home/>
      },
      {
        path: "about", // / ke baad about
        element: <About/>
      },
      {
        path: "contact",
        element: <Contact/>
      }
    
    ]
  }
])
*/

//2nd way for above    //nesting elements inside layout element
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element = {<Home/>}/>
      <Route path='about' element = {<About/>}/>
      <Route path='contact' element = {<Contact/>}/>
      <Route path='user/:userid' element = {<User/>}/>
      <Route 
      //loader={}   if you want to fetch data from api or db se toh aap direct api call yehin se kr sakte, link p click krne se pehle, cursor laate hi  toh ussi event pei api call krdega and data fetching starts, even before useeffect, 
      /*loader={() => {

      }}*/
      loader = {githubInfoLoader}
      path='github' 
      element = {<Github/>}
      />


    </Route>
  )
)



//yahan hum pehle <App/> render kr rei the
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
