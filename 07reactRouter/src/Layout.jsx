import React from "react";
import Header from './components/Header/Header'
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";
//Outlet uses this'layout' as a base and inside it we can change things, upar and neeche same rkhega (header and footer)

function Layout() {
    return(
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        
        </>
    )
}

export default Layout