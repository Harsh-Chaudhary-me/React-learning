// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useState } from 'react';
import './App.css'

function App() {
  let [counter,setCounter]=useState(10)
  //const counter=10; 
  // let counter=10;


  const addValue = () =>{
    //  console.log("value incremented");
      setCounter(counter+1)
      console.log(counter);
  }
   const delValue = () =>{
    //  console.log("value incremented");
      setCounter(counter-1)
      console.log(counter);
  }
  return (
    <>
      <h1>Hello Everyone, we are here to understand the concept of hooks in react js</h1>
      <h3>Counter:{counter}</h3>
      <button onClick={addValue}>Increment by 1</button>
      <button onClick={delValue}>Decrement by 1</button>
    </>
  )
}

export default App
