import React from 'react'
import { Link } from 'react-router'
import Login from '../login/Login'
import Alert from '../alert/Alert'
import { connect } from 'react-redux'

var Header = React.createClass({
    render() {
        var alert = [];
        for(var i = 0; i < this.props.num; i++) {
            alert.push(
                (<Alert kind={ this.props.kind } message={ this.props.info } key={i} />)
            )
        }
        return (
        <div className='header' key="head">
            <div>
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <Link className="navbar-brand" to="/">UNProject - Doing</Link>
                        </div>
                        <Login />
                    </div>
                </nav>
                <div>
                    <div className="btn-toolbar first-block">
                        <div className="btn-group btn-group-justified">
                            <Link to="/" className="btn btn-default">HOME</Link>
                            <Link to="/problems" className="btn btn-default">PROBLEMSET</Link>
                            <Link to="/contests" className="btn btn-default">
                                CONTESTS&nbsp;
                                <img src="/static/images/cup.png" />
                            </Link>
                            <Link to="/status" className="btn btn-default">STATUS</Link>
                            <Link to="/ratings" className="btn btn-default">RATING</Link>
                            <Link to="#" className="btn btn-default">HOMEWORK</Link>
                            <Link to="/about" className="btn btn-default">ABOUT</Link>
                        </div>
                    </div>
                </div>
            </div>
            { alert }
            {this.props.children}
        </div>
    )}
})

function tip(state) {
    return {
        info: state.reducers.info,
        num: state.reducers.num,
        kind: state.reducers.kind
    }
}

export default connect(tip)(Header)