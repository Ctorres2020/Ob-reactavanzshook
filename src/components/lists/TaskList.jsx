import React, {useState} from 'react';
import useList from '../../hooks/useList';


const TaskList = () => {
    const tasks = useList([])
    const [newTask, setNewTask] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        tasks.push(newTask)
        setNewTask('')
    }

    const handleInputChange = (e) => {
        setNewTask(e.target.value)
    }

    return (
        <div>
            <h1>Tasks List</h1>
            <form onSubmit={handleSubmit}>
                <input value={newTask} onChange={handleInputChange} placeholder='New Task' type='text' />
                <button type='submit'>Create Task</button>
            </form>
            <div>
                <button onClick={() => tasks.sords()}>Ordenar</button>
                <button onClick={() => tasks.invert()}>Invertir</button>
                <button onClick={() => tasks.clear()}>Vaciar</button>
            </div>
            {  
                tasks.isEmpty() ? 
                (<p>Task List is empty</p>) :
                (
                    <ul>
                        {tasks.value.map((task, index) => (
                            <li key={index}>
                                <input type="checkbox" onClick={() => tasks.remove(index)} defaultChecked={false} />
                                {task}
                            </li>
                        ))}
                    </ul>
                )
            }
        </div>
    );
}

export default TaskList;
