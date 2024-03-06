import React, {useState} from 'react';
import {CommentOutlined, EllipsisOutlined,HeartOutlined} from "@ant-design/icons";
import {Avatar, Card, Rate, Skeleton} from "antd";
import Meta from "antd/es/card/Meta";
import '../../css/backgroud.css'
import {Link} from "react-router-dom";

/**
 * 朋友圈卡片
 * @param moment数组，包含头像，标题，描述，图片
 * 点赞功能未显示多少人点赞
 * 评论功能未开发
 */
const MomentCard: React.FC = ({moment}) => {
    const [loading, setLoading] = useState(false);
    const [liked, setLiked] = useState(false);
    if( !moment.avatar.includes("http")){
        moment.avatar = "../../Data/"+moment.avatar;
        console.log(moment.avatar)
    }
    const handleLike = () => {
        setLiked(!liked);
    };

    // //加载状态
    // const onChange = (checked: boolean) => {
    //     setLoading(!checked);
    // };
    return(
        <Card className="glass-container"
              style={{ width: 600, marginTop: 16 }}
              actions={[
                  <HeartOutlined key="like" onClick={handleLike} style={{ color: liked ? 'red' : 'inherit' }} />,
                  <CommentOutlined key="comment" />,
                  <EllipsisOutlined key="ellipsis" />,
              ]}
        >
            <Skeleton loading={loading} avatar active>
                <Meta
                    avatar={<Avatar src={moment.avatar} />}
                    title={moment.nickname}
                />
                <br/>

                <div >
                    <div><text style={{color:"black", fontSize:"large"}}>{moment.commentDetail}</text></div>
                    <br/>
                    <Link to={`/activity/${moment.actId}`}>参与活动： {moment.activityName}</Link>
                    <div>
                        <text style={{color:"grey"}}>推荐指数：</text>
                        <Rate disabled defaultValue={moment.comment} />
                    </div>
                    <div  style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <img style={{width: '80%',marginTop: 16}}
                             src={moment.commentPhoto}
                        />
                    </div>
                </div>


            </Skeleton>
        </Card>
    )

}
export default MomentCard;