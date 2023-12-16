import React from 'react'
import TodoItem from './TodoItem'

export default function TodoList() {
    const todoes = [
        {
            _id: '1',
            task: 'task 1',
            done: false,
            createdAt: new Date(),
            updatedAt: null
        },
        {
            _id: '2',
            task: 'task 2',
            done: false,
            createdAt: new Date(),
            updatedAt: null
        },
        {
            _id: '3',
            task: 'task 3',
            done: true,
            createdAt: new Date(),
            updatedAt: new Date(),
        }
    ]

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
            <div className="w-full text-center border border-slate-300 p-2">
                Data is empty
            </div>
        )
    }
}
