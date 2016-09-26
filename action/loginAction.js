/**
 * Created by jorten on 16/9/13.
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

export function login(username, password) {
    return function(dispatch) {
        fetch('/slogin?username=' + username + '&password=' + password, {
            credentials: 'same-origin'
        }).then(checkStatus)
            .then(parseJSON)
            .then((data) => {
                console.log('request succeeded with JSON response', data);
                if(data.status == 200) {
                    dispatch(status(data));
                    dispatch(loginSuccess());
                } else {
                    dispatch(loginFail(data.info));
                }
            }).catch((err) => {
            console.log('error failed', err);
        })
    }
}

export function signup(username, email, password, check) {
    return function(dispatch) {
        fetch('/sregister?username=' + username + "&email=" + email + "&password=" + password + "&ischallenger=" + check)
            .then(checkStatus)
            .then(parseJSON)
            .then((data) => {
                console.log('request succeeded with JSON response', data);
                if(data.status == 200) {
                    dispatch(status(data));
                } else {
                    dispatch(signupFail(data.info));
                }
            }).catch((err) => {
            console.log('error failed', err);
        })
    }
}

export function logout() {
    return function(dispatch) {
        fetch('/slogout', {
            credentials: 'same-origin',
            headers: {
                "Cookie": document.cookie
            }
        })
            .then(checkStatus)
            .then(parseJSON)
            .then((data) => {
                console.log('request succeeded with JSON response', data);
                dispatch(out());
            }).catch((err) => {
            console.log('error failed', err);
        })
    }
}

export function isLogin() {
    return function(dispatch) {
        fetch('/sislogin', {
            credentials: 'same-origin',
            headers: {
                "Cookie": document.cookie
            }
        })
            .then(checkStatus)
            .then(parseJSON)
            .then((data) => {
                console.log('request succeeded with JSON response', data);
                if(data.status == 200) {
                    dispatch(status(data))
                }
            }).catch((err) => {
            console.log('error failed', err);
        })
    }
}

function out() {
    return {
        type: 'LOGOUT'
    }
}

function signupFail(data) {
    return {
        type: 'SIGNUPFAIL',
        info: data
    }
}

function loginFail(data) {
    return {
        type: "LOGINFAIL",
        info: data
    }
}

function loginSuccess() {
    return {
        type: "LOGINSUCCESS",
    }
}

function status(data) {
    return {
        type: "STATUS",
        data: data
    }
}
