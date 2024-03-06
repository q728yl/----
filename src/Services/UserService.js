import { postRequest} from "../utils/ajax";
import { history } from "../utils/history";
import { message } from "antd";
import axios from "axios";

/**
 * avatar :
 * club:
 * college:
 * mail:
 * gender:
 * nickname :
 * phone:
 * stu_id:
 * userId:
 * userType:
 * username:
 * */
export const login = (data) => {
    const url = `/api/login`;
    const callback = (data) => {
        if (data.status >= 0) {
            localStorage.setItem("user", JSON.stringify(data.data));
            history.push("/");
            window.location.reload();
            // navigate("/Homepage");
            // console.log(useHistory())
            message.success(data.msg);
        } else {
            message.error(data.msg);
        }
    };
    postRequest(url, data, callback);
};

export const getUser = () => {
    const user = localStorage.getItem("user");
    if (user) {
        return JSON.parse(user);
    } else {
        return null;
    }
};

export const createUser = (data) => {
    const url = `/api/newUser`;
    const callback = (data) => {
        if (data.status >= 0) {
            message.success(data.msg);
        } else {
            message.error(data.msg);
        }
    };
    postRequest(url, data, callback);
};

export const checkNewName = (data) => {
    const body = {
        username: data,
    };
    const url = `/api/checkUsername`;
    const callback = (data) => {
        return data.status >= 0;
    };
    return postRequest(url, body, callback);
};

export const  getUserById = async (userId) => {
    let user = null;
    try {
        const response = await fetch(`/api/user?userId=${userId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        });
        user = await response.json();
    } catch (error) {
        console.error("Error fetching user:", error);
    }
    return user;
};

export const jaccountProfile = (code, callback) => {
    const url = '/api/jaccountProfile';

    const data = new URLSearchParams();
    data.append('grant_type', 'authorization_code');
    data.append('redirect_uri', 'http://localhost:3000');
    data.append('client_id', 'ov3SLrO4HyZSELxcHiqS');
    data.append('client_secret', 'B9919DDA3BD9FBF7ADB9F84F67920D8CB6528620B9586D1C');
    data.append('code', code);

    const config = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    };

    axios.post(url, data.toString(), config)
        .then(response => {
            const responseData = response.data;
            console.log("userService")
            localStorage.setItem("accessdata", JSON.stringify(responseData));
            console.log("responseData");
            console.log(responseData);
            callback(responseData);
        })
        .catch(error => {
            console.error(error);
            // handle error
        });
};

export const  sendToken = async (token) => {
    const body = {
        AccessToken: token,
    };
    const url = `/api/profile`;
    const callback = (data) => {
        if (data.status >= 0) {
            localStorage.setItem("user", JSON.stringify(data.data));
            console.log(data.data);
            message.success(data.msg);
            window.location.reload();
        } else {
            message.error(data.msg);
        }
    };
    return postRequest(url, body, callback);
};