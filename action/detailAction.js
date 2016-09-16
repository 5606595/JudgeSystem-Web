/**
 * Created by jorten on 16/9/12.
 */

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

export function submit(pid, code) {
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
                    var text = xhr.responseText;
                    console.log(text);
                }
            }
        }
        xhr.send("pid=" + pid + "&code=" + code + "&lang=c");
    }
}

//
// export function empty() {
//     return {
//         type: 'EMPTY'
//     }
// }

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
