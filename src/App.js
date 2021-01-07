import React, { useState } from 'react';
import './App.css';
import ToDoList from './ToDoList';
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';

const App = () => {

  const [list, setList] = useState("");
  const [items, setItems] = useState([]);

  const inputEvent = (obj) => {
    setList(obj.target.value);
  };
  const addItem = () => {
    setItems((oldItems) => {
      return [...oldItems, list];
    })
    setList("");
  };
  const deleteItem = (id) => {
    console.log("deleted")
    setItems((oldItems) => {
      return oldItems.filter((arrayEle, index) => {
        return index !== id;
      })
    })
  };

  return (
    <>
      <div className='main_div'>
        <div className='center_div'>
          <br />
          <h1 className='h1'>ToDo List</h1>
          <br />
          <input className='input' type='text' placeholder='Add Items' name='listItem'
            onChange={inputEvent} value={list} />
          <AddCircleRoundedIcon className='button' fontSize='large' onClick={addItem} />

          <ol className='ol'>
            {items.map((itemValue, index) => {
              return < ToDoList key={index} id={index} text={itemValue} onSelect={deleteItem} />;
            })}
          </ol>
        </div>
      </div>
    </>
  )

}

export default App;