
import UserInfo from "./userInfo";

const MyUserInfo = () => {
    const user = {
        name: "张三",
        age: 25,
        gender: "男",
        address: "北京市海淀区中关村",
        email: "zhangsan@example.com",
        phone: "1234567890"
    };

    return <UserInfo user={user} />;
};

export default MyUserInfo;

