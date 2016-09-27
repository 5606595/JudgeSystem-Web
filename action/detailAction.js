/**
 * Created by jorten on 16/9/12.
 */

import { browserHistory } from 'react-router'

function checkStatus(response) {
    if(response.status >= 200 && response.status < 300) {
        return response;
    } else {
        var error = new Error(response.statusText);
        error.response = response;
        throw error;
    }
}

function parseJSON(response) {
    return response.json();
}

export function problem(pid, key) {
    return function(dispatch) {
        fetch('/sprobleminfo?pid=' + pid)
            .then(checkStatus)
            .then(parseJSON)
            .then((data) => {
                console.log('request succeeded with JSON response', data);
                dispatch(detail(data, key));
            }).catch((err) => {
            console.log('error failed', err);
        })
    }
}

export function submit(pid, code, author, props) {
    return function(dispatch) {
        // fetch('/ssubmit', {
        //     method: 'POST',
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         pid: pid,
        //         code: code,
        //         lang: 'c'
        //     })
        // })
        //     .then(checkStatus)
        //     .then(parseJSON)
        //     .then((data) => {
        //         console.log('request succeeded with JSON response', data);
        //         // dispatch(success());
        //     }).catch((err) => {
        //     console.log('error failed', err);
        // })
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "/ssubmit", true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.onreadystatechange = function() {
            if(xhr.readyState == 4) {
                if((xhr.status >= 200 & xhr.status <= 300) || xhr.status == 304) {
                    var text = JSON.parse(xhr.responseText);
                    if(text.status == 200) {
                        dispatch(submitSuccess())
                        browserHistory.push('/status')
                    } else {
                        dispatch(submitFail())
                    }
                }
            }
        }
        xhr.send("pid=" + pid + "&code=" + code + "&lang=c&author=" + author);
    }
}

//
// export function empty() {
//     return {
//         type: 'EMPTY'
//     }
// }

export function requireLogin() {
    return {
        type: 'REQUIRELOGIN'
    }
}

function submitSuccess() {
    return {
        type: 'SUBMITSUCCESS'
    }
}

function submitFail() {
    return {
        type: 'SUBMITFAIL'
    }
}


function detail(data, key) {
    return {
        type: 'DETAIL',
        detail: data,
        key: key
    }
}

// function success() {
//     return {
//         type: 'SUCCESS'
//     }
// }
