import React from 'react'
import {connect} from 'react-redux'
import {InputTask} from '../inputtask'
import {editTodolist} from '../../action'

class ConnectList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            important: this.props.listData.important,
            complete: this.props.listData.complete,
            editTask: null,
        }
        this.changeState = this.changeState.bind(this)
        this.openEdit = this.openEdit.bind(this)
        this.closeEdit = this.closeEdit.bind(this)
        this.updateTodolist = this.updateTodolist.bind(this)
        this.list = React.createRef()
    }
    
    changeState(type) {
        switch (type) {
            case 'complete':
                this.setState({complete: window.event.target.checked}, this.updateTodolist);
                break;
            case 'important':
                this.state.important == '' ? this.setState({important: 'Y'}, this.updateTodolist) 
                : this.setState({important: ''}, this.updateTodolist);
                break;
        }
    }

    openEdit(event) {
        if (event.target.className.indexOf('fa-star') === -1 &&
            event.target.className.indexOf('taskChk') === -1 ) {
                this.list.current.style.display = 'none';
                this.setState({editTask: (<InputTask closeAdd={this.closeEdit} 
                                listData={this.props.listData} 
                                changeState={this.changeState.bind(this)} 
                                editTodolist={this.props.editTodolist} />)})
            }
    }

    closeEdit() {
        this.list.current.style.display = '';
        this.setState({editTask: null})
    }

    updateTodolist() {
        let updateList = Object.assign({}, this.props.listData);
        updateList = {...updateList, complete: this.state.complete, important: this.state.important}
        this.props.editTodolist(updateList)
    }

    render () {
        return (
          <div class='listBlock'>
                <div class={'list' + (this.state.important == 'Y' ? ' important' : '')} onClick={this.openEdit} ref={this.list} >
                    <input type="checkbox" class='taskChk' checked={this.state.complete} 
                            onChange={this.changeState.bind(this, 'complete')} />
                    <input type="text" class={'taskTitle' + (this.state.important == "Y" ? ' important' : '') 
                            + (this.state.complete ? ' complete' : '')} value={this.props.listData.name} />
                    <i class={this.state.important == 'Y' ? ' fas fa-star fa-lg iconImportant icon' : ' far fa-star fa-lg icon'}
                        onClick={this.changeState.bind(this, 'important')}> </i>
                    <i class="fas fa-pen fa-lg icon"></i>
                    <div class='listIcon'>
                        {this.props.listData.date != '' ? <i class="far fa-calendar-alt icon"></i> : ''}
                        {this.props.listData.date != '' ? ` ${this.props.listData.date.substring(5).replace('-', '/')}` : ''}
                        {this.props.listData.file != '' ? <i class="fas fa-file icon"></i> : ''}
                        {this.props.listData.comment != '' ? <i class="far fa-comment-dots icon"></i> : ''}
                    </div>
                </div>
                <div>
                    {this.state.editTask}
                </div>
          </div>  
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        editTodolist: todolist => (dispatch(editTodolist(todolist)))
    }
}

const List = connect(null, mapDispatchToProps)(ConnectList)

export {List}
