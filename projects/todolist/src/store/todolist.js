import {createStore} from 'redux'
import {todoListReducer} from '../reducer'

const todoListStore = createStore(todoListReducer)

export {todoListStore}
