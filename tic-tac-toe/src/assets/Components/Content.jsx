import React, { useEffect, useState } from 'react';

const Content = () => {
  let [data, setData] = useState(["", "", "", "", "", "", "", "", ""]);
  let [lock, setLock] = useState([false, false, false, false, false, false, false, false, false]);
  let [count, setCount] = useState(0);
  let [gamelock, setGameLock] = useState(false);
  let [xwin,setXwin]=useState(0)
  let [owin,setOwin]=useState(0)
  let [dwin,setDwin]=useState(0)
  function setValue(index1) {
    if (!gamelock) {  // Check game lock initially
      if (count % 2 === 0) {
        data.map((item, index) => {
          if (index1 === index && !lock[index]) {
            setData((prev) => {
              const newData = [...prev];
              newData[index] = 'x';
              return newData;
            });
            setLock((prev) => {
              const newLock = [...prev];
              newLock[index] = true;
              return newLock;
            });
          }
        });
        setCount((prev) => prev + 1);
      } else {
        data.map((item, index) => {
          if (index1 === index && !lock[index]) {
            setData((prev) => {
              const newData = [...prev];
              newData[index] = 'o';
              return newData;
            });
            setLock((prev) => {
              const newLock = [...prev];
              newLock[index] = true;
              return newLock;
            });
          }
        });
        setCount((prev) => prev + 1);
      }
      
    }
  }
    
  useEffect(()=>{
    checkwin()
  },[data])
  function checkwin() {
    if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
      win(data[2]);
    } else if (data[3] === data[4] && data[4] === data[5] && data[5] !== "") {
      win(data[3]);
    } else if (data[6] === data[7] && data[7] === data[8] && data[8] !== "") {
      win(data[6]);
    } else if (data[0] === data[3] && data[3] === data[6] && data[6] !== "") {
      win(data[6]);
    } else if (data[1] === data[4] && data[4] === data[7] && data[7] !== "") {
      win(data[7]);
    } else if (data[2] === data[5] && data[5] === data[8] && data[8] !== "") {
      win(data[8]);
    } else if (data[0] === data[4] && data[4] === data[8] && data[8] !== "") {
      win(data[8]);
    } else if (data[2] === data[4] && data[4] === data[6] && data[6] !== "") {
      win(data[6]);
    }
    else{
    if(lock.every((item)=>item===true) && gamelock===false){
      setDwin((prev)=>prev+1)
    }
  }
  }

  function win(datas) {
    if(datas==='x'){
      setXwin((prev)=>prev+1)
      setGameLock(true);
    }
    else{
        setOwin((prev)=>prev+1)
        setGameLock(true);
      }
    
  }

  return (
    <div className='flex flex-col items-center h-[50vh] justify-center'>
      <div className='flex gap-1 mt-4 h-[5vh]'>
        <h1>Status</h1>
        <h1>Playing</h1>
      </div>
      <div className='flex gap-4 h-[5vh] mt-6'>
        <div className='flex flex-col'>
          <h1>X</h1>
          <h1>{xwin}Wins</h1>
        </div>
        <div className='flex flex-col'>
          <h1>O</h1>
          <h1>{owin}Wins</h1>
        </div>
        <div className='flex flex-col'>
          <h1>=</h1>
          <h1>{dwin}Draws</h1>
        </div>
      </div>
      <div className='bg-yellow h-auto w-[20%] mt-6'>
        <div className='flex flex-col gap-3'>
          <div className='flex h-[auto]  gap-3'>
            <div className='h-[10vh] w-[33%] border-2 border-black text-center 'onClick={() => setValue(0)}>{data[0]}</div>
            <div className='h-[10vh] w-[33%] border-2 border-black text-center' onClick={() => setValue(1)}>{data[1]}</div>
            <div className='h-[10vh] w-[33%] border-2 border-black text-center' onClick={() => setValue(2)}>{data[2]}</div>
          </div>
          <div className='flex h-[auto]  gap-3'>
            <div className='h-[10vh] w-[33%] border-2 border-black text-center' onClick={() => setValue(3)}>{data[3]}</div>
            <div className='h-[10vh] w-[33%] border-2 border-black text-center' onClick={() => setValue(4)}>{data[4]}</div>
            <div className='h-[10vh] w-[33%] border-2 border-black text-center' onClick={() => setValue(5)}>{data[5]}</div>
          </div>
          <div className='flex h-[auto]  gap-3'>
            <div className='h-[10vh] w-[33%] border-2 border-black text-center' onClick={() => setValue(6)}>{data[6]}</div>
            <div className='h-[10vh] w-[33%] border-2 border-black text-center' onClick={() => setValue(7)}>{data[7]}</div>
            <div className='h-[10vh] w-[33%] border-2 border-black text-center' onClick={() => setValue(8)}>{data[8]}</div>
          </div>
        </div>
      </div>
      <button className='border-2 border-black mt-3' onClick={()=>{
        setData(["", "", "", "", "", "", "", "", ""]);
        setLock([false, false, false, false, false, false, false, false, false]);
        setCount(0);
        setGameLock(false);
      }}>Rematch</button>
    </div>
  
  );
};

export default Content;
