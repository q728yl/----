export function getSignedUser(actId, callback) {
    fetch('/api/getSignedUser', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "actId": actId,
        }),
    })
        .then(response => response.json())
        .then(data => {
            if (data.ok) {
                // 如果成功获取数据，将数据传递给回调函数
                console.log("ok")
                console.log(data)
                callback(data.data);
            } else {
                // 如果获取数据失败，将错误信息传递给回调函数
                console.log("wrong")
                alert(data.msg);
            }
        })
        .catch(error => {
            // 如果出现错误，将错误信息传递给回调函数
            callback(null, error);
        });
}