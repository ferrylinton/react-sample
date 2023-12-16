import React, { useState } from 'react';

export default function AddForm() {

    const [task, setTask] = useState('');

    const taskChangeHandler = (event) => {
        setTask(event.target.value);
    };


    const submitActionHandler = (event) => {
        event.preventDefault();
        console.log(task)
    };

    return (
        <form onSubmit={submitActionHandler} className='w-full flex gap-1 mt-3' autoComplete='off'>
            <input type="text" name="task" value={task} onChange={taskChangeHandler} placeholder='task' autoComplete='false' className='h-[50px] grow ' />
            <button type='submit' className='w-[100px] h-[50px] flex-none btn btn-primary'>Add</button>
        </form>
    )
}
