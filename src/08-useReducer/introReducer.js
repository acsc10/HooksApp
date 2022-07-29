const inicialState = [{
    id: 1,
    todo: 'Recolectar piedras del infinito',
    done: false
}];



const todoReducer = (state = inicialState , action = {}) => {
  
    if(action.type === "[TODO], add todo"){
        return [...inicialState , action.payload]
    }
    return state;
}


let todos = todoReducer();

const newTodo = {
    id: 2,
    todo: 'Recolectar piedras del poder',
    done: false
}

const addTodoAccion = {
    type: '[TODO], add todo',
    payload:newTodo
}

todos = todoReducer( todos , addTodoAccion );
console.log(todos)