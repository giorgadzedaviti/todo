import './App.css';
import React, {useState} from 'react';
import {GiHornedHelm} from 'react-icons/gi'
import {AiOutlinePlus, AiOutlineClose} from 'react-icons/ai'

function App() {

  const [tasks,setTask] = useState([])
  const [input, setInput] = useState('')

  const handleSubmit = (e) =>{
    e.preventDefault()
    const addTask = {
      id: Math.floor(Math.random() * 1000),
      text:input,
      completed:false
    }
    setTask([...tasks,addTask])
    setInput('')

  }

  //delete tasks
  const deleteTask =(id)=>{
    let filteredTasks = [...tasks].filter((tasks) =>tasks.id !== id)
    setTask(filteredTasks)
    console.log('task deleted')
  }

  // toggle completed task
  const toggleComplete = (id) =>{
    setTask(
      tasks.map(task => (
        task.id === id ? {...task,completed: !task.completed} : task
      ))
    )
  }

  const date = new Date()
  // console.log(date)
  const days = ['Sunday', 'Monday','Tuesday','Wednesday', 'Thursday', 'Friday','Satureday']
  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"]

  return(
    <div className='app'>
      <div className="container">
        <h1><GiHornedHelm/> ToDo For Discipline</h1>
        
        <div className='date'>
          <p>{days[date.getDay()]}</p>
          <p>{date.getDate()},</p>
          <p>{months[date.getMonth()]}</p>
          <p>{date.getFullYear()}</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className='form-input'>
          <AiOutlinePlus className='icon'/>
          <input
          value={input}
          onChange={e =>setInput(e.target.value)}
          placeholder='Enter a task' 
          type="text"></input>
          </div>
        </form>

        <div>
          {tasks.map(task => (
            <div  className={`task-row ${task.completed? 'completed' :''}`} key={task.id} onClick={() => toggleComplete(task.id)}>
              <p>{task.text}
               </p>
                  <AiOutlineClose onDoubleClick={()=> deleteTask(task.id)} className='icon'/>
            </div>
          ))}

      </div>
      <p className='length'>{(tasks < 1) ? 'You have no tasks' : `Tasks:${tasks.length}`}</p>
    </div>
    </div>
  )
}

export default App;
