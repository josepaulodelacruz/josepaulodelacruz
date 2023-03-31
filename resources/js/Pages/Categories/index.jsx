import AdminLayout from '@/Layouts/AdminLayout'
import { Button, Table, Space, Input } from 'antd'
import ListTile from '@/Components/ListTile'
import Modal from '@/Components/Modal'
import { useEffect, useState } from 'react'
import { router } from '@inertiajs/react'

;

function Index ({categories}) {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [data, setData] = useState(categories)
  const [values, setValues] = useState({
    'name': '',
    'icon': '',
  })

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: '40%',
      // onCell: (_, index) => ({rowSpan: 1}),
    },
    {
      title: 'Icons',
      dataIndex: 'icon',
      key: 'icon',
      width: '60%',
      // onCell: (_, index) => ({rowSpan: 1}),
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
      width: '10%',
      // onCell: (_, index) => ({rowSpan: 1}),
      render: (_, record) => (
        <Space size="middle">
          <Button onClick={() => _handleEditForm(record)}>Edit</Button>
          <Button onClick={() => router.delete(`/panel/categories/delete/${record.id}`)}>Delete</Button>
        </Space>
      ),
    },
  ]

  useEffect(() => {
    setData(categories)
  }, [categories])


  const _handleModal = (cond) => {
    setIsModalVisible(cond);
  }

  const _handleFormInput = ({e, field}) => {
    setValues({
      ...values,
      [field]: e.target.value
    })
  }

  const _handleEditForm = (record) => {
    setValues({
      ...record,
    })
    _handleModal(true);
  }

  const _handleSubmitForm = () => {
    router.post('/panel/categories/add', values)
    _handleModal(false);
  }

  return(
    <AdminLayout>

      <div className="flex flex-col pt-6 md:px-6 ">

        <div className="flex justify-between items-center px-6 md:p-0">
          <div className="flex self-start flex-col ">
            <span className="text-2xl font-semibold">Category</span>
            <span style={{fontSize: '12px'}} className="text-gray-600">Home / Category </span>
          </div>
          <Button onClick={() => _handleModal(true)} className="bg-blue-900 text-white text-md">
            Add Category
          </Button>
        </div>

        <div className="flex h-0.5 bg-gray-300 grow mt-3"/>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-col flex mt-4 grow">
            <div className="bg-white px-2 py-4 rounded shadow">
              <span className="text-sm font-medium">Trending Categories</span>
              <div className="flex h-[1px] bg-gray-300 grow mt-3"/>
              <ListTile />
              <ListTile />
              <ListTile />
              <ListTile />
              <ListTile />
            </div>
          </div>

          <div className="flex-col flex mt-4 grow">
            <div className="bg-white px-2 py-4 rounded shadow">
              <span className="text-sm font-medium">Recent Categories</span>
              <div className="flex h-[1px] bg-gray-300 grow mt-3"/>
              <ListTile />
              <ListTile />
              <ListTile />
              <ListTile />
              <ListTile />
            </div>
          </div>

        </div>



        <div className="flex h-0.5 bg-gray-300 grow mt-3"/>

        <div className="flex flex-col my-3">
          <span className="text-2xl font-semibold my-3">List of Categories </span>
          <Input rootClassName="rounded-md" placeholder="Search Category"/>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <Table
            rowKey={(record) => record.id}
            bordered
            dataSource={data}
            columns={columns}
          />
        </div>

      </div>

      <Modal
        show={isModalVisible}
        closeable={true}
        onClose={() => _handleModal(false)}
      >
        <div className="flex flex-col p-4 ">
          <span className="text-2xl font-semibold ">Add Category </span>
          <div className="flex h-0.5 bg-gray-300 grow my-2"/>
          <div className="py-2">
            <span className="text-md font-medium">Name</span>
            <Input onChange={(e) => _handleFormInput({e: e, field: 'name'})} placeholder="Category Name" rootClassName="rounded-md" />
          </div>
          <div className="py-2">
            <span className="text-md font-medium">Icon</span>
            <button className="flex bg-gray-100 h-40 justify-center items-center w-full rounded">
              Add Icon
            </button>
          </div>

          <div className="flex justify-end py-3 gap-4">
            <Button onClick={() => _handleModal(false)}>
              Cancel
            </Button>
            <Button onClick={_handleSubmitForm} className="text-white bg-blue-900">
              Add Category
            </Button>
          </div>


        </div>
      </Modal>

    </AdminLayout>
  )
}

export default Index
