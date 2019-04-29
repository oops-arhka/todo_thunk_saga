import { ADD_TODO, DEL_TODO, EDIT_TODO, SEND_REQUEST, SEND_REQUEST_ERROR, SEND_REQUEST_SUCCESS, ADD_TODO_SUCCESS } from './actions/actionTypes'

const initialState = {
    todos: [],
    test: [],
    loading: false,
    error: "",
    message: "",
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_TODO: {
            return Object.assign({}, state, { todos: [...state.todos, action.payload] }, {loading: true,} )
        }

        case ADD_TODO_SUCCESS: {
            return  {...state, loading: false, message: action.payload.content }                
        }    

        // case ADD_TODO: {
        //     return Object.assign({}, state, { todos: [...state.todos, action.payload] })
        // }

        // case DEL_TODO: {
        //     return Object.assign({}, state, { todos: [...state.todos.filter((el) => el.id != action.id)] })
        // }

        // case EDIT_TODO: {
        //     return Object.assign({}, state, { todos: [...state.todos.map((el) => action.id === el.id ? { ...el, content: action.content } : el)] })
        // }

        //////////////////////

        case SEND_REQUEST: {
            return {
                loading: true,
                error: "",
                message: "",
            };
        }

        case SEND_REQUEST_ERROR: {
            return {
                message: '',
                loading: false,
                error: true,
            };
        }

        case SEND_REQUEST_SUCCESS: {
            return {
                message: action.message,
                loading: false,
                error: "",
            };
        }


        default: {
            return state;
        }
    }
}