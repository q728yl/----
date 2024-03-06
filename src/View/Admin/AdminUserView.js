import { Button, Descriptions, Radio,Empty, Image } from "antd";
import { useState } from "react";
import { getUserByUserId } from "../../Services/UserService";

const AdminUserView = () => {

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
                        style={{ width: "80%", margin: "auto", lineHeight: "2em" }}
                    >
                        <Descriptions.Item label="Avatar" span={3}>
                            <Image src={user.avatar} style={{ maxWidth: "120px", maxHeight: "120px" }} />
                        </Descriptions.Item>
                        <Descriptions.Item label="Name">{user.nickname}</Descriptions.Item>
                        <Descriptions.Item label="Grade">{user.grade}</Descriptions.Item>
                        <Descriptions.Item label="Gender">
                            {user.gender === 0 ? '女' : '男'}
                        </Descriptions.Item>
                        <Descriptions.Item label="Student ID">{user.stu_id}</Descriptions.Item>
                        <Descriptions.Item label="Email">{user.mail}</Descriptions.Item>
                        <Descriptions.Item label="Phone">{user.phone}</Descriptions.Item>
                        <Descriptions.Item label="College">{user.college}</Descriptions.Item>
                        <Descriptions.Item label="Club">{user.club}</Descriptions.Item>
                        
                    </Descriptions>
                    <br />
                    <br />
                </div>
            )}
        </div>
    );
};

export default AdminUserView;

