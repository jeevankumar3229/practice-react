

import React, { useState } from 'react';

const Content = () => {
  const questions = [
    {
      id: 1,
      title: "Do I have to allow the use of cookies?",
      info: "Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art."
    },
    {
      id: 2,
      title: "How do I change my My Page password?",
      info: "Coloring book forage photo booth gentrify lumbersexual. Migas chillwave poutine synth shoreditch, enamel pin thundercats fashion axe roof party polaroid chartreuse."
    },
    {
      id: 3,
      title: "What is BankID?",
      info: "Enamel pin fam sustainable woke whatever venmo. Authentic asymmetrical put a bird on it, lumbersexual activated charcoal kinfolk banjo cred pickled sartorial."
    },
    {
      id: 4,
      title: "Whose birth number can I use?",
      info: "Edison bulb direct trade gentrify beard lo-fi seitan sustainable roof party franzen occupy squid. Knausgaard cronut succulents, scenester readymade shabby chic lyft. Copper mug meh vegan gentrify."
    },
    {
      id: 5,
      title: "When do I receive a password ordered by letter?",
      info: "Locavore franzen fashion axe live-edge neutra irony synth af tilde shabby chic man braid chillwave waistcoat copper mug messenger bag. Banjo snackwave blog, microdosing thundercats migas vaporware viral lo-fi seitan"
    }
  ];

  const [button, setButton] = useState({ 1: false, 2: false, 3: false, 4: false, 5: false });
  const [visible, setVisible] = useState({ 1: false, 2: false, 3: false, 4: false, 5: false });
  const [checked,setChecked]= useState(false)
  const [multiple, setMultiple]=useState(false)

  function change(index) {
    if (checked) {
   
      setVisible((prev) => ({
        ...prev,
        [index]: !prev[index]
      }));
      setButton((prev) => ({
        ...prev,
        [index]: !prev[index]
      }));
    } else {

      setVisible({
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        [index]: true,
      });
      setButton({
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        [index]: true, 
      });


    }
  
  }
  // setButton(prev => {
  //   const newState = Object.assign({}, prev);  // Create a shallow copy of prev
  //   newState[index] = !prev[index];  // Toggle the value at the given index
  //   return newState;  // Return the updated state
  // });
 
  function changeCheckbox(){
    if(checked === true){
      setButton({
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
      });
      setVisible({
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
      });
  
    }
    setChecked(!checked)
    
  }
  return (
    <>
    <div className='flex justify-center'>
      <p>Is multiple open accordion allowed?</p>
      <input type="checkbox" name="" id="" className='ml-2' checked={checked} onChange={changeCheckbox}/>

    </div>
    <div className='flex flex-col items-center'>
      {questions.map((item) => (
        <div key={item.id} className='border-2 w-[70vw] h-auto flex flex-col mt-5'>
          <div className='flex justify-between'>
            <p>{item.title}</p>
            <button onClick={() => change(item.id)}>
              {button[item.id] ? "-" : "+"}
            </button>
          </div>
          <p>{visible[item.id] ? item.info : ""}</p>
        </div>
      ))}
    </div>
    </>
  );
}

export default Content;

