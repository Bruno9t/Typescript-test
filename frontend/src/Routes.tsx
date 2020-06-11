import React from 'react'
import {Switch, Route, BrowserRouter} from 'react-router-dom'

import Users from './components/Users'


let Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/users' component={Users} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes