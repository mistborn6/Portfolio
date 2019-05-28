import {ADD_TODOLIST, EDIT_TODOLIST} from '../constant/todoaction-type.js'

const addTodolist = todolist => ({
    type: ADD_TODOLIST, payload: todolist,
})

const editTodolist = todolist => ({
    type: EDIT_TODOLIST, payload: todolist,
})

export {addTodolist, editTodolist}
