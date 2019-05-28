import React from 'react'
import {AddTask} from '../addtask'
import {TodoList} from '../todolist'

class MyTask extends React.Component {
    render () {
        return (
          <div class='inputTaskForm'>
              <AddTask />
              <TodoList />
          </div>  
        );
    }
}

export {MyTask}
