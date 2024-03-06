import React, { useState, useEffect } from "react";
import { getMyActivities, getMyReleaseActivities, getActivityByID } from "../../Services/ActivitySevice";
import { Button, Card, List, message, Modal, Table } from "antd";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getUser } from "../../Services/UserService";
import { getSignedUser } from "../../Services/ReleaseService";
import ReleaseForm from "../../Component/ReleaseForm";

const default_url = "https://th.bing.com/th/id/R.785580b0aa9cce1c7e016db5ee2e078e?rik=ebpuQj03uKxGQg&riu=http%3a%2f%2fphotos.tuchong.com%2f255820%2ff%2f2852945.jpg&ehk=8sZ0LLnnaIXhdwT1M5Zk2xrfIMFcE%2bV45Nc1839Gj7Y%3d&risl=&pid=ImgRaw&r=0";

const states = [" ", "已报名", "已录取", "很遗憾，你落选了", "已参加", "已评价"]; // state ENUM('Signed','Passed','Rejected','Participated','Commented'),

const MyRelease = () => {
    const [myActivities, setMyActivities] = useState([]);
    const [showTable, setShowTable] = useState(false);
    const [tableData, setTableData] = useState([]);
    const userSigned = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const userId = getUser().userId;
            const fetchedActivities = await getMyReleaseActivities(userId);

            const completeActivities = await Promise.all(
                fetchedActivities.map(async (activity) => {
                    const completeActivity = await getActivityByID(activity.actId);
                    return { ...completeActivity };
                })
            );

            setMyActivities(completeActivities);
        };

        fetchData();
    }, []);

    const handleGetUser = (actId) => {
        getSignedUser(actId, (data, error) => {
            if (data) {
                setTableData(data);
                setShowTable(true);
            } else {
                console.log("获取学生信息失败", error);
            }
        });
    };

    const columns = [
        {
            title: "userId",
            dataIndex: "userId",
            key: "userId",
        },
        {
            title: "username",
            dataIndex: "username",
            key: "username",
        },
        {
            title: "studentId",
            dataIndex: "studentId",
            key: "studentId",
        },
        {
            title: "college",
            dataIndex: "college",
            key: "college",
        },
        {
            title: "grade",
            dataIndex: "grade",
            key: "grade",
        },
        {
            title: "club",
            dataIndex: "club",
            key: "club",
        },
        {
            title: "mail",
            dataIndex: "mail",
            key: "mail",
        },
    ];

    return (
        <div>
            <ReleaseForm />
            <List
                style={{ margin: "20px" }}
                grid={{ gutter: 16, column: 4 }}
                dataSource={myActivities}
                pagination={{
                    onChange: (page) => {
                        console.log(page);
                    },
                    pageSize: 16,
                }}
                renderItem={(activity) => (
                    <List.Item>
                        <Link to={`/activity/${activity.id}`}>
                            <Card
                                cover={<img alt={default_url} src={activity.photo ? activity.photo : default_url} style={{ width: "95%", margin: "0 auto" }} />}
                                title={activity.name}
                            >
                                <Card.Meta description={activity.description} />
                                活动时间：{activity.activityTime}
                                <br />
                                <br />
                                {states[activity.state]}
                                <br />
                                <br />
                                {activity.state === 4 && <Button>评价活动</Button>}
                                {activity.state === 5 && <Button>修改评价</Button>}
                            </Card>
                        </Link>
                        <Button onClick={() => handleGetUser(activity.id)}>查看报名学生信息</Button>
                    </List.Item>
                )}
            />
            {showTable && (
                <Table
                    dataSource={tableData}
                    columns={columns}
                    // Add other table props and styling as needed
                />
            )}
        </div>
    );
};

export default MyRelease;
