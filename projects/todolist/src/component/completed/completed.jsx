import React from 'react'
import {TodoList} from '../todolist'

class Completed extends React.Component {
    render () {
        return (
            <div class='inputTaskForm'>
                <TodoList page='completed' />
            </div>
        );
    }
}

export {Completed}