import React from "react";
import {postSignupData} from "../Services/SignupService";
import "../css/SignUp.css";
import SignUpForm from "../Component/SignUpForm";
import {useParams} from "react-router-dom";


const SignUp = () => {
    const { ActivityId } = useParams();

    // function handleConfirmSignUp() {
    //     const requestData = {
    //         "userId": 2,
    //         "activityId":ActivityId,
    //         "club":"zuqiu",
    //         "college":"外国语学院"
    //     };
    //
    //     postSignupData(requestData)
    //         .then(data => {
    //             if (data.ok) {
    //                 // 处理报名成功的逻辑
    //                 console.log(data.msg);
    //                 console.log(data.data);
    //                 alert("报名表单已提交，报名成功！");
    //             } else {
    //                 // 处理报名失败的逻辑
    //                 console.error(data.msg);
    //                 alert(data.msg);
    //             }
    //         })
    //         .catch(error => {
    //             // 处理错误信息
    //             console.error(error);
    //         });
    // }

    return (


        <div className="ant-card-body" >
            <SignUpForm ActivityId={ActivityId} />

        </div>
    );
};

export default SignUp;
