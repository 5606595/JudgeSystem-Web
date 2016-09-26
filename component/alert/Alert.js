/**
 * Created by jorten on 16/9/13.
 */
import React from 'react'
import VelocityComponent from 'velocity-react/velocity-component'

class Alert extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: 0
        }
    }
    disappear() {
        this.setState({
            show: 0
        })
    }
    componentDidMount() {
        this.setState({
            show: 1
        })
        window.setTimeout(this.disappear.bind(this), 1000);
    }
    render() {
        var animationProps;
        if(this.state.show) {
            animationProps = {
                duration: 200,
                animation: {
                    opacity: 1,
                    translateY: "20px"
                }
            }
        } else {
            animationProps = {
                duration: 500,
                animation: {
                    opacity: 0,
                    translateY: "-20px"
                },
                complete: () => {
                    this.refs.alert.parentNode.removeChild(this.refs.alert)
                }
            }
        }
        var icon;
        if(this.props.kind === "error") {
            icon = (
                <i className="iconfont icon-error"></i>
            )
        } else if(this.props.kind === "success") {
            icon = (
                <i className="iconfont icon-success"></i>
            )
        } else {
            icon = (
                <i className="iconfont icon-danger"></i>
            )
        }
        var className = "alert " + this.props.kind;
        return (
            <VelocityComponent { ...animationProps } >
                <div className="alertContainer" ref="alert">
                    <div className={ className }>
                        <span>
                            { icon }
                            { this.props.message }
                        </span>
                    </div>
                </div>
            </VelocityComponent>
        )
    }
}

export default Alert