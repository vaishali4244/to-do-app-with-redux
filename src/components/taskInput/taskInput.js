import React from "react";

const TaskInput = ({ inputRef, addItemFunc }) => {
 

  return (
    <>
    
      <div className="input-container">
        <label>Add task</label>
        <input type="text" 
        ref={inputRef}
        placeholder="enter new task" 
        />
      </div>
      <button onClick={addItemFunc}>Submit</button>
    </>
  );
};

export default TaskInput;
