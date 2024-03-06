// signupService.js

import {history} from "../utils/history";
import {message} from "antd";
import {postRequest} from "../utils/ajax";

export function postSignupData(requestData) {
    const url = `/api/signup`;
    const callback = (data) => {
        if (data.ok) {
            message.success(data.msg);
        } else {
            message.error(data.msg);
        }
    };
    postRequest(url, requestData, callback);

}
