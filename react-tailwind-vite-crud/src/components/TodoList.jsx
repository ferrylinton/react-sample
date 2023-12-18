import { useEffect, useState } from 'react'
import TodoItem from './TodoItem'
import { getTodoes } from '../services/todo-service';

export default function TodoList() {

    const [todoes, setTodoes] = useState([])

    useEffect(() => {

        async function fetchData() {
            try {
                const { data } = await getTodoes();
                setTodoes(data);
            } catch (error) {
                console.log(error);
            }
        }

        fetchData();
    })

    if (todoes && todoes.length > 0) {
        return (
            <div className='w-full flex flex-col items-center justify-center '>
                {
                    todoes.map((todo) => {
                        return <TodoItem key={todo._id} todo={todo} />
                    })
                }
            </div>
        )
    } else {
        return (
            <div className="w-full text-center border border-slate-400 p-3">
                Data is empty
            </div>
        )
    }
}
