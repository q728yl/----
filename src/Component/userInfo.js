
// import { Button, Descriptions, Radio } from "antd";
// import { useState } from "react";
// const UserInfo = () => {
//   const [size, setSize] = useState("default");
//   const onChange = (e) => {
//     console.log("size checked", e.target.value);
//     setSize(e.target.value);
//   };
//   return (
//     <div>
//       <Radio.Group onChange={onChange} value={size}>
//         <Radio value="default">default</Radio>
//         <Radio value="middle">middle</Radio>
//         <Radio value="small">small</Radio>
//       </Radio.Group>
//       <br />
//       <br />
//       <Descriptions
//         bordered
//         title="Custom Size"
//         size={size}
//         extra={<Button type="primary">Edit</Button>}
//       >
//         <Descriptions.Item label="Product">Cloud Database</Descriptions.Item>
//         <Descriptions.Item label="Billing">Prepaid</Descriptions.Item>
//         <Descriptions.Item label="time">18:00:00</Descriptions.Item>
//         <Descriptions.Item label="Amount">$80.00</Descriptions.Item>
//         <Descriptions.Item label="Discount">$20.00</Descriptions.Item>
//         <Descriptions.Item label="Official">$60.00</Descriptions.Item>
//         <Descriptions.Item label="Config Info">
//           Data disk type: MongoDB
//           <br />
//           Database version: 3.4
//           <br />
//           Package: dds.mongo.mid
//           <br />
//           Storage space: 10 GB
//           <br />
//           Replication factor: 3
//           <br />
//           Region: East China 1
//           <br />
//         </Descriptions.Item>
//       </Descriptions>
//       <br />
//       <br />
//       <Descriptions
//         title="Custom Size"
//         size={size}
//         extra={<Button type="primary">Edit</Button>}
//       >
//         <Descriptions.Item label="Product">Cloud Database</Descriptions.Item>
//         <Descriptions.Item label="Billing">Prepaid</Descriptions.Item>
//         <Descriptions.Item label="time">18:00:00</Descriptions.Item>
//         <Descriptions.Item label="Amount">$80.00</Descriptions.Item>
//         <Descriptions.Item label="Discount">$20.00</Descriptions.Item>
//         <Descriptions.Item label="Official">$60.00</Descriptions.Item>
//       </Descriptions>
//     </div>
//   );
// };
// export default UserInfo;

import { Button, Descriptions, Radio } from "antd";
import { useState } from "react";

const UserInfo = ({ user }) => {
    const [size, setSize] = useState("default");
    const onChange = (e) => {
        console.log("size checked", e.target.value);
        setSize(e.target.value);
    };

    return (
        <div>
            <Radio.Group onChange={onChange} value={size}>
                <Radio value="default">default</Radio>
                <Radio value="middle">middle</Radio>
                <Radio value="small">small</Radio>
            </Radio.Group>
            <br />
            <br />
            <Descriptions
                bordered
                title=""
                size={size}
                extra={<Button type="primary">Edit</Button>}
            >
                <Descriptions.Item label="Name">{user.name}</Descriptions.Item>
                <Descriptions.Item label="Age">{user.age}</Descriptions.Item>
                <Descriptions.Item label="Gender">{user.gender}</Descriptions.Item>
                <Descriptions.Item label="Address">{user.address}</Descriptions.Item>
                <Descriptions.Item label="Email">{user.email}</Descriptions.Item>
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
    );
};

export default UserInfo;
