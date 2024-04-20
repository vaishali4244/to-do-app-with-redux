import React from "react";
import './taskList.css';

const TaskList = ({ item, setDelete }) => {

  return (
    <div key={item?.id} className="list-container">
        <p className="list-content">{item?.task}</p>
        <button className="dlt-btn" onClick={()=>setDelete(item?.id)} >DELETE</button>
 
    </div>
  );
};

export default TaskList;
