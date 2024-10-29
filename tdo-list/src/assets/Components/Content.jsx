import React, { useEffect, useState } from 'react'

const Content = () => {
    let [count,setCount]=useState(0)
    let [tasks, setTasks]= useState([])
    let [searchValue, setSearchValue]=useState("")
    let [edits,setEdits]=useState(false)
    let [buttonValue, setButtonValue]=useState("")
    let [Id, setId]=useState("")
    

    function changeValue(e){
        setSearchValue(e.target.value)
    }
    function deleting(index1){
        let task=tasks.filter((item,index)=>{
            if(item.id!==index1){
                return item
            }
        })
        console.log(index1)
        setTasks(task)
    }

    function edit(index1){
        setEdits(true)
        let task=tasks.find((item,index)=>{
            if(item.id===index1){
                return item
            }
        })
        setSearchValue(task.testing)

    }
   
  return (
    <>
    <div className='w-[100vw] h-[10vh] flex flex-col items-center'>
      <input type="text" className='mt-5 border-2' value={searchValue} onChange={changeValue}/>
      <div className='mt-3'>
        <button className='bg-black text-white mr-3' onClick={(e)=>{
            if(!edits){
        
            setTasks([...tasks, {id:count++,testing:searchValue}])
            setCount(count++)
            setSearchValue("")
            }
            else{
                setEdits(false)
                let task=tasks.map((item)=>{
                    console.log(item)
                    if(item.id === Id){
                        item.testing=searchValue
                    
                    }
                    return item
                })
                console.log(task)
                setTasks(task)
                setSearchValue("")
            }
            
          
        }}>{edits ? "Update": "Submit"}</button>
        <button className='bg-black text-white' onClick={()=>{
            setSearchValue("")
            setEdits(false)
        }}> Cancel</button>
      </div>
    </div>
    <div className=' w-[100vw] h-[auto]' style={{class:"test"}}>{tasks.map((item,index)=>(
        <div className='flex justify-center items-center mt-3' key={item.id}>
           
        <input type="text"  className='border-2' readOnly value={item.testing}/>
        <div>
          <button className='bg-black text-white mr-3 ml-2' onClick={()=>{
            edit(item.id)
            setId(item.id)
          }
          }>Edit</button>
          <button className='bg-black text-white' onClick={()=>{deleting(item.id)}} >Delete</button>
        </div>
      </div>
    )

    )}
    </div>
    
    </>
  )
}

export default Content
