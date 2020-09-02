
function ajax(url, success, error) {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            success(this);
        } else {
            error(this);
            throw new Error("Error");
        }
    };
    xhr.open('GET', url, true);
    xhr.send();
}

// ajax('data.json', function (result) {
//     console.log(JSON.parse(result.response))
// }, function (result) {
//     console.error(JSON.parse(result.response))
// });
fetch('data.json')
    .then(response => {
        if (response.ok) {
            return response.json()
        }
        throw new Error(response.statusText)
    })
    .then(response => {
        console.log(response);
    })