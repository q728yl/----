import { Badge, Calendar } from "antd";
import { useState } from "react";
import { getMyActivities } from "../Services/ActivitySevice";
import "../css/DateReminder.css";
import moment from 'moment';

const DateReminder = () => {


    const user = JSON.parse(localStorage.getItem("user"));
   

    const [activities, setActivities] = useState([]);
    const [isLoading, setIsLoading] = useState(true); // 定义isLoading来判断异步请求是否完成
    if(isLoading&&user!=null&&user.userId!=null){
        getMyActivities(user.userId).then((activityResponseList) => {
                  setActivities(activityResponseList);
                  // console.log("activityResponseList");
                  // console.log(activityResponseList);
                  
                  // console.log("activities here");
                  // console.log(activities);
                  if((activityResponseList!=null&&activities.length!==0)||(activityResponseList===null)) setIsLoading(false);
                });
    }

const getListData = (value) => {
    const events = activities.filter((activity) =>
      moment(activity.activityTime, 'YYYY-MM-DD HH:mm:ss').month() === value.month() &&
      moment(activity.activityTime, 'YYYY-MM-DD HH:mm:ss').date() === value.date()
    );
    return events.map((event) => ({ id: event.actId, content: event.name }));
  };

const getMonthData = (value) => {
  const events = activities.filter((activity) =>
      moment(activity.activityTime, 'YYYY-MM-DD HH:mm:ss').month() === value.month()
    );
    return events.length;
};


  const monthCellRender = (value) => {
    const num = getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Activities</span>
      </div>
    ) : null;
  };
  const dateCellRender = (value) => {
    const listData = getListData(value);
    return (
      <ul className="events">
        {listData.map((item) => (
          <li key={item.id}>
               <a href={`/activity/${item.id}`}>
            <Badge status={"error"} text={item.content} />
          </a>
          </li>
        ))}
      </ul>
    );
  };
  const cellRender = (current, info) => {
    if (info.type === 'date') return dateCellRender(current);
    if (info.type === 'month') return monthCellRender(current);
    return info.originNode;
  };
  return <Calendar cellRender={cellRender} />;
};
export default DateReminder;

