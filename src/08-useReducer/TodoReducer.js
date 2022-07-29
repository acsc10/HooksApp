
export const TodoReducer = (inicialState , action) => {
    switch (action.type) {
        case 'Add Todo':
            return [ ...inicialState , action.payload]
            //throw new Error('action.type = ABC no esta implementado')
        case 'Delete Todo':
            return inicialState.filter( todo => todo.id !== action.payload);

        case 'Toggle Todo':
            return inicialState.map( todo => {
                if( todo.id === action.payload){
                    return {
                        ...todo,
                        done : !todo.done
                    }
                }
                return todo;
            })
        default:
            return inicialState
    }
  
}
