import React from 'react'

const ItemsContainer = ({ToDo, DeleteToDo}) => {


  return (
    <div>
        <ul>
            {ToDo.map((item,index)=>{
                return(
                    <li key={index} className='items'>
                        {item}
                        <button 
                        className='done'
                        onClick={()=>DeleteToDo(item)}>
                            Done
                        </button>
                    </li>
                );
            })}
        </ul>
    </div>
  );
}

export default ItemsContainer;
