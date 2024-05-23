import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTask, changeTheme } from '../globalStore/taskAction' // Import action creators for adding tasks and changing theme
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import '../styles/styles.css'

const TaskInput = () => {
  const [task, setTask] = useState('') // State for input task
  const dispatch = useDispatch() // Access dispatch function to dispatch actions
  const theme = useSelector((state) => state.theme) // Retrieve current theme from Redux store

  // function to handle the input change
  const handleChange = (e) => {
    setTask(e.target.value)
  }

  // function to handle the task
  const handleTask = () => {
    if (task.trim() === '') {
      alert('Please Enter the Valid Input') //alert the user if input is empty
    } else {
      dispatch(addTask(task)) //dispatch the action to add the task to redux store
      setTask('') //clear the input field after adding the task
    }
  }

  //function to toggle the theme
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    dispatch(changeTheme(newTheme)) //dispatch action to change theme
  }

  return (
    <div className="input-container">
      <input
        type="text"
        name="task"
        placeholder="Enter the Task"
        value={task}
        onChange={handleChange}
      />
      <div className="btn-container">
        <button className="btn" onClick={handleTask}>
          Add
        </button>
        {/* call handleTask function on btn click */}
        <button className="btn" onClick={toggleTheme}>
          {/* call toggleTheme function on btn click */}
          {theme === 'light' ? <LightModeIcon /> : <DarkModeIcon />}{' '}
          {/* display icon based on theme mode */}
        </button>
      </div>
    </div>
  )
}

export default TaskInput
