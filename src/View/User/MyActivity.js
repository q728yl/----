import React from "react";
import {getMyActivities} from "../../Services/ActivitySevice";
import {Button, Card, List} from "antd";
import {Link} from "react-router-dom";
import {getUser} from "../../Services/UserService";
const default_url = "https://th.bing.com/th/id/R.785580b0aa9cce1c7e016db5ee2e078e?rik=ebpuQj03uKxGQg&riu=http%3a%2f%2fphotos.tuchong.com%2f255820%2ff%2f2852945.jpg&ehk=8sZ0LLnnaIXhdwT1M5Zk2xrfIMFcE%2bV45Nc1839Gj7Y%3d&risl=&pid=ImgRaw&r=0";

const states= [" ","已报名","已录取","很遗憾，你落选了","已参加","已评价"];// state ENUM('Signed','Passed','Rejected','Participated','Commented'),
class MyActivity  extends React.Component {
            constructor(props) {
                super(props);
                this.state = { myActivities: [] };
            }

            async componentDidMount() {
                const userId = getUser().userId;
                const fetchedActivities = await getMyActivities(userId);
                this.setState({myActivities: fetchedActivities});
                console.log("MY",this.state.myActivities);
            }
            render() {
                return(
                    <List
                        style={{margin: "20px"}}
                        grid={{gutter: 16, column: 4}}
                        dataSource={this.state.myActivities}
                        pagination={{
                            onChange: page => {
                                console.log(page);
                            },
                            pageSize: 16,
                        }}
                        renderItem={(activity) => (
                            <List.Item>
                                <Link to={`/activity/${activity.activityDetails.id}`}>
                                    <Card
                                        cover={<img alt={default_url}
                                                    src={activity.activityDetails.photo? activity.activityDetails.photo: default_url}
                                                    style={{width: "95%", margin: "0 auto"}}/>}
                                        title={activity.activityDetails.name}

                                    >
                                        <Card.Meta description={activity.activityDetails.description}/>
                                        活动时间：{activity.activityDetails.activityTime}
                                        <br/>
                                        <br/>
                                        {states[activity.activitySignup.state]}
                                        <br/>
                                        <br/>
                                        {activity.activitySignup.state === 4 && <Button>评价活动</Button>}
                                        {activity.activitySignup.state === 5 && <Button>修改评价</Button>}
                                    </Card>
                                </Link>
                            </List.Item>
                        )}
                    />
                )
            }

        };

export default MyActivity;