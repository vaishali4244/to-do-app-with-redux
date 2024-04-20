import React from "react";
import './taskInput.css';

const TaskInput = ({ inputRef, addItemFunc }) => {
  return (
    <>
      <div className="input-container">
        <label>Add task</label>
        <input type="text" ref={inputRef} placeholder="enter new task" />
      <button onClick={addItemFunc}>Submit</button>
      </div>
    </>
  );
};

export default TaskInput;
