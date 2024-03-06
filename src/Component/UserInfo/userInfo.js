import { Button, Descriptions, Radio,Empty } from "antd";
import { useState } from "react";
import { getUserByUserId } from "../../Services/UserService";

const UserInfo = () => {

    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user);


    return (
        <div>
            {!user ? (
                <Empty>
                    <Button href="/login">点击登录</Button>
                </Empty>
            ):(
                <div>

                    <br />
                    <Descriptions
                        bordered
                        title=""
                        extra={<Button type="primary">Edit</Button>}
                    >
                        <Descriptions.Item label="Name">{user.username}</Descriptions.Item>
                        <Descriptions.Item label="Grade">{user.grade}</Descriptions.Item>
                        {/* <Descriptions.Item label="Gender">{user.gender}</Descriptions.Item> */}
                        <Descriptions.Item label="Gender">
                            {user.gender === 0 ? '女' : '男'}
                        </Descriptions.Item>
                        {/* <Descriptions.Item label="Address">{user.address}</Descriptions.Item> */}
                        <Descriptions.Item label="Email">{user.mail}</Descriptions.Item>
                        <Descriptions.Item label="Phone">{user.phone}</Descriptions.Item>
                    </Descriptions>
                    <br />
                    <br />
                    {/* <Descriptions
        title="Custom Size"
        size={size}
        extra={<Button type="primary">Edit</Button>}
      >
        <Descriptions.Item label="Name">{user.name}</Descriptions.Item>
        <Descriptions.Item label="Age">{user.age}</Descriptions.Item>
        <Descriptions.Item label="Gender">{user.gender}</Descriptions.Item>
        <Descriptions.Item label="Email">{user.email}</Descriptions.Item>
        <Descriptions.Item label="Phone">{user.phone}</Descriptions.Item>
      </Descriptions> */}
                </div>
            )}
        </div>
    );
};

export default UserInfo;

