import React from 'react'
import {InputName} from '../inputname'

class InputTaskForm extends React.Component {
    render () {
        return (
            <div class='inputTaskForm'>
                <div class="inputTask">
                    <InputName className='far fa-calendar-alt' inputName='Deadline'/>
                    <div class='inputForm'>
                        <input name='date' type="date" class='inputStyle inputDate' value={this.props.stateData.date} onChange={this.props.changeState}/>
                        <input name='time' type="time" class='inputStyle inputDate' value={this.props.stateData.time} onChange={this.props.changeState}/>
                    </div>
                    <InputName className='far fa-file' inputName='File'/>
                    <div class='inputForm'>
                        <input name='file' type="file" class='inputStyle' ref={this.props.filebox} onChange={this.props.changeState}/><br/>
                        <span class='inputStyle'>{this.props.stateData.file}</span>
                    </div>
                    <InputName className='far fa-comment-dots' inputName='Comment'/>
                    <div class='inputForm'>
                        <textarea name='comment' cols="55" rows="7" class='inputStyle' value={this.props.stateData.comment} onChange={this.props.changeState}>
                        </textarea>
                    </div>
                </div>
                <div>
                    <button class='button cancelButton' onClick={this.props.closeAdd}>X Cancel</button>
                    <button class='button addButton' onClick={this.props.submitTodo}>+ Save</button>
                </div>
            </div>
        );
    }
}

export {InputTaskForm}
