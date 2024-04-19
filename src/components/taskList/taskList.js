import React from "react";

const TaskList = ({ item, setDelete }) => {


  return (
    <div key={item?.id}>
      <ul className="ul-list">
        <li className="list-content">{item?.task}</li>
        <button onClick={()=>setDelete(item?.id)} >DELETE</button>
      </ul>
    </div>
  );
};

export default TaskList;
