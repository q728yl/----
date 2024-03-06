// export function getActivityDetails(callback) {
//     fetch('/api/activityDetails')
//         .then(response => response.json())
//         .then(data => {
//             if (data.ok) {
//                 // 如果成功获取数据，将数据传递给回调函数
//                 callback(data.data);
//             } else {
//                 // 如果获取数据失败，将错误信息传递给回调函数
//                 callback(null, data.msg);
//             }
//         })
//         .catch(error => {
//             // 如果出现错误，将错误信息传递给回调函数
//             callback(null, error);
//         });
// }
/*
* @Brief: 获取单个活动详情
* @Param: id 活动id
* */
export const getActivityByID = async (id) => {
    let activity = null;
    console.log("id",id);
    try {
        const response = await fetch(`/api/activity?id=${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        });
        activity = await response.json();
        console.log("get_activity", activity);
    } catch (error) {
        console.error("Error fetching activity:", error);
    }
    return activity;
}
export function changeStatus(id, status, comment, callback) {
    fetch('/api/changeStatus', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "id": id,
            "status": status,
            "comments": comment,
        }),
    })
        .then(response => response.json())
        .then(data => {
            if (data.ok) {
                // 如果成功获取数据，将数据传递给回调函数
                callback(data.data);
            } else {
                // 如果获取数据失败，将错误信息传递给回调函数
                callback(null, data.msg);
            }
        })
        .catch(error => {
            // 如果出现错误，将错误信息传递给回调函数
            callback(null, error);
        });
}
/*
* @Brief: 获取审核过的活动
* 用于用户主页
* */
export const getPassActivities = async () => {
    let activities = null;
    try {
        const response = await fetch(`/api/activities`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        });
        activities = await response.json();
    } catch (error) {
        console.error("Error fetching activity:", error);
    }
    return activities;
}

/*
* @Brief: 获取所有活动
* 用于审核主页
* */
export const getAllActivities = async () => {
    let activities = null;
    try {
        const response = await fetch(`/api/allactivities`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        });
        activities = await response.json();
    } catch (error) {
        console.error("Error fetching activity:", error);
    }
    return activities;
}

/*
* @Brief: 获取我报名的活动
* @Param: userId 用户id
* */
export const getMyActivities = async (userId) => {
    let activities = null;
    // console.log("userId",userId);
    try {
        const response = await fetch(`/api/my_activities?userId=${userId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        });
        activities = await response.json();
        // console.log("My activities", activities);
    } catch (error) {
        console.error("Error fetching activity:", error);
    }
    return activities;
}

export const searchActivities = async (keyword) => {
    let activity = null;
    console.log("keyword",keyword);
    try {
        const response = await fetch(`/api/search?keyword=${keyword}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        });
        activity = await response.json();
        console.log("search", activity);
    } catch (error) {
        console.error("Error search activity:", error);
    }
    return activity;
}

export const getMyReleaseActivities = async (userId) => {
    let activities = null;
    console.log("userId", userId);
    try {
        const response = await fetch(`/api/my_release_activities?userId=${userId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        });
        const data = await response.json(); // 解析响应数据
        if (response.ok) {
            activities = data.data; // 获取数据数组
            console.log("My activities", activities);
        } else {
            console.error("Error fetching activities:", data.msg);
        }
    } catch (error) {
        console.error("Error fetching activities:", error);
    }
    return activities;
};

/*
* @Brief: 获取推荐活动
* @Param: userId 用户id
* */
export const getRecommendActivities = async (userId) => {
    console.log("userId recommend",userId)
    let activities = null;
    try {
        const response = await fetch(`/api/recommend?userId=${userId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
        });
        activities = await response.json();
        console.log("recommend", activities);
    } catch (error) {
        console.error("Error fetching activity:", error);
    }
    return activities;
}
