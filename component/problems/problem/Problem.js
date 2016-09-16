/**
 * Created by jorten on 16/9/12.
 */
import React from 'react'
import { Link } from 'react-router'
import { problem } from '../../../action/detailAction'
import { connect } from 'react-redux'

function isEmptyObject(obj) {
    for(var i in obj) {
        return false;
    }
    return true;
}

class Problem extends React.Component {
    constructor(props) {
        super(props)
    }
    componentWillMount() {
        this.props.dispatch(problem(this.props.params.pid, this.props.location.pathname));
    }
    render() {
        if(!isEmptyObject(this.props.info)) {
            let info = this.props.info;
            let pid = "/submit/" + info.pid;
            return (
                <div>
                    <div className="page-block">
                        <div className="block-title">
                            <h3>{ info.title }</h3>
                            <h6>Time limit: { info.time }s</h6>
                            <h6>Memory limit: { info.memory }KB</h6>
                        </div>
                        <div className="block-content">
                            <h4>Description</h4>
                            <div className="well">
                                { info.description }
                            </div>
                            <h4>Input</h4>
                            <div className="well">
                                { info.input }
                            </div>
                            <h4>Output</h4>
                            <div className="well">
                                { info.output }
                            </div>
                            <h4>Sample Input</h4>
                            <div className="well">
                                { info.simpleinput }
                            </div>
                            <h4>Sample Output</h4>
                            <div className="well">
                                { info.simpleoutput }
                            </div>
                        </div>
                        <div>
                            <Link to={ pid } className="btn btn-info btn-submit">Submit</Link>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div></div>
            )
        }
    }
}

function display(state) {
    if(state.reducers.detail.get(state.routing.locationBeforeTransitions.pathname)) {
        return {
            info: state.reducers.detail.get(state.routing.locationBeforeTransitions.pathname)
        }
    } else {
        return {
            info: {}
        }
    }
}

export default connect(display)(Problem)