import React from 'react'
import { connect } from 'react-redux'
import { page, clickPage, nextPage, prePage, confirmPage } from '../../action/tabAction'

let Page = React.createClass({
    overHandle() {
        let node = this.refs.first;
        node.className = "first";
    },
    leaveHandle() {
        let node = this.refs.first;
        node.className = "";
    },
    clickHandle(index, event) {
        event.preventDefault();
        this.props.dispatch(clickPage(index));
        this.props.dispatch(page(index), this.props.tab);
    },
    prevHandle(event) {
        event.preventDefault();
        this.props.dispatch(prePage(this.props.curPage - 1));
        this.props.dispatch(page(this.props.curPage - 1, this.props.tab));
    },
    nextHandle(event) {
        event.preventDefault();
        this.props.dispatch(nextPage(this.props.curPage + 1))
        this.props.dispatch(page(this.props.curPage + 1, this.props.tab));
    },
    disableHandle(event) {
        event.preventDefault();
    },
    confirmHandle() {
        let input = this.refs.input;
        let value = input.value;
        let curPage = this.props.curPage;
        let pageCount = this.props.pageCount;
        if(value != parseInt(value)) {
            input.value = curPage;
            return;
        }
        if(value < 0 || value > pageCount) {
            input.value = curPage;
            return;
        }
        this.props.dispatch(confirmPage(value));
        this.props.dispatch(page(value, this.props.tab));
        if(value < pageCount) {
            input.value++;
        }
    },
    keyHandle(event) {
        if(event.keyCode === 13) {
            this.confirmHandle();
        }
    },
    render() {
        console.log(this.props.curPage);
        let prev = <li className="last-page" onClick={this.prevHandle}><a href=""><i className="iconfont icon-last"></i>上一页</a></li>
        let next = <li className="next-page"><a href="" onClick={this.nextHandle}><i className="iconfont icon-next"></i>下一页</a></li>
        let disabled = <li className="last-page disabled" onClick={this.disableHandle}><a href=""><i className="iconfont icon-last"></i>上一页</a></li>
        let pageCount = this.props.pageCount;
        return(
            <div className="pageSel">
                <ul>
                    {this.props.curPage === 1 ? disabled : prev}
                    {this.props.curPage === 1 ? <li className="active"><span>1</span></li> : <li ref="first" onMouseOver={this.overHandle} onMouseLeave={this.leaveHandle} onClick={this.clickHandle.bind(this, 1)}><a href="">1</a></li>}
                    {this.props.pages[0] > 2 && this.props.pageCount > 5 ? <li className="not"><span>...</span></li> : ''}
                    {
                        this.props.pages.map((data) => {
                            if(data === 1) {
                                return;
                            }
                            if(data === this.props.curPage) {
                                return <li className="active"><span>{data}</span></li>
                            } else {
                                return <li onClick={this.clickHandle.bind(this, data)}><a href="">{data}</a></li>
                            }
                        })
                    }
                    {this.props.pageCount > this.props.pages[this.props.pages.length - 1] ? <li className="not"><span>...</span></li> : ''}
                    {this.props.pageCount > this.props.curPage ? next : ''}
                    <span className="explain">共<span className="num">{pageCount}</span>页, 到第</span><input ref="input" onKeyDown={this.keyHandle} type="text"/><span className="explain">页</span><button className="confirm" onClick={this.confirmHandle}>确定</button>
                </ul>
            </div>
        )
    }
})

function filter(state) {
    return {
        pageCount: state.reducers.pageCount,
        pages: state.reducers.pages,
        curPage: state.reducers.curPage
    }
}

Page = connect(filter)(Page);

export default Page;