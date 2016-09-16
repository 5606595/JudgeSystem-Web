/**
 * Created by jorten on 16/9/13.
 */
import React from 'react'
import { connect } from 'react-redux'
import { signup } from '../../action/loginAction'


class Signup extends React.Component {
    constructor(props) {
        super(props)
    }
    signup() {
        var username = this.refs.form.getElementsByTagName("input")[0].value;
        var email = this.refs.form.getElementsByTagName("input")[1].value;
        var password = this.refs.form.getElementsByTagName("input")[2].value;
        var check = this.refs.form.getElementsByTagName("input")[3].checked ? '1' : '0';
        this.props.dispatch(signup(username, email, password, check));
    }
    render() {
        return (
            <div className="jumbotron page-block signup">
                <div className="about-block">
                    <h1>
                        UNProject Online Judge
                    </h1>
                    <p>
                        Our platform currently supports a total of languages: C
                    </p>
                    <p>
                        It will be updated soon
                    </p>
                    <div className="signupform" ref="form">
                        <input type="text" placeholder="Username" className="input"/>
                        <input type="text" placeholder="Email" className="input"/>
                        <input type="password" placeholder="Password" className="input"/>
                        <label>
                            <input type="checkbox" />
                            <span>
                                isChallenager
                            </span>
                        </label>
                        <button onClick={this.signup.bind(this)} style={{outline: "none"}}>
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect()(Signup)