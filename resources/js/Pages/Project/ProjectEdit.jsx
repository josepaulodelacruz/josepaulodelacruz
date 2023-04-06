import React, { useEffect, useState } from 'react'
import AdminLayout from '@/Layouts/AdminLayout'
import { Input, Select, Button } from 'antd'
import './index.scss'
import { router, useForm } from '@inertiajs/react'
import InputError from '@/Components/InputError'
import Upload from '@/Components/Upload'

function  ProjectEdit ({ categories, project }) {
  const [showImage, setShowImage] = useState(null)
  const { data, setData, post, processing, errors, reset } = useForm({
    title: "",
    description: "",
    host_link: "",
    source_code: "" ,
    categories: [],
    files: "",
  })

  useEffect(() => {
    setShowImage(project.file)
    // convert a fileList to a file
    setData({
      title: project.title,
      description: project.description,
      host_link: project.host_link,
      source_code: project.source_code,
      categories: _getCategories(),
      files: project.file,
    })
  }, [])

  //loop through project.categories then only return the category.id
  const _getCategories = () => {
    const _categories = project.categories.map((category, index) => {
      const _selected = categories.find((cat) => cat.value === category.category)
      return _selected
    })
    return _categories
  }




  //submit project
  const _handleSubmitProject = (e) => {
    e.preventDefault()
    post(route('project.editProject', project.id))
  }

  return (
    <AdminLayout>
      <form onSubmit={_handleSubmitProject} className="flex flex-col pt-6 pl-6">

        <div className="flex self-start flex-col ">
          <span className="text-2xl font-semibold">Projects</span>
          <span style={{ fontSize: '12px' }} className="text-gray-600">Home / Projects / Edit</span>
        </div>

        <div className="flex h-0.5 bg-gray-300 grow mt-3 mr-6"/>

        <div className="flex flex-row justify-between content-center items-center pt-6 pr-6">
          <span className="text-2xl font-semibold">Edit Project</span>
          <Button disabled={processing} onClick={_handleSubmitProject} className="bg-blue-900 text-md text-white ">
            Edit Project
          </Button>
        </div>

        <div className="flex flex-col md:flex-row  pt-6 gap-4 mr-6">
          <div className="flex flex-col flex-1 rounded p-4 bg-white shadow-md">
            <InputSection
              field="Title"
              value={data.title}
              required
              readOnly={true}
              onChange={(e) => setData('title', e.target.value)}/>
            <InputError message={errors?.projectFormBag?.title} className="pl-2"/>
            <InputSection
              value={data.description}
              required
              onChange={(e) => setData('description', e.target.value)}
              field="Description"/>
            <InputError message={errors?.projectFormBag?.description} className="pl-2"/>

            <div className="m-2 flex flex-row items-center">
              <span className="text-md font-bold text-blue-900">Category:</span>
              <div className="grow ml-3 p-2 ">
                <Select

                  mode="multiple"
                  style={{ width: '100%' }}
                  onChange={(v, record) => setData('categories', record)}
                  tokenSeparators={[',']}
                  options={categories}
                  value={data.categories}
                />
                <InputError message={errors?.projectFormBag?.categories} className="pl-2"/>

              </div>
            </div>
          </div>
          <div className="flex flex-col flex-1 rounded p-4 bg-white shadow-md">
            <InputSection
              value={data.host_link}
              required
              onChange={(e) => setData('host_link', e.target.value)}
              field="URL Hosting Link"/>
            <InputError message={errors?.projectFormBag?.host_link} className="pl-2"/>
            <InputSection
              value={data.source_code}
              required
              onChange={(e) => setData('source_code', e.target.value)}
              field="Source Code"/>
            <InputError message={errors?.projectFormBag?.source_code} className="pl-2"/>
            <div className="m-2 flex flex-row items-center">
              <span className="text-md font-bold text-blue-900">Meta Tags:</span>
              <div className="grow ml-3 p-2 ">
                <Select
                  mode="multiple"
                  style={{ width: '100%' }}
                  onChange={null}
                  tokenSeparators={[',']}
                  options={[
                    {
                      value: 'jack',
                      label: 'Jack',
                    },
                    {
                      value: 'lucy',
                      label: 'Lucy',
                    },
                    {
                      value: 'Yiminghe',
                      label: 'yiminghe',
                    },
                    {
                      value: 'disabled',
                      label: 'Disabled',
                      disabled: true,
                    },
                  ]}
                />

              </div>
            </div>


          </div>
        </div>


        <div className="flex h-0.5 bg-gray-300 grow my-5 mr-6"/>

        <div className="mb-6">
          <span className="text-lg font-semibold">Additional Details</span>
          <div className="flex bg-white relative shadow rounded h-60 mr-6 ">
            <div className="flex justify-center items-center w-full ">
              {
                showImage &&
                <Button onClick={() => {
                  setShowImage(null)
                  setData('files', null)
                }} className="absolute top-3 right-5 " type={'primary'}>
                  <span className="material-icons">&#xe872;</span>
                </Button>
              }

              {
                showImage ? <img src={showImage} alt="project image" className="w-full h-full rounded"/> :
                  <>
                    <Upload
                      onUpload={(info, url) => {
                        setShowImage(url)
                        setData('files', info.file)
                      }}
                    />
                  </>
              }
            </div>
          </div>
          <InputError message={errors?.projectFormBag?.files} className="pl-2"/>


        </div>

      </form>
    </AdminLayout>
  )
}

function InputSection ({ field = '', onChange = null, value = '', required = false, readOnly = false }) {
  return (
    <div className="m-2">
      <span className="text-md font-bold text-blue-900">{field}</span>
      <Input
        value={value}
        rootClassName="rounded-md"
        readOnly={readOnly}
        onChange={onChange}/>
    </div>
  )
}

export default ProjectEdit
