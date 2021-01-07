import React from "react";
import DeleteForeverRoundedIcon from "@material-ui/icons/DeleteForeverRounded";

const ToDoList = (props) => {
  return (
    <>
      <div className="todo_style">
        <DeleteForeverRoundedIcon
          className="fa-times"
          aria-hidden="true"
          onClick={() => {
            props.onSelect(props.id);
          }}
        />
        <li className="li">{props.text}</li>
      </div>
    </>
  );
};

export default ToDoList;
