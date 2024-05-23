// Define the initial state
const initialState = {
  // Load tasks from local storage
  todoTasks: JSON.parse(localStorage.getItem("tasks")) || [],
  // Load theme from local storage && default is 'light'
  theme: localStorage.getItem("theme") || "light",
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    // Action to add a new task
    case "ADD_TASK":
      // Create a new array by adding the new task to the existing tasks
      const updatedAddTask = [...state.todoTasks, action.payload];
      // Save the updated tasks to local storage
      localStorage.setItem("tasks", JSON.stringify(updatedAddTask));
      // Return the updated state with the new tasks added
      return {
        ...state,
        todoTasks: updatedAddTask,
      };

    // Action to delete a task
    case "DELETE_TASK":
      // Filter out the task with the specified ID from the existing tasks
      const updatedDeleteTask = state.todoTasks.filter(
        (task) => task.id !== action.payload
      );
      // Save the updated tasks to local storage
      localStorage.setItem("tasks", JSON.stringify(updatedDeleteTask));
      // Return the updated state with the specified task removed
      return {
        ...state,
        todoTasks: updatedDeleteTask,
      };

    // Action to toggle the completion status of a task
    case "TOGGLE_TASK":
      // Map through the tasks and toggle the completion status of the task with the specified ID
      const updatedToggleTask = state.todoTasks.map((task) => {
        if (task.id === action.payload) {
          return {
            ...task,
            completed: !task.completed,
          };
        }
        return task;
      });
      // Save the updated tasks to local storage
      localStorage.setItem("tasks", JSON.stringify(updatedToggleTask));
      // Return the updated state with the completion status toggled
      return {
        ...state,
        todoTasks: updatedToggleTask,
      };

    // Action to change the theme
    case "CHANGE_THEME":
      // Save the new theme to local storage
      localStorage.setItem("theme", action.payload);
      // Return the updated state with the new theme applied
      return {
        ...state,
        theme: action.payload,
      };

    // Default case: return the current state if the action type is not recognized
    default:
      return state;
  }
};

// Export the task reducer function
export default taskReducer;
