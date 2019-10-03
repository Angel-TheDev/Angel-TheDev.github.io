function postRequest(location, requestBody, callback) {
    fetch(location, {
        method: 'POST',
        body: JSON.stringify(requestBody),
        headers: {
            'Content-Type': 'application/json'
        },
    })
    .then(res => res.json())
    .then(jsonData => callback(jsonData))
    .catch(err => console.log(err))
    }

    export default {
        postRequest
    };