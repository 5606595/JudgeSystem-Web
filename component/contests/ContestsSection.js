/**
 * Created by jorten on 16/9/14.
 */
import React from 'react'
import Contests from './Contests'
import PageSel from '../page/PageSel'

class ContestsSection extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
               <Contests />
                <PageSel tab="contest" />
            </div>
        )
    }
}

export default ContestsSection