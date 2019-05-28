import React from 'react'
import {Provider} from 'react-redux'
import {HashRouter, Route} from 'react-router-dom'
import {TopBlock} from '../topblock'
import { MyTask } from '../mytask';
import {todoListStore} from '../../store'
import {InProgress} from '../inprogress'
import {Completed} from '../completed'


class Main extends React.Component {
    render() {
        return (
            <Provider store={todoListStore}>
                <HashRouter>
                    <div class='alignCenter'>
                        <TopBlock />
                        <Route exact path='/' component={MyTask} />
                        <Route exact path='/inProgress' component={InProgress} />
                        <Route exact path='/completed' component={Completed} />
                    </div>
                </HashRouter>
            </Provider>
        );
    }
}

window.store = todoListStore;


export {Main}
