const Task = ({task, onDelete, onToggle}) =>{
    return (
        <div className={`task ${task.reminder ? 'reminder': ''}`} onDoubleClick={() => onToggle(task.id)}>

           <h3>
                {task.text} 
                <span className='close' onClick={() => onDelete(task.id)}>&#164;
                </span>
          </h3>
          <p>{task.day}</p>
          <p>Reminder</p>
        </div>
    )
}

export default Task
