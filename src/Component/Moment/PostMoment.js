import {Button, Cascader, Drawer, message, Radio, Rate, Space} from 'antd';
import React, {useEffect, useState} from 'react';
import PhotoUpload from "./PhotoUpload";
import {InboxOutlined, PlusOutlined} from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";
import {getCurrentTime, submitMoment} from "../../Services/MomentService";
import {getMyActivities} from "../../Services/ActivitySevice";
import {getUser} from "../../Services/UserService";

const desc = ['不好', '一般', '中立', '不错', '很好'];
const PostMoment = ({onPosted}) => {
    const [open, setOpen] = useState(false);
    const [placement] = useState('top');
    const [moment, setMoment] = useState({
        text: '',
        images: []
    });
    const [options, setOptions] = useState([]);
    const user = getUser();
    const [comment, setComment] = useState(3);

    useEffect( () => {
        (async function asyncFunc() {
            const activities = await getMyActivities(user.userId);
            const options = activities.map(activity => ({
                value: activity.activityDetails.id,
                label: activity.activityDetails.name,
            }));
            setOptions(options);
        })();
    }, [user.userId]);
    const handleImageUpload = names => {
        setMoment({
            ...moment,
            images: names
        });
    };

    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };
    const onCommit = async () => {
        const time = getCurrentTime();
        // 发送moment对象到后端进行保存
        console.log(moment)
        if (moment.activityId === undefined) {
            message.error("请选择需要评价的活动");
            return;
        }

        await submitMoment({
            userId: user.userId,
            activityId: moment.activityId,
            comment: moment.comment,
            commentDetail: moment.text,
            commentPhoto: comment.images,
            postTime: time
        },onPosted);

        setMoment({text: '', images: []});
        setOpen(false);
    };
    const onChangeChoice = (value) => {
        const activityId = value[0];
        setMoment({
            ...moment,
            activityId: activityId,
            comment,
        });
    };
    const onChangeComment = (value) => {
        console.log("comment",value);
        setComment(value);
        setMoment({
            ...moment,
            comment: value,
        });
    };

    const displayRender = (labels) => labels[labels.length - 1];

    return (
        <>
            <Space style={{
                padding: 10,
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
            }}>
                <Button style={{backgroundColor:"rgba(255,255,255,0.5)"}} type="default" shape="circle" icon={<InboxOutlined />} size={'middle'} />

                <Button style={{backgroundColor:"rgba(255,255,255,0.5)"}} type="default" shape="circle" icon={<PlusOutlined />} size={'middle'}
                        onClick={showDrawer}/>
                {/*<Button type="primary" onClick={showDrawer}>*/}
                {/*    Open*/}
                {/*</Button>*/}
            </Space>
            <Drawer
                title=" "
                placement={placement}
                width={500}
                height={500}
                onClose={onClose}
                open={open}
                extra={
                    <Space>
                        <Button type="primary" onClick={onCommit}>
                            发布
                        </Button>
                    </Space>
                }
            >
                <TextArea rows={4} placeholder="发布新的朋友圈吧~"
                          value={moment.text}
                          onChange={e => setMoment({ ...moment, text: e.target.value })}/>
                <br/> <br/>
                <text style={{color:"black"}}> 选择需要评价的活动 : </text>
                <Cascader
                    options={options}
                    expandTrigger="hover"
                    displayRender={displayRender}
                    onChange={onChangeChoice}
                />
                <br/>
                <span>
                 <Rate tooltips={desc} onChange={onChangeComment} value={comment} />
                    {comment ? <span className="ant-rate-text">{desc[comment - 1]}</span> : ''}
                </span>
                <br/>  <br/>
               <PhotoUpload onUpload={handleImageUpload}/>
            </Drawer>
        </>
    );
};
export default PostMoment;