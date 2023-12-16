import React, { useState } from 'react';
import { createTodo } from '../services/todo-service';

export default function AddForm() {

    const [task, setTask] = useState('');

    const taskChangeHandler = (event) => {
        setTask(event.target.value);
    };


    const submitActionHandler = async (event) => {
        event.preventDefault();
        try {
            const { data } = await createTodo(task);
            console.log(data);
            setTask('');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <form onSubmit={submitActionHandler} className='w-full flex gap-1 mt-3' autoComplete='off'>
            <input type="text" name="task" value={task} onChange={taskChangeHandler} placeholder='task' autoComplete='false' className='h-[50px] grow ' />
            <button type='submit' className='w-[100px] h-[50px] flex-none btn btn-primary'>Add</button>
        </form>
    )
}
