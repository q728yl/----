import React from "react";
import ActivityList from "../Component/Activity/ActivityList";
import Search from "antd/es/input/Search";
import {searchActivities} from "../Services/ActivitySevice";

const ActivityView  = () => {


    return (
        <div>

            <ActivityList />
        </div>
    );
};
export default ActivityView;