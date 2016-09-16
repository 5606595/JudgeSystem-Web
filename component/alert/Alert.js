/**
 * Created by jorten on 16/9/13.
 */
import React from 'react'

class Alert extends React.Component {
    constructor(props) {
        super(props);
        alert(this.props.content);
    }
    render() {
        return (
            <div></div>
        )
    }
}

export default Alert