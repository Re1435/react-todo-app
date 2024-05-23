# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm install @mui/icons-material @mui/material @emotion/styled @emotion/react`

above command help you to add Material UI icons to the project

NOTE: Please note that react and react-dom are peer dependencies, you should ensure they are installed before installing Material UI.

### `npm react-redux`

installs the react-redux dependencies

It will help you to maintain & manage the data across the application

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### How to Use the Application

Upon launching the application, you will see a todo list interface.

We can add tasks using the input field provided and pressing Enter or clicking the "Add Task" button.

Tasks will be displayed in the list format below the input field.

We can mark tasks as completed by clicking the checkbox next to each task. Completed tasks will have a line-through style applied.

To delete a task, click the "Delete" button next to the task.

### Code Structure

Components: The TaskInput and TaskList components handle the input form and display of tasks, respectively.

Actions and Reducers: The taskActions and taskReducer handle the state management for tasks. Additionally, the themeReducer manages the state for the theme (light/dark mode).

Store: The Redux store is configured in store.js.

App.js: This is the main component that renders the application layout and manages the theme.

App.css: Contains the styling for the application, including light and dark mode styles.
