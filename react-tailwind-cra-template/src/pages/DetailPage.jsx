import React from 'react';
import { Link, useParams } from 'react-router-dom';

export default function DetailPage() {

    const { id } = useParams();

    const todo = {
        _id: id,
        task: 'task 2',
        done: true,
        createdAt: new Date(),
        updatedAt: null
    }

    const onDeleteHandler = () => {
        if (window.confirm('Delete data?')){
            console.log('delete...');
        }
        
    }

    return (
        <div className='flex flex-col items-center justify-center '>
            <table className='table-detail'>
                <tbody>
                    <tr>
                        <th>ID</th>
                        <td>{todo._id}</td>
                    </tr>
                    <tr>
                        <th>Task</th>
                        <td>{todo.task}</td>
                    </tr>
                    <tr>
                        <th>Done</th>
                        <td>
                            <input type="checkbox" className="w-[25px] h-[25px] accent-green-500 float-left" readOnly checked={todo.done}></input>
                        </td>
                    </tr>
                    <tr>
                        <th>CreatedAt</th>
                        <td>{todo.createdAt.toISOString()}</td>
                    </tr>
                    {todo.updatedAt && <tr>
                        <th>UpdatedAt</th>
                        <td>{todo.updatedAt.toISOString()}</td>
                    </tr>}
                </tbody>
            </table>
            <div className='flex gap-1 mt-6'>
                <Link to='/' className='min-w-[100px] py-3 btn btn-secondary'>Back</Link>
                <Link to={`/edit/${todo._id}`} className='min-w-[100px] py-3 btn btn-secondary'>Edit</Link>
                <button className='min-w-[100px] py-3 btn btn-danger' onClick={onDeleteHandler}>Delete</button>
            </div>
        </div>
    )
}
