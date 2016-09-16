/**
 * Created by jorten on 16/9/12.
 */

import Code from 'react-codemirror'
import React from 'react'
import { connect } from 'react-redux'
import 'codemirror/mode/cmake/cmake'
import { submit } from '../../action/detailAction'

class Codemirror extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            code: "#Code: ",
            readOnly: false,
            mode: 'cmake',
            indentUnit: 4
        }
    }
    updateCode(newCode) {
        this.setState({
            code: newCode
        })
    }
    submit() {
        let pid = this.props.params.pid;
        console.log(this.state.code);
        console.log(pid);
        this.props.dispatch(submit(pid, this.state.code))
    }
    render() {
        let options = {
            lineNumbers: true,
            mode: this.state.mode,
            readOnly: this.state.readOnly,
            indentUnit: this.state.indentUnit
        }
        return (
            <div className="code">
                <Code value={ this.state.code } options={ options } onChange={this.updateCode.bind(this)} />
                <div className="form-group form-btn-submit" style={{marginTop: 10}}>
                    <button className="btn btn-default" onClick={this.submit.bind(this)} >Submit</button>
                </div>
            </div>
        )
    }
}

export default connect()(Codemirror);

// var Codemirror = React.createClass({
//     getInitialState: function() {
//         return {
//             code: "// Code"
//         };
//     },
//     updateCode: function(newCode) {
//         this.setState({
//             code: newCode
//         });
//     },
//     render: function() {
//         var options = {
//             lineNumbers: true
//         };
//         return <Code value="Code////" onChange={this.updateCode} options={options} />
//     }
// })

