import React, { useState } from 'react';
import { MdDescription } from 'react-icons/md';

function Content() {
  const data = [
    { id: 1, details: "Contact Details", description: "Add contact details for further communications." },
    { id: 2, details: "Shipping Address", description: "Add shipping address for successful delivery." },
    { id: 3, details: "Payment", description: "Complete Payment to complete the order." },
    { id: 4, details: "Delivered", description: "Ready to get delivered!" }
  ];

  const [num, setNum] = useState(0);

  function nextButton() {
    setNum((prev) => (prev < data.length - 1 ? prev + 1 : prev));
  }

  function prevButton() {
    setNum((prev) => (prev > 0 ? prev - 1 : prev));
  }

  return (
    <div className='flex flex-col items-center relative'>
      <div className='w-[75vw] h-[1vh] bg-black mt-5 mx-[10px]'></div>
      <div className='w-[80vw] h-[20vh] flex justify-between absolute top-4 z-10'>
        {data.map((item, index) => (
          <div className='flex flex-col items-center' key={item.id}>
            <div className='w-[20px] h-[20px] bg-blue-500 rounded-xl text-center ml-[30px]'>
              {index < num ? '✓' : item.id}
            </div>
            <p className='text-xl'>{item.details}</p>
          </div>
        ))}
      </div>
      <div className='mt-9 text-xl'>{data[num].description}</div>
      <div className='flex mt-6 z-20'>
        <button className='border-2 border-black' onClick={prevButton} disabled={num === 0}>Previous</button>
        <button className='border-2 border-black ml-2' onClick={nextButton} disabled={num === data.length - 1}>Next</button>
      </div>
    </div>
  );
}

export default Content;
