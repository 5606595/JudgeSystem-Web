/**
 * Created by jorten on 16/9/13.
 */
import React from 'react'
import Problems from './Problems'
import PageSel from '../page/PageSel'

class ProblemSection extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="problemsection">
                <Problems />
                <PageSel tab="problem" />
            </div>
        )
    }
}

export default ProblemSection