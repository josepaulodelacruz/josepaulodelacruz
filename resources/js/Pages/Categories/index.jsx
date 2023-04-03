import AdminLayout from '@/Layouts/AdminLayout'
import { Button, Table, Space, Input, message } from 'antd'
import ListTile from '@/Components/ListTile'
import Modal from '@/Components/Modal'
import { useEffect, useState } from 'react'
import { router, usePage } from '@inertiajs/react'

;

function Index ({categories, categoriesLatest}) {
  const [messageApi, contextHolder] = message.useMessage()
  const { errors } = usePage().props
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [data, setData] = useState(categories)
  const [isEdit, setIsEdit] = useState(false)
  const [values, setValues] = useState({
    'name': '',
    'icon': '',
  })

  useEffect(() => {
    if(errors.categoryForm) {
      //loop through the categoryForm error bag then show message.warning
      Object.keys(errors.categoryForm).forEach((key) => {
        messageApi.warning(errors.categoryForm[key])
      })
    }
  }, [errors])

  useEffect(() => {
    setData(categories)
  }, [categories])


  const _handleModal = (cond, isEdit = false) => {

    setIsEdit(isEdit)
    setIsModalVisible(cond)

    if(!isEdit) {
      setValues({
        name: '',
        icon: '',
      })
    }

  }

  const _handleFormInput = ({e, field}) => {
    setValues({
      ...values,
      [field]: e.target.value
    })
  }

  const _handleEditForm = (record) => {
    setValues({
      id: record.id,
      name: record.value,
      icon: record.icon_code,
    })
    _handleModal(true, true);
  }

  const _handleSubmitForm = () => {
    if(!isEdit) {
      router.post('/panel/categories/add', values, {
        errorBag: 'categoryForm'
      })
    } else {
      console.log(values)
      router.post(`/panel/categories/add`, values, {
        errorBag: 'categoryForm'
      })
    }


    _handleModal(false);
  }

  return(
    <AdminLayout>
      {contextHolder}
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

        <div className="flex flex-col h-[275px] md:flex-row gap-4">
          <div className="flex-col flex mt-4 grow">
            <div className="bg-white h-full px-2 py-4 rounded shadow">
              <span className="text-sm font-medium">Trending Categories</span>
              <div className="flex h-[1px] bg-gray-300 grow mt-3"/>

              {/*<ListTile />*/}
              {/*<ListTile />*/}
              {/*<ListTile />*/}
              {/*<ListTile />*/}
              {/*<ListTile />*/}
            </div>
          </div>

          <div className="flex-col flex mt-4 grow">
            <div className="bg-white h-full px-2 py-4 rounded shadow">
              <span className="text-sm font-medium">Recent Categories</span>
              <div className="flex h-[1px] bg-gray-300 grow mt-3"/>
              {
                categoriesLatest && categoriesLatest.map((category, index) => (
                  <ListTile key={index} field={category.value} />
                ))
              }
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
            // columns={columns}
          >
         {/*Insert icon code and render icon*/}
            <Table.Column title="Name" dataIndex="value" key="name" />
            <Table.Column
              title="Icon"
              dataIndex="icon_code"
              key="icon"
              render={(val, record) => (
                <span className="material-icons" dangerouslySetInnerHTML={{__html:val}}/>
              )}
            />
            <Table.Column
              title="Action"
              width={'10%'}
              render={(_, record) => (
                <Space size="middle">
                  <Button onClick={() => _handleEditForm(record)}>Edit</Button>
                  <Button onClick={() => router.delete(`/panel/categories/delete/${record.id}`)}>Delete</Button>
                </Space>
              )}
            />
          </Table>
        </div>

      </div>

      <Modal
        show={isModalVisible}
        closeable={true}
        onClose={() => _handleModal(false, false)}
      >
        <div className="flex flex-col p-4 ">
          <span className="text-2xl font-semibold ">{isEdit ? 'Edit' : 'Add'} Category </span>
          <div className="flex h-0.5 bg-gray-300 grow my-2"/>
          <div className="py-2">
            <span className="text-md font-medium">Name</span>
            <Input
              defaultValue={values.name}
              onChange={(e) => _handleFormInput({e: e, field: 'name'})} placeholder="Category Name" rootClassName="rounded-md" />
          </div>
          <div className="py-2">
            <span className="text-md font-medium">Icon</span>
            <div className="flex flex-row items-stretch gap-4">
              <Input
                defaultValue={values.icon}
                onChange={(e) => _handleFormInput({e: e, field: 'icon'})} placeholder="Category Icon" rootClassName="rounded-md grow" />
              <span dangerouslySetInnerHTML={{__html: values.icon}} className="material-icons px-4 py-2 bg-gray-100 rounded"/>
            </div>
          </div>

          <div className="flex justify-end py-3 gap-4">
            <Button onClick={() => _handleModal(false, false)}>
              Cancel
            </Button>
            <Button onClick={_handleSubmitForm} className="text-white bg-blue-900">
              {isEdit ? 'Edit' : 'Add'} Category
            </Button>
          </div>


        </div>
      </Modal>

    </AdminLayout>
  )
}

export default Index
