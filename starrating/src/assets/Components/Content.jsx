import React, { useEffect, useState } from 'react'
import { FaStar } from 'react-icons/fa6';


const Content = () => {
  const arr=[1,2,3,4,5]
  const [rating, setRating]=useState(2);

  return (
    <div className="flex justify-center">
      <div className="flex space-x-1 mt-2">
        {arr.map((item)=>(
          <FaStar className={item <=rating ? "text-black" : "text-gray-300" } onClick={
            ()=>{
              if(item<=2){
              setRating(2)
              }
              else{
                setRating(item)
              }
            }
          }/>
        ))}
        
      </div>
    </div>
  );
}

export default Content
