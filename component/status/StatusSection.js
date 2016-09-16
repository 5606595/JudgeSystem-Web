/**
 * Created by jorten on 16/9/14.
 */
import React from 'react'
import Status from './Status'
import PageSel from '../page/PageSel'

class StatusSection extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <Status />
                <PageSel tab="status" />
            </div>
        )
    }
}

export default StatusSection