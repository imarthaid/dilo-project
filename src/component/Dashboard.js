import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import BookList from './BookList';
import UserList from './UserList';  

export class Dashboard extends Component {
    render() {
        return (
            <React.Fragment>
                <Switch>
                    <Route path="/dashboard/booklist" component={BookList}></Route>
                    <Route path="/dashboard/userlist" component={UserList}></Route>
                </Switch>
            </React.Fragment>
        )
    }
}

export default Dashboard
