// /**
//  * Created by jorten on 16/9/12.
//  */
// import React from 'react'
// import Problems from '../component/problems/Problems'
// import Header from '../component/Header/header'
// import { Router, Route } from 'react-router'
// import { history } from './index'
// import Contests from '../component/contests/Contests'
//
// const NoMatch = React.createClass({
//     render() {
//         return(
//             <h1>Not Found</h1>
//         )
//     }
// })
//
//
//
//
// export default class myRouter extends React.Component {
//     constructor(prop) {
//         super(prop)
//     }
//     render() {
//         return (
//             <Router history={history} key="router">
//                 <Route path="/" component={Header}>
//                     <Route path="/problems" component={Problems} />
//                     <Route path="/contests" component={Contests} />
//                     <Route path="*" component={NoMatch} />
//                 </Route>
//             </Router>
//         )
//     }
// }