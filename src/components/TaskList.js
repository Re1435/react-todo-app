import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask, toggleTask } from "../globalStore/taskAction"; // Importing actions for deleting and toggling tasks
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline"; // Importing delete icon
import CheckList from "../assets/Checklist.jpg"; // Importing image for empty list
import "../styles/styles.css"; // Importing component-specific styles

const TaskList = () => {
  const todos = useSelector((state) => state.todoTasks); // Fetching tasks from Redux store
  const dispatch = useDispatch(); // Getting dispatch function to dispatch actions

  // Function to handle task deletion
  const handleDelete = (id) => {
    dispatch(deleteTask(id)); // Dispatching deleteTask action with task id
  };

  // Function to handle task completion toggling
  const handleToggle = (id) => {
    dispatch(toggleTask(id)); // Dispatching toggleTask action with task id
  };

  return (
    <>
      <h3>Task List</h3> {/* Heading for task list */}
      {/* Displaying an image if the task list is empty */}
      {todos.length === 0 && (
        <div className='empty-img-container'>
          <img src={CheckList} alt='empty-img' />
        </div>
      )}
      {/* Rendering the list of tasks */}
      <ul className='todo-items'>
        {todos.map((task) => (
          <li key={task.id}>
            <div>
              <div>
                {/* Checkbox for toggling task completion */}
                <input
                  type='checkbox'
                  id={task.id}
                  checked={task.completed}
                  onChange={() => handleToggle(task.id)}
                />
              </div>
              <div className='label-container'>
                {/* Label for displaying task name with line-through style if completed */}
                <label
                  htmlFor={task.id}
                  style={{
                    textDecoration: task.completed ? "line-through" : "none",
                  }}
                >
                  {task.todo}
                </label>
              </div>
            </div>
            <div>
              {/* Text indicating task completion status */}
              <p style={{ color: task.completed ? "green" : "red" }}>
                {task.completed ? "Completed" : "Pending"}
              </p>
            </div>
            <div>
              {/* Button for deleting the task */}
              <button
                onClick={() => handleDelete(task.id)}
                className='delete-btn'
              >
                <DeleteOutlineIcon />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TaskList;
