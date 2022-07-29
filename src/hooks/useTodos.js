import { useReducer , useEffect} from "react"
import { TodoReducer } from "../08-useReducer/TodoReducer";

export const useTodos = () => {
    const inicialState = [];
    const init = () => {
        return JSON.parse(localStorage.getItem('todos') || [])
    }
    const [todos, dispatch] = useReducer(TodoReducer, inicialState , init) 
   
   
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
      }, [todos])

    const onNewTodo = (newTodo)=>{
        const action = {
            type:'Add Todo',
            payload: newTodo
        }

        dispatch(action)
    }

    const handleDeleteTodo = (id) =>{
        dispatch({
            type: 'Delete Todo',
            payload: id
        });
    }
    const handleToggleTodo = (id) =>{
        dispatch({
            type: 'Toggle Todo',
            payload: id
        });
    }

   
    
    return {
        todos,
        onNewTodo, 
        handleDeleteTodo,
        handleToggleTodo,
        todosCount: todos.length,
        todosPendientCount : todos.filter( todo => !todo.done).length,
    }
}
