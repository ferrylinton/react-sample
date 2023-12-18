import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { deleteTodo, getTodo } from '../services/todo-service';

export default function DetailPage() {

    const { id } = useParams();

    const navigate = useNavigate();

    const [todo, setTodo] = useState(null);

    useEffect(() => {

        async function fetchData() {
            try {
                const { data } = await getTodo(id);
                console.log(data);
                setTodo(data);
            } catch (error) {
                console.log(error);
            }
        }

        fetchData();
    })

    const onDeleteHandler = async () => {
        if (window.confirm('Delete data?')) {
            try {
                const { data } = await deleteTodo(id);
                console.log(data)
                navigate('/');
            } catch (error) {
                console.log(error);
            }

        }

    }

    return (
        <div className='flex flex-col items-center justify-center '>
            {todo && <>
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
                            <td>{todo.createdAt}</td>
                        </tr>
                        {todo.updatedAt && <tr>
                            <th>UpdatedAt</th>
                            <td>{todo.updatedAt}</td>
                        </tr>}
                    </tbody>
                </table>
                <div className='flex gap-1 mt-6'>
                    <Link to='/' className='min-w-[100px] py-3 btn btn-secondary'>Back</Link>
                    <Link to={`/edit/${todo._id}`} className='min-w-[100px] py-3 btn btn-secondary'>Edit</Link>
                    <button className='min-w-[100px] py-3 btn btn-danger' onClick={onDeleteHandler}>Delete</button>
                </div>
            </>}
        </div>
    )
}
