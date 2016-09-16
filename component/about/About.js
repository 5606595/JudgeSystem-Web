/**
 * Created by jorten on 16/9/12.
 */
import React from 'react'
import { Link } from 'react-router'

export default class About extends React.Component {
    constructor(prop) {
        super(prop)
    }
    render() {
        return (
            <div className="jumbotron page-block">
                <div className="about-block">
                    <h1>About us</h1>
                    <p>This system consists of React, Bootswatch and Golang</p>
                    <p>
                        <Link to="/" className="btn btn-primary btn-lg">Learn more</Link>
                    </p>
                </div>
            </div>
        )
    }
}