import React, { useEffect, useState } from 'react'

const Content = () => {
    let [value,setValue]=useState(0)
    let [increment,setIncrement]=useState("")
   
  return (
    <>
    <div className='w-[100vw] h-[10vh] flex flex-col items-center'>
      <input type="text" className='border-2 p-2 mt-3' value={value}/>
      <div className='flex mt-5'>
        <button className=' p-3 border-spacing-0 bg-black text-white' onClick={()=>{
          setValue(Number(value)+Number(increment))
        }}>+</button>
        <button className='p-3 ml-2 border-spacing-0 bg-black text-white' onClick={()=>{
          setValue(value-increment)
        }}>-</button>
      </div>
      <div className='flex mt-3'>
        <p>Increment or Decrement by:</p>
        <input type="text" className=" ml-2 border-2" name="" id="" value={increment} onChange={(e)=>{
          setIncrement(e.target.value)
        }} />
      </div>
      <button className='p-3 border-spacing-0 bg-black text-white mt-2' onClick={()=>{
        setValue(Number(0))
      }}>Reset</button>
      
    </div>
    
    

    
    
    
    </>
  )
}

export default Content
