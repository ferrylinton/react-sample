import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { deleteTodo, getTodo } from '../services/todo-service';

export default function DetailPage() {

    const { id } = useParams();

    const navigate = useNavigate();

    const [todo, setTodo] = useState(null);

    const fetchDataById = async (id) => {
        try {
            const response = await getTodo(id);
            console.log(response);
            setTodo(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchDataById(id);
    }, [id])

    const onDeleteHandler = async () => {
        if (window.confirm('Delete data?')) {
            try {
                const response = await deleteTodo(id);
                console.log(response)
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
                                {todo.done && <span style={{ color: 'transparent', textShadow: 'rgb(0, 128, 0) 0px 0px 0px' }}>&#10004;</span>}
                                {!todo.done && <span style={{ color: 'transparent', textShadow: 'rgb(232 81 24) 0px 0px 0px' }}>&#10006;</span>}
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
