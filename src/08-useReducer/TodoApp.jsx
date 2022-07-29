
import { AddTodo } from "./AddTodo"
import { useTodos } from "../hooks/"
import { TodosList } from "./TodosList"

export const TodoApp = () => {
    

   const {todos , todosCount, todosPendientCount,  handleDeleteTodo, handleToggleTodo , onNewTodo} = useTodos();

   
  return (
    <>
        <h1>TodoApp : {todosCount}, <small>pendientes: {todosPendientCount}</small></h1>
        <hr/>
    <div className="row">
        <div className="col-7">
            <TodosList todos= {todos} handleDeleteTodo = {handleDeleteTodo} onToggleTodo ={handleToggleTodo}/> 
        </div>

        <div className="col-5">
            <h4>Agregar Tarea</h4>
            <hr />
            <AddTodo onNewTodo= {onNewTodo}/>
        </div>
    </div>

    </>
  )
}
