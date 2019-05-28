import React from 'react'
import {connect} from 'react-redux'
import {InputTaskForm} from '../inputtaskform'
import {addTodolist} from '../../action'

class ConnectInputTask extends React.Component {
    constructor(props) {
        super(props)
        if (this.props.listData) {
            this.state = this.props.listData;
        } else {
            this.state = {
                id: '', name: '', date: '', time: '', file: '', comment: '', important: '', complete: false
            }
        }
        this.filebox = React.createRef()
        this.changeState = this.changeState.bind(this)
        this.tagImportant = this.tagImportant.bind(this)
        this.submitTodo = this.submitTodo.bind(this)
        this.changeListState = type => {
            if (this.props.changeState) {
                this.props.changeState(type);
            } else {
                console.log('新增狀態所以沒有this.props.changeState');
            }
        }
    }

    changeState(event) {
        let value = event.target.value;
        if (event.target.name === 'file') {
            value = value.substring(value.lastIndexOf('\\') + 1);
        } else if (event.target.name === 'complete') {
            value = event.target.checked
            this.changeListState('complete')
        }
        this.setState({[event.target.name]: value})
    }

    tagImportant() {
        this.state.important === '' ? this.setState({important: 'Y'}) : this.setState({important: ''})
        this.changeListState('important')
    }

    submitTodo() {
        if (this.state.name == '') {
            alert ('代辦事項名稱未輸入');
        } else {
            if (this.state.id === '') {
                this.props.addTodolist(this.state)
                alert('成功新增')
            } else {
                this.props.editTodolist(this.state)
                alert('成功編輯')
            }
            this.setState({id: '', name: '', date: '', time: '', file: '', comment: '', important: '', complete: false})
            this.filebox.current.value = ''
            this.props.closeAdd()
        }
    }

    render () {
        return (
            <div>
                <div class={this.state.important == 'Y' ? 'important inputTaskTitle' : 'inputTaskTitle'}>
                <input name='complete' type="checkbox" class='taskChk' checked={this.state.complete} onChange={this.changeState}/>
                <input name='name' type="text" class={'taskTitle' + (this.state.complete ? ' complete' : '') + (this.state.important == 'Y' ? ' important' : '')} 
                        placeholder='Type Something Here...' value={this.state.name} onChange={this.changeState}/>

                <i class={(this.state.important == 'Y' ? "far fa-star fa-lg icon iconImportant" : 'far fa-star fa-lg icon')} 
                    onClick={this.tagImportant}></i>
                <i class="fas fa-pencil-alt fa-lg icon icon_edit"></i>
                </div>
                <InputTaskForm closeAdd={this.props.closeAdd} stateData={this.state} changeState={this.changeState} 
                                submitTodo={this.submitTodo} filebox={this.filebox} />
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {addTodolist: todolist => dispatch(addTodolist(todolist))}
}

const InputTask = connect(null, mapDispatchToProps)(ConnectInputTask)

export {InputTask}
