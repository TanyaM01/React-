import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/card";

function App() {
  //devui.io
  //tailwindcss.com

  //PROPS: helps to make card reusable

  let myObj = {
    username: "tanya",
    age: 21
  }

  let newArr = [1,2,3,4]
  //passing above in line 23 ->passing one component to another component amd jahan receive krna h wahan props hone ka
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">Tailwind Test</h1>
      <Card username="chaiaurcode" someObj = {myObj} someObj2={newArr} btnText="click me"/> 
      <Card username="tanya" btnText="visit me"/>
      

    </>
  );
}

export default App;
