import { PlusOutlined } from '@ant-design/icons';
import { Modal, Upload } from 'antd';
import { useState } from 'react';
import {getCurrentTime} from "../../Services/MomentService";
const getBase64 = (file) =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });

/*
* @brief: 上传图片组件,用于朋友圈功能或发布活动功能
* @autor: dxm
* */
const PhotoUpload = ({onUpload}) => {

    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [previewTitle, setPreviewTitle] = useState('');
    const [fileList, setFileList] = useState([
        // {
        //     uid: '-1',
        //     name: 'image.png',
        //     status: 'done',
        //     url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        // },
    ]);
    const handleCancel = () => setPreviewOpen(false);
    const handlePreview = async (file) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }
        setPreviewImage(file.url || file.preview);
        setPreviewOpen(true);
        setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
    };
    const handleChange =  ({ fileList: newFileList }) => {
        const renamedFileList = newFileList.map((file, index) => {
            const fileName = `photo_${index + 1}_${getCurrentTime()}.jpg`; // 使用指定的命名规则，这里以photo_1.jpg、photo_2.jpg等命名
            return {
                ...file,
                name: fileName,
                url:null,
                status: 'done',
                // preview: URL.createObjectURL(file.originFileObj), // 设置预览图片的URL
                // url: URL.createObjectURL(file.originFileObj), // 设置预览图片的URL
            };
        });

        setFileList(renamedFileList);
    }
    const handleUpload = () => {
        let names = '';
        fileList.forEach((file) => {
            names += file.name + ';';
        });

        onUpload(names);
    }
    const uploadButton = (
        <div>
            <PlusOutlined />
            <div
                style={{
                    marginTop: 8,
                }}
            >
                上传照片
            </div>
        </div>
    );
    return (
        <>
            <Upload
                action="../../Data"
                listType="picture-card"
                fileList={fileList}
                onPreview={handlePreview}
                onChange={handleChange}
                customRequest={handleUpload}
            >
                {fileList.length >= 8 ? null : uploadButton}
            </Upload>
            <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
                <img
                    alt="example"
                    style={{
                        width: '100%',
                    }}
                    src={previewImage}
                />
            </Modal>
        </>
    );
};
export default PhotoUpload;