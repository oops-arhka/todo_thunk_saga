import { ADD_TODO, DEL_TODO, EDIT_TODO, SEND_REQUEST, SEND_REQUEST_ERROR, SEND_REQUEST_SUCCESS } from './actionTypes'

let nextTodoId = 0
export const addTodoAC = content => ({
    type: ADD_TODO,
    payload: {
        id: ++nextTodoId,
        content,
    }
})

export const delTodoAC = (id) => ({
    id: id,
    type: DEL_TODO,
})

export const editTodoAC = (content, id) => ({
    type: EDIT_TODO,
    id: id,
    content
})

const sendReqAC = () => {
    return { type: SEND_REQUEST, }
}

const sendReqSucessAC = (data) => {
    return { type: SEND_REQUEST_SUCCESS, message: data }
}

const sendReqErrorAC = (err) => {
    return { type: SEND_REQUEST_ERROR, message: err }
}

export const fetchRequest = () => {
    return (dispatch) => {
        dispatch(sendReqAC())
        fetch('/fetch')
            .then(res => (res.text()))
            .then(
                data => console.log(data),
                err => dispatch(sendReqErrorAC(err)),
            )
        // let res = await fetch('/fetch');
        // let data = await res.text();
        // console.log(data);
        // if(data){
        //     dispatch(sendReqSucessAC(data));
        // }


    }
}

