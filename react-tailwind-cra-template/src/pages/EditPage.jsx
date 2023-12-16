import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function EditPage({ todo }) {

    const { id } = useParams();

    const [task, setTask] = useState('');

    const [done, setDone] = useState(false);

    useEffect(() => {
        const todo = {
            _id: id,
            task: 'task 2',
            done: true,
            createdAt: new Date(),
            updatedAt: null
        };

        setTask(todo.task);
        setDone(todo.done);
    }, [id])


    const taskChangeHandler = (event) => {
        setTask(event.target.value);
    };

    const doneChangeHandler = (event) => {
        setDone(event.target.checked);
        console.log(event.target.checked)
    };

    const submitActionHandler = (event) => {
        event.preventDefault();
        console.log(task)
    };


    return (
        <div className='flex flex-col items-center justify-center '>
            <form onSubmit={submitActionHandler} className='w-full flex flex-col gap-1 mt-3' autoComplete='off'>
                <div className='flex flex-col mb-3'>
                    <label htmlFor="task" className='text-sm uppercase'>Task</label>
                    <input type="text" name="task" value={task} onChange={taskChangeHandler} placeholder='task' autoComplete='false' className='border border-slate-500 p-2 outline-none' />
                </div>
                <label htmlFor="done">
                    <input type="checkbox" name="done" value={done} checked={done} onChange={doneChangeHandler} className="w-[25px] h-[25px] accent-green-500 float-left"/>
                    <span className='ms-2'>Done</span>
                </label>
                <div className='flex gap-1 mt-4'>
                    <Link to={`/detail/${id}`} className='min-w-[100px] py-3 btn btn-secondary'>Back</Link>
                    <button className='min-w-[100px] py-3 btn btn-primary'>Save</button>
                </div>
            </form>

        </div>
    )
}
