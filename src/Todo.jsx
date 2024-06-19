import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPen,
  faTrashCan,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
import "./list.css";
const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [newtask, setNewtask] = useState("");
  const [editid, setEditid] = useState(null);
  const [edittask, setEdittask] = useState("");
  const addNewTask = () => {
    if (newtask.trim()) {
      setTasks([...tasks, { id: Date.now(), todo: newtask }]);
      setNewtask("");
    }
  };
  const updateTask = (id) => {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, todo: edittask } : task))
    );
    setEditid(null);
    setEdittask("");
  };
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  return (
    <div>
      <div className="container">
        <h1>TO-DO LIST</h1>
        <div className="input">
          <input
            type="text"
            value={newtask}
            onChange={(e) => setNewtask(e.target.value)}
            id="addtask"
            placeholder="Enter here"
          ></input>
          <button onClick={addNewTask} id="add">
            ADD
          </button>
        </div>
        <div className="container1">
          <ul className="list">
            {tasks.map((task) => (
              <li key={task.id}>
                {editid === task.id ? (
                  <>
                    <div className="update">
                      <input
                        type="text"
                        value={edittask}
                        onChange={(e) => setEdittask(e.target.value)}
                      ></input>
                      <button onClick={() => updateTask(task.id)}>
                        <FontAwesomeIcon icon={faPenToSquare} />
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="task-container">
                      {task.todo}
                      <div className="button-container">
                        <button
                          onClick={() => {
                            setEditid(task.id);
                            setEdittask(task.todo);
                          }}
                          id="edit"
                        >
                          <FontAwesomeIcon icon={faPen} />
                        </button>
                        <button onClick={() => deleteTask(task.id)} id="delete">
                          <FontAwesomeIcon icon={faTrashCan} />
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </li>
            ))}
          </ul>
          <button onClick={() => setTasks([])} id="clear">
            CLEAR
          </button>
        </div>
      </div>
    </div>
  );
};
export default Todo;
