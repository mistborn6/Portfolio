import React from 'react'
import {connect} from 'react-redux'
import {List} from '../list'

class ConnectTodoList extends React.Component {
    render () {
        this.props.data
            .sort((f, s) => { return f.important > s.important ? 1 : -1})
            .sort((f, s) => {return f.complete > s.complete ? 1 : -1})
        
        let todoCount = 0;
        let Lists = this.props.data.map((item) => {
            switch (this.props.page) {
                case 'progress':
                    if (item.complete) return null;
                    break;
                case 'completed':
                    if (!item.complete) return null;
                    break;
            }
            if (this.props.page) {
                todoCount++;
            } else if (!item.complete) {
                todoCount++;
            }
            return <List key={item.id} listData={item} />
        })

        return (
            <div>
                <div>
                    {Lists}
                </div>
                <div class='countText'>
                    <span>{todoCount} tasks {this.props.page === 'completed' ? 'completed' : 'left'}</span>
                </div>
            </div>
            
        )
    }
}

const mapStateToProps = state => {
    return {data: state};
}

const TodoList = connect(mapStateToProps)(ConnectTodoList)

export {TodoList}
