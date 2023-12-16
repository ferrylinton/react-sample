import React from 'react';
import clsx from "clsx";
import { Link } from 'react-router-dom';

export default function TodoItem({ todo }) {
    return (
        <div className="w-full flex items-center justify-between border border-slate-400 p-2 mb-1">
            <div className={clsx('uppercase ps-2', { 'line-through': todo.done })}>{todo.task}</div>
            <Link to={`/detail/${todo._id}`} className='btn btn-secondary text-xs'>Detail</Link>
        </div>
    )
}
