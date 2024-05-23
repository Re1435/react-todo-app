import { v4 as uuidv4 } from "uuid";

// Action creator to add a new task
export const addTask = (todo) => {
  // Generate a unique id for the new task using uuidv4
  const id = uuidv4();

  return {
    type: "ADD_TASK",
    // Payload includes id, todo text, and initial completion status (false)
    payload: {
      id,
      todo,
      completed: false,
    },
  };
};

// Action creator to delete a task
export const deleteTask = (id) => {
  return {
    type: "DELETE_TASK",
    payload: id, // Payload contains the id of the task to be deleted
  };
};

// Action creator to toggle the completion status of a task
export const toggleTask = (id) => {
  return {
    type: "TOGGLE_TASK",
    payload: id, // Payload contains the id of the task to toggle
  };
};

// Action creator to change the theme of the application
export const changeTheme = (theme) => {
  return {
    type: "CHANGE_THEME",
    payload: theme, // Payload contains the new theme
  };
};
