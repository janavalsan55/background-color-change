import React, { useState } from 'react'

function App() {
  const[red,setred]=useState(false)
  const [green,setgreen]=useState(false)
  const [blue,setblue]=useState(false)
  const[Yellow,setyellow]=useState(false)
  const handlered=()=>{
    setred(true)
    setgreen(false)
    setblue(false)
    setyellow(false)
  }

  const handlegrn=()=>{
    setgreen(true)
    setred(false)
    setblue(false)
    setyellow(false)
  }
  const handleblue=()=>{
    setblue(true)
    setred(false)
    setgreen(false)
    setyellow(false)
  }
  const handleyellow=()=>
{
  setyellow(true) 
  setred(false)
  setgreen(false)
  setblue(false)
}
  return (
    <>
    <div className='d-flex justify-content-center align-items-center w-100 ' style={{height:'100vh',backgroundColor:red?'red':green?'green':blue?'blue':Yellow?'yellow':'white'}}>
    <button className='btn btn-dark me-2' onClick={handlered}>Red</button>
    <button className='btn btn-dark me-2' onClick={handlegrn}>Green</button>
    <button className='btn btn-dark me-2' onClick={handleblue}>Blue</button>
    <button className='btn btn-dark' onClick={handleyellow}>Yellow</button>
    </div>
    </>
  )
}

export default App