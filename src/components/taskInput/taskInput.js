import React from "react";
import './taskInput.css';

const TaskInput = ({ inputRef, addItemFunc }) => {
  return (
      <div className="input-container">
        <label>Add Task</label>
        <input type="text" ref={inputRef} placeholder="enter new task" />
      <button className="button-add" onClick={addItemFunc}>SUBMIT</button>
      </div>
   
  );
};

export default TaskInput;
