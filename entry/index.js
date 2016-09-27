import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import tabReducer from '../reducer/ojReducer'

//Component
import Header from '../component/Header/header'
import Signup from '../component/signup/Signup'
import About from '../component/about/About'
import Problem from '../component/problems/problem/Problem'
import Codemirror from '../component/codemirror/Codemirror'
import StatusSection from '../component/status/StatusSection'
import ProblemSection from '../component/problems/ProblemSection'
import ContestsSection from '../component/contests/ContestsSection'


let loggerMiddleware = createLogger();

const createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
)(createStore);


var NoMatch = React.createClass({
    render() {
     return(
         <h1>Not Found</h1>
     )
    }
})



const store = createStoreWithMiddleware(
    combineReducers({
        reducers: tabReducer,
        routing: routerReducer
    })
);


const history = syncHistoryWithStore(browserHistory, store)


render((
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={Header}>
                <Route path="/problems" component={ProblemSection} />
                <Route path="/problem/:pid" component={Problem} />
                <Route path="/submit/:pid" component={Codemirror} />
                <Route path="/contests" component={ContestsSection} />
                <Route path="/status" component={StatusSection} />
                <Route path="/about" component={About} />
                <Route path="/signup" component={Signup} />
                <Route path="*" component={NoMatch}/>
            </Route>
        </Router>
    </Provider>
), document.getElementById("container"))
