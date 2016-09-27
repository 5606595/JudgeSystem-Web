/**
 * Created by jorten on 16/9/13.
 */
import React from 'react'
import { connect } from 'react-redux'
import { status } from '../../action/tabAction'

class Status extends React.Component {
    constructor(props) {
        super(props)
        props.dispatch(status());
    }
    render() {
        if(this.props.statinfolist) {
            let status = this.props.statinfolist.map((data, i) => {
                return (
                    <tr key={ +new Date() + i }>
                        <td>
                            i
                        </td>
                        <td>
                            { data.sbmtime }
                        </td>
                        <td>
                            { data.status }
                        </td>
                        <td>
                            { data.pid }
                        </td>
                        <td>
                            { data.time }
                        </td>
                        <td>
                            { data.memory }
                        </td>
                        <td>
                            { data.codelen }
                        </td>
                        <td>
                            { data.lang }
                        </td>
                        <td>
                            { data.author }
                        </td>
                    </tr>
                )
            })
            return (
                <table className="table table-striped table-hover second-block">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Submission Time</th>
                        <th>Judge Status</th>
                        <th>Pro.ID</th>
                        <th>Exe.Time</th>
                        <th>Exe.Memory</th>
                        <th>Code Len.</th>
                        <th>Language</th>
                        <th>Author</th>
                    </tr>
                    </thead>
                    <tbody>
                    { status }
                    </tbody>
                </table>
            )
        } else {
            return (
                <table className="table table-striped table-hover second-block">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Submission Time</th>
                        <th>Judge Status</th>
                        <th>Pro.ID</th>
                        <th>Exe.Time</th>
                        <th>Exe.Memory</th>
                        <th>Code Len.</th>
                        <th>Language</th>
                        <th>Author</th>
                    </tr>
                    </thead>
                </table>
            )
        }
    }
}

function display(state) {
    return  {
        statinfolist: state.reducers.statInfoList
    }
}

export default connect(display)(Status)