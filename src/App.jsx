import InputContainer from './Components/InputContainer';
import ItemsContainer from './Components/ItemsContainer';
import Count from './Components/Count';
import './App.css'
import { useState } from 'react';

function App() {
  
const [ToDo,setToDo] = useState([]);

const AddNewToDo =(newToDo)=>{
  setToDo([...ToDo,newToDo]);
};

const DeleteToDo = (itemToBeDeleted)=>{
  const filteredToDo = ToDo.filter((item)=> item !== itemToBeDeleted); 
  setToDo(filteredToDo);
};
  return (

   <div className='App'>  
    <h1 className='heading'>My ToDo</h1>
    <Count itemsCount={ToDo.length}/>
    <InputContainer AddNewToDo={AddNewToDo}/>
    <ItemsContainer ToDo={ToDo} DeleteToDo={DeleteToDo}/>
   </div>
  )
}

export default App
