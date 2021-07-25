import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './core/Home'
const MainRouter = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Home}></Route>
            </Switch>
        </div>
    )
}

export default MainRouter
