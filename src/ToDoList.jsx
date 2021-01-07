import React from "react";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import Tooltip from "@material-ui/core/Tooltip";

const ToDoList = (props) => {
  return (
    <>
      <div className="todo_style">
        <Tooltip title="Delete Item">
          <IconButton
            className="button_red"
            aria-label="delete"
            onClick={() => {
              props.onSelect(props.id);
            }}
          >
            <DeleteIcon />
          </IconButton>
        </Tooltip>
        <li className="li">{props.text}</li>
      </div>
    </>
  );
};

export default ToDoList;
