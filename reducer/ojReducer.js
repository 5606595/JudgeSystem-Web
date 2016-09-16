/**
 * Created by jorten on 16/9/11.
 */


function produPages(pageCount, curPage) {
    let pages = [];
    if(pageCount < 5) {
        for(let i = 1; i <= pageCount; i++) {
            pages.push(i);
        }
    } else {
        if(curPage > 2 && curPage < pageCount - 1) {
            for(let i = 0; i < 5; i++) {
                pages.push(curPage - 2 + i);
            }
        } else if(curPage <= 2) {
            for(let i = 0; i < 5; i++) {
                pages.push(i + 1);
            }
        } else {
            for(let i = 0; i < 5; i++) {
                pages.unshift(pageCount - i);
            }
        }
    }
    return pages;
}


export default function (state={
    proInfoList: [],
    detail: new Map(),
    curPage: 1,
    pageCount: 1,
    pages: [1],
    login: {
        isLogin: 0,
        username: ""
    },
    statInfoList: [],
    cstInfoList: []
    // success: false
}, action) {
    switch (action.type) {
        case 'PROBLEMSRECEIVE':
            return Object.assign({}, state, {
                pageCount: action.data.pagecount,
                proInfoList: action.data.proinfolist
            })
        case 'CONTESTSRECEIVE':
            return Object.assign({}, state, {
                pageCount: action.data.pagecount,
                cstInfoList: action.data.cstinfolist
            })
        case 'STATUSRECEIVE':
            return Object.assign({}, state, {
                pageCount: action.data.pagecount,
                statInfoList: action.data.statinfolist
            })
        case "CLICKPAGE":
            var pages = [];
            let pageCount = state.pageCount;
            pages = produPages(pageCount, action.data);
            return Object.assign({}, state, {
                pages: pages,
                curPage: action.data
            });
        case "NEXTPAGE":
            var pages = [];
            pages = produPages(state.pageCount, action.data);
            return Object.assign({}, state, {
                pages: pages,
                curPage: action.data
            });
        case "PREPAGE":
            var pages = produPages(state.pageCount, action.data);
            return Object.assign({}, state, {
                pages: pages,
                curPage: action.data
            });
        case "CONFIRMPAGE":
            var pages = produPages(state.pageCount, action.data);
            return Object.assign({}, state, {
                pages: pages,
                curPage: action.data
            });
        case 'DETAIL':
            state.detail.set(action.key, action.detail)
            return Object.assign({}, state)
        case 'STATUS':
            return Object.assign({}, state, {
                login: {
                    isLogin: 1,
                    username: action.data.info
                }
            })
        case 'LOGINFAIL':
            return Object.assign({}, state, {
                login: {
                    isLogin: 2
                }
            })
        case 'LOGOUT':
            return Object.assign({}, state, {
                login: {
                    isLogin: 0,
                    username: ""
                }
            })
        // case 'EMPTY':
        //     return Object.assign({}, state, {
        //         detail: {}
        //     })
        // case 'SUCCESS':
        //     return Object.assign({}, state, {
        //         success: true
        //     })
        default:
            return state;
    }
}