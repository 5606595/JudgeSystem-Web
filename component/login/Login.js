/**
 * Created by jorten on 16/9/13.
 */
import React from 'react'
import { connect } from 'react-redux'
import   { Link } from 'react-router'
import { login, logout, isLogin } from '../../action/loginAction'
import Alert from '../alert/Alert'

class Login extends React.Component {
    constructor(props) {
        super(props)
        props.dispatch(isLogin());
    }
    signIn() {
        var email = this.refs.login.getElementsByTagName("input")[0].value;
        var password = this.refs.login.getElementsByTagName("input")[1].value;
        this.props.dispatch(login(email, password))
    }
    logOut() {
        this.props.dispatch(logout())
    }
    render() {
        let status;
        console.log('xuan')
        if(this.props.isLogin == 1) {
            status = (
                <div className="user">
                    <label>{ this.props.username }</label>
                    <Link to="/signup" className="btn btn-default user-btn">Sign Up</Link>
                    <button className="btn btn-default user-btn" onClick={ this.logOut.bind(this) }>Log Out</button>
                </div>
            )
        } else if(this.props.isLogin == 2) {
            status = (
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <div className="navbar-form navbar-left" ref="login">
                        Email:
                        <input type="text" className="form-control" />
                        Password:
                        <input type="password" className="form-control" />
                        <button className="btn btn-default signinbutton" onClick={ this.signIn.bind(this) }>Sign In</button>
                    </div>
                    <Link to="/signup" className="btn btn-default btn-signup">Sign Up</Link>
                    <Alert content="邮箱或密码错误,请重新输入" />
                </div>
            )
        } else {
            status = (
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <div className="navbar-form navbar-left" ref="login">
                        Email:
                        <input type="text" className="form-control" />
                        Password:
                        <input type="password" className="form-control" />
                        <button className="btn btn-default signinbutton" onClick={ this.signIn.bind(this) }>Sign In</button>
                    </div>
                    <Link to="/signup" className="btn btn-default btn-signup">Sign Up</Link>
                </div>
            )
        }
        return status
    }
}

function change(state) {
    return {
        isLogin: state.reducers.login.isLogin,
        username: state.reducers.login.username
    }
}


export default connect(change)(Login)