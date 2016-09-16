/**
 * Created by jorten on 16/9/11.
 */
import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { problems } from '../../action/tabAction'

class Problems extends React.Component {
    constructor(prop) {
        super(prop);
    }
    componentWillMount() {
        this.props.dispatch(problems())
    }
    render() {
        if(this.props.problems) {
            let problems = this.props.problems.map((data, i) => {
                var link = "/problem/" + data.pid;
                return (
                    <tr key={ +new Date() + i }>
                        <td> {data.pid} </td>
                        <td> <Link to={ link }>{ data.title } </Link></td>
                        <td> { data.solved } </td>
                    </tr>
                )
            })
            return (
                <div>
                    <table className="table table-striped table-hover second-block" key="table">
                        <thead>
                        <tr key="title">
                            <th>#</th>
                            <th>Problem Name</th>
                            <th>Solved</th>
                        </tr>
                        </thead>
                        <tbody>
                        {problems}
                        </tbody>
                    </table>
                </div>
            )
        } else {
            return (
                <table className="table table-striped table-hover second-block" key="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Problem Name</th>
                            <th>Solved</th>
                        </tr>
                    </thead>
                </table>
            )
        }
    }
}

function display(state) {
    return  {
        problems: state.reducers.proInfoList
    }
}

export default connect(display)(Problems);

