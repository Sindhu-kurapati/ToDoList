import React, { useState } from 'react'

const InputContainer = ({AddNewToDo}) => {
    const [inputValue,setInputValue]=useState("");

  return (
    <div className='input'>
      <input
      placeholder='add an item ' 
      value={inputValue}
      onChange={(e)=>setInputValue(e.currentTarget.value)}
      />
      <button 
      className='add'
      onClick={()=>{
        AddNewToDo(inputValue);
        setInputValue("");
      }}>Add</button>
    </div>
  )
}

export default InputContainer
