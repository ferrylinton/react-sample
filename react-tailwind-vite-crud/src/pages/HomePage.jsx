import { useEffect, useState } from 'react';
import AddForm from '../components/AddForm';
import TodoList from '../components/TodoList';
import { getTodoes } from '../services/todo-service';

export default function HomePage() {

    const [todoes, setTodoes] = useState([])

    const fetchTodoes = async () => {
        try {
            const response = await getTodoes();
            console.log(response);
            setTodoes(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {

        fetchTodoes();

    }, [])

    return (
        <div className='w-full flex flex-col items-center justify-center '>
            <TodoList todoes={todoes} />
            <AddForm fetchTodoes={fetchTodoes} />
        </div>
    )
}