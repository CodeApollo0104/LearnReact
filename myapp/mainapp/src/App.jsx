import { useState } from 'react'

// create a component, which prints name age and hobby values.
function App() {
  function handleClick() {
    console.log("Hello world")
  }
  const name = "John"
  const firstname = "Frank"
  const age = 35
  const hobby = " traveling"
  return (
    <>
      <h1 onClick={handleClick}> This is my header tag : Hello </h1>

      {/*INSIDE THE return this is how you insert a comment {} */}
      <p>my name is : {name}</p>
      <p>{firstname}</p>
      <p>I'm {age} years old </p>
      <p>I love {hobby} </p>


    </>
  )
}

export default App
