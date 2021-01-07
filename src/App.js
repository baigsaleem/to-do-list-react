import React, { useState } from 'react';
import './App.css';
import ToDoList from './ToDoList';
import IconButton from '@material-ui/core/IconButton';
import AddSharpIcon from '@material-ui/icons/AddSharp';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';

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
          <AppBar position='relative'>
            <Typography variant="h4">
              ToDo List
            </Typography>
          </AppBar>
          <br />
          <TextField id="outlined-basic" label="Add Item" variant="outlined"
            onChange={inputEvent} value={list} />
          <Tooltip title='Add Item'>
            <IconButton className='button_green' onClick={addItem}>
              <AddSharpIcon />
            </IconButton>
          </Tooltip >
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