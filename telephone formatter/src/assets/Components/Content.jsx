import React, { useState } from 'react';

const Content = () => {
  let [phone, setPhone] = useState("");

  return (
    <div className='flex flex-col items-center bg-red-50 h-[10vh]'>
      <input
        type="text"
        className='mt-3 border border-black px-2 py-1'
        value={phone}
        onChange={(e) => {
          let value = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters

          if (value.length < 4) {
            setPhone(value);
          } else {
            // Apply the formatting while maintaining the previous logic
            let formattedPhone = `+(${value.slice(0, 3)}) - ${value.slice(3, 10)}`;
            setPhone(formattedPhone);
          }
        }}
        placeholder="Mobile number"
      />
      <p>{phone}</p>
    </div>
  );
};

export default Content;
