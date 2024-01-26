import TodoItem from './TodoItem';

export default function TodoList({ todoes }) {

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