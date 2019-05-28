import React from 'react'
import {TodoList} from '../todolist'

class InProgress extends React.Component {
    render () {
        return (
            <div class='inputTaskForm'>
                <TodoList page='progress' />
            </div>
        );
    }
}

export {InProgress}