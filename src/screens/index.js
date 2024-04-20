import { useDispatch, useSelector } from "react-redux";
import TaskInput from "../components/taskInput/taskInput";
import TaskList from "../components/taskList/taskList";
import { useEffect, useRef, useState } from "react";
import { delData, setData } from "../redux/reducer/taskReducer";

const Screen = () => {
  const data = useSelector((state) => state?.task?.data);

  const dispatch = useDispatch();
  //   const [addTask, setAddTask] = useState("");
  const [deleteId, setDeleteId] = useState("");
  const inputRef = useRef(null);
  

 
  const addItemFunc = () => {
   
    if (inputRef.current.value.trim() !== "") {
      //   listItemFunc(addTask);
      dispatch(
        setData([
          {
            id: Date.now(),
            task: inputRef.current.value,
          },
        ])
      );
      inputRef.current.value = "";
    }
  };

  useEffect(() => {
    const deleteFunc = (id) => {
      const deleteItem = data.filter((item) => item?.id !== id);
      dispatch(delData(deleteItem));
    };
    if (deleteId?.length !== 0) {
      deleteFunc(deleteId);
    }
  }, [deleteId]);

  return (
    <div className="main-container">
      <header>
        <nav>    
              <h1 className="heading">To-do Application</h1>     
        </nav>
      </header>
      <main>
        <section className="task-container">
          <TaskInput
            inputRef={inputRef}
            addItemFunc={addItemFunc}
          />
          {data.map((item, index) => {
            return <TaskList setDelete={setDeleteId} item={item} />;
          })}
        </section>
      </main>
    </div>
  );
};
export default Screen;
