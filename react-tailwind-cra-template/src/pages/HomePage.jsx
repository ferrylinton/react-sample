import AddForm from '../components/AddForm'
import TodoList from '../components/TodoList'

export default function HomePage() {


    return (
        <div className='w-full flex flex-col items-center justify-center '>
            <TodoList />
            <AddForm />
        </div>
    )
}
