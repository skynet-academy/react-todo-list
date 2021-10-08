import './App.css'
import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] =  useState([
        {
            id:1,
            text: "First Task",
            reminder: true,
        }
    ])
  const toggleReminder = (id) =>{
      setTasks(
        tasks.map((task) =>
            task.id === id ? {...task, reminder: !task.reminder}: task
        )
      )
  }

  const addTask = (task) => {
      const id = Math.floor(Math.random() * 10000) + 1
      const newTask = {id, ...task}
      setTasks([...tasks, newTask])
  }

  const deleteTask = (id) =>{
      setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask} /> }
      { tasks.length > 0 ? 
          (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />)
        : ("There is no task to show")
      }
      
    </div>
  )
}

export default App
