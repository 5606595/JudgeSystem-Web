/**
 * Created by jorten on 16/9/11.
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


export function problems() {
    return function(dispatch) {
        fetch('/sproblems?page=1')
            .then(checkStatus)
            .then(parseJSON)
            .then((data) => {
                console.log('request succeeded with JSON response', data);
                dispatch(problemsReceive(data))
            }).catch((err) => {
            console.log('error failed', err);
        });
    }
}

export function contests() {
    return function(dispatch) {
        fetch('/scontests?page=1')
            .then(checkStatus)
            .then(parseJSON)
            .then((data) => {
                console.log('request succeeded with JSON response', data);
                dispatch(contestsReceive(data))
            }).catch((err) => {
            console.log('error failed', err);
        });
    }
}

export function clickPage(data) {
    return {
        type: "CLICKPAGE",
        data: data
    }
}

export function nextPage(data) {
    return {
        type: "NEXTPAGE",
        data: data
    }
}

export function prePage(data) {
    return {
        type: "PREPAGE",
        data: data
    }
}

export function confirmPage(data) {
    return {
        type: "CONFIRMPAGE",
        data: data
    }
}



export function page(page, kind) {
    return function(dispatch) {
        switch (kind) {
            case "problem":
                fetch('/sproblems?page=' + page)
                    .then(checkStatus)
                    .then(parseJSON)
                    .then((data) => {
                        console.log('request succeeded with JSON response', data);
                        dispatch(problemsReceive(data))
                    }).catch((err) => {
                    console.log('error failed', err);
                });
                return ;
            case "contest":
                fetch('/scontests?page=' + page)
                    .then(checkStatus)
                    .then(parseJSON)
                    .then((data) => {
                        console.log('request succeeded with JSON response', data);
                        dispatch(contestsReceive(data));
                    }).catch((err) => {
                    console.log('error failed', err);
                })
                return ;
            case "status":
                fetch('/sstatusinfo?page=' + page)
                    .then(checkStatus)
                    .then(parseJSON)
                    .then((data) => {
                        console.log('request succeeded with JSON response', data);
                        dispatch(statusReceive(data))
                    }).catch((err) => {
                    console.log('error failed', err);
                })
                return ;
            default:
                return ;
        }
    }
}

function problemsReceive(data) {
    return {
        type: 'PROBLEMSRECEIVE',
        data: data
    }
}

function statusReceive(data) {
    return {
        type: 'STATUSRECEIVE',
        data: data
    }
}

function contestsReceive(data) {
    return {
        type: 'CONTESTSRECEIVE',
        data: data
    }
}