import { message, Upload, Button } from 'antd'
import { useState } from 'react'

const { Dragger } = Upload

const getBase64 = (img, callback) => {
  const reader = new FileReader()
  reader.addEventListener('load', () => callback(reader.result))
  reader.readAsDataURL(img)
}

const App = ({ onUpload }) => {
  const [loading, setLoading] = useState(false)

  const handleRemove = () => {
    onUpload(null, null)
  }

  const handleChange = (info) => {
    const { status } = info.file
    if (status !== 'uploading') {
      getBase64(info.fileList[0].originFileObj, (url) => {
        setLoading(false)
        onUpload(info, url)
      })
    }
    if (status === 'done') {
      console.log(status)
      message.success(`${info.file.name} file uploaded successfully.`)
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`)
    }

  }

  return (
    <Dragger
      type="file"
      name="file"
      multiple={false}
      beforeUpload={() => false}
      className="h-full w-full p-3"
      onChange={(e) => handleChange(e)}
    >
      <p className="ant-upload-drag-icon">{/*<InboxOutlined />*/}</p>
      <p className="ant-upload-text">Click or drag file to this area to upload</p>
      <p className="ant-upload-hint">
        Support for a single or bulk upload. Strictly prohibited from uploading company data or other
        banned files.
      </p>
    </Dragger>
  )
}

export default App
