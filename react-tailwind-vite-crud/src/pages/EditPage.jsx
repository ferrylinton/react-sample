import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getTodo, updateTodo } from '../services/todo-service';

export default function EditPage() {

    const { id } = useParams();

    const navigate = useNavigate();

    const [task, setTask] = useState('');

    const [done, setDone] = useState(false);

    const fetchDataById = async (id) => {
        try {
            const response = await getTodo(id);
            console.log(response);
            setTask(response.data.task);
            setDone(response.data.done);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchDataById(id);
    }, [id])


    const taskChangeHandler = (event) => {
        setTask(event.target.value);
    };

    const doneChangeHandler = (event) => {
        setDone(event.target.checked);
    };

    const submitActionHandler = async (event) => {
        try {
            event.preventDefault();
            const response = await updateTodo(id, { task, done });
            console.log(response)
            navigate(`/detail/${id}`);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className='flex flex-col items-center justify-center '>
            <form onSubmit={submitActionHandler} className='w-full flex flex-col gap-1 mt-3' autoComplete='off'>
                <div className='flex flex-col mb-3'>
                    <label htmlFor="task" className='text-sm font-semibold uppercase mb-[2px]'>Task</label>
                    <input type="text" name="task" id="task" value={task} onChange={taskChangeHandler} placeholder='task' autoComplete='false' className='border border-slate-500 p-2 outline-none' />
                </div>
                <label htmlFor="done">
                    <input type="checkbox" name="done" id="done" value={done} checked={done} onChange={doneChangeHandler} className="w-[25px] h-[25px] accent-green-500 float-left" />
                    <span className='ms-2 font-semibold'>Done</span>
                </label>
                <div className='flex gap-1 mt-4'>
                    <Link to={`/detail/${id}`} className='min-w-[100px] py-3 btn btn-secondary'>Back</Link>
                    <button className='min-w-[100px] py-3 btn btn-primary'>Save</button>
                </div>
            </form>

        </div>
    )
}
