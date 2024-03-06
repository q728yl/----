import {message} from "antd";
import {postRequest} from "../utils/ajax";
export const submitMoment = (data,onPosted) => {
    const url = `/api/post`;
    const callback = (data) => {
        if (data.status >= 0) {
            message.success("发布成功！");
            onPosted();
        } else {
            message.error("发布失败！");
        }
    };
    postRequest(url, data, callback);
};

// export const submitPhoto = async (data) => {
//     const url = ` http://localhost:8003/uploadphoto`;
//     const callback = (data) => {
//         if (data.status >= 0) {
//             message.success(data.msg);
//             return data;
//         } else {
//             message.error(data.msg);
//             return null;
//         }
//     };
//     const result = await postRequest(url, data, callback);
//     return result;
//     // localStorage.setItem("user", JSON.stringify(data.data));
//     // history.push("/HomeView");
// }

/*
* @Brief: 获取发布在广场上的评论
* 用于交集广场
* */
export const getPostedMoment = async () => {
    let posters = null;
    try {
        const response = await fetch(`/api/poster`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        });
        posters = await response.json();
    } catch (error) {
        console.error("Error fetching posters:", error);
    }
    return posters;
}
export const getCurrentTime = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1; // 月份从0开始，需要加1
    const day = now.getDate();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // 拼接日期和时间
    const currentTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

    return currentTime;
};