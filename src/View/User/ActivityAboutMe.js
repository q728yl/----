import {Button, message, Radio} from "antd";
import React, {useState} from "react";
import MyActivity from "./MyActivity";
import MyRelease from "./MyRelease";
import {getUser} from "../../Services/UserService";
import {Link} from "react-router-dom";


const ActivityAboutMe = () => {
    const [choice, setChoice] = useState('part');
    const user = getUser();
    if (user == null) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                <Link to="/login">
                    <Button type="primary" style={{ margin: "20px" }}>登录</Button>
                </Link>
            </div>
        )
    }
    const handleChange = (e) => {
        setChoice(e.target.value);
    }
    return (
        <div>
            <Radio.Group value={choice} onChange={handleChange} style={{marginTop:"20px",marginLeft:"20px"}}>
                <Radio.Button value="part">我参加的</Radio.Button>
                <Radio.Button value="release">我发布的</Radio.Button>
            </Radio.Group>
            {choice === 'part' ? <MyActivity/> : <MyRelease/>}
        </div>


    )
}
export default ActivityAboutMe;