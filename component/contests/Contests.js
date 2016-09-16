/**
 * Created by jorten on 16/9/12.
 */
import React from 'react'
import { connect } from 'react-redux'
import { contests } from '../../action/tabAction'
import { Link } from 'react-router'

class Contests extends React.Component {
    constructor(prop) {
        super(prop);
    }
    componentWillMount() {
        this.props.dispatch(contests());
    }
    render() {
        if(this.props.contests) {
            let contests = this.props.contests.map((data, i) => {
                var link = "/contest/" + data.cid;
                return (
                    <tr key={ +new Date() + i }>
                        <td> {data.cid} </td>
                        <td> <Link to={ link }>{ data.contestname } </Link></td>
                        <td> { data.starttime } </td>
                        <td> { data.endtime } </td>
                    </tr>
                )
            })
            return (
                <table className="table table-striped table-hover second-block" key="table">
                    <thead>
                    <tr key="title">
                        <th>#</th>
                        <th>Contest Name</th>
                        <th>Start</th>
                        <th>End</th>
                    </tr>
                    </thead>
                    <tbody>
                    {contests}
                    </tbody>
                </table>
            )
        } else {
            return (
                <table className="table table-striped table-hover second-block" key="table">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Contest Name</th>
                        <th>Start</th>
                        <th>End</th>
                    </tr>
                    </thead>
                </table>
            )
        }
    }
}

function display(state) {
    return  {
        contests: state.reducers.cstInfoList
    }
}

export default connect(display)(Contests);

