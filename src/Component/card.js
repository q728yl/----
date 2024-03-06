
import { Card } from "antd";

const { Meta } = Card;

const MyCard = ({ event }) => (
    <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt={event.name} src={event.cover} />}
    >
        <Meta title={event.name} description={event.description} />
        <p>Time: {event.time}</p>
        <p>Location: {event.location}</p>
    </Card>
);

export default MyCard;

