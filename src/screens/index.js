import { useDispatch, useSelector } from "react-redux";
import TaskInput from "../components/taskInput/taskInput";
import TaskList from "../components/taskList/taskList";
import { useRef, useState } from "react";
import { delData, setData } from "../redux/reducer/taskReducer";

const Screen = () => {
  const data = useSelector((state) => state?.task?.data);
  const [deleteId, setDeleteId] = useState("");

  const dispatch = useDispatch();
  const inputRef = useRef(null);

  const addItemFunc = () => {
    if (inputRef.current.value.trim() !== "") {
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

  const deleteFunc = (id) => {
    const deleteItem = data.filter((item) => item?.id !== id);
    dispatch(delData(deleteItem));
  };

  if (deleteId) {
    deleteFunc(deleteId);
    setDeleteId("");
  }

  return (
    <div className="main-container">
      <header>
        <nav>
          <h1 className="heading">To-do Application</h1>
        </nav>
      </header>
      <main>
        <section className="task-container">
          <TaskInput inputRef={inputRef} addItemFunc={addItemFunc} />
          {data.map((item, index) => {
            return <TaskList setDelete={setDeleteId} item={item} />;
          })}
        </section>
      </main>
    </div>
  );
};
export default Screen;
