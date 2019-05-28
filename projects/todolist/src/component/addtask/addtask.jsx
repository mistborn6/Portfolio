import React from 'react'
import {InputTask} from '../inputtask'

class AddTask extends React.Component {
    openAdd() {
        document.getElementById('addTask').style.display = 'none';
        document.getElementById('inputTask').style.display = 'initial';
    }
    closeAdd() {
        document.getElementById('addTask').style.display = 'initial';
        document.getElementById('inputTask').style.display = 'none';
    }
    render () {
        return (
          <div>
              <div>
                  <input id='addTask' value=' ✚ Add Task' onClick={this.openAdd}/>
              </div>
              <div id='inputTask' style={{display: 'none'}}>
                  <InputTask closeAdd={this.closeAdd}/>
              </div>
          </div>  
        );
    }
}

export {AddTask}
