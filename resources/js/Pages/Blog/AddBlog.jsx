import AdminLayout from '@/Layouts/AdminLayout'
import { Button, Input, Select } from 'antd'
import React, { useState } from 'react'
import InputLabel from '@/Components/InputLabel'
import TextInput from '@/Components/TextInput'
import InputError from '@/Components/InputError'
import Upload from '@/Components/Upload'
import { useForm } from '@inertiajs/react';

function AddBlog ({categories}) {
  const [showImage, setShowImage] = useState(null)
  const { data, setData, post, processing, errors, reset } = useForm({
    title: '',
    description: '',
    categories: [],
    cover_photo: null,
    host_link: '',
  });


  const _handleNext = () => {
    post(route('blog.addBlog'))
  }

  return (
    <AdminLayout>
      <div className="flex flex-col">

        <div className="flex sm:justify-between content-center flex-col">
          <div className="p-6 flex flex-col md:flex-row">
            <div className="flex flex-col self-center w-full">
              <span className="text-2xl font-semibold text-center md:text-start">Blogs</span>
              <span style={{fontSize: '12px'}} className="text-gray-600 text-center md:text-start">Home / Blogs </span>
            </div>

            <div className="flex flex-col sm:w-full md:flex-row md:grow md:justify-end">
              <div className="flex flex-row self-center ">
                <Button onClick={() => setShowFilter(true)}
                        className="mr-3 bg-white shadow self-center text-md rounded flex">
                  <span className="material-icons self-center px-1" style={{fontSize: '1rem'}}>&#xe8b6;</span>
                  Filter
                </Button>
                <Button className="bg-purple shadow self-center text-white  text-md rounded flex">
                  <span className="material-icons self-center px-1" style={{fontSize: '1rem'}}>&#xe8b6;</span>
                  Edit
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex h-0.5 bg-gray-300 grow mx-6"/>

        <div className="flex flex-row justify-between content-center items-center pt-6 pr-6 pl-6">
          <span className="text-2xl font-semibold">Add Blogs</span>
          <Button
            onClick={_handleNext} className="bg-blue-900 text-md text-white ">
            Next
          </Button>
        </div>

        <div className="flex flex-col md:flex-row p-6 gap-4">

          <div className="flex flex-1 flex-col bg-white grow shadow-sm rounded ">
            <div className="flex flex-row justify-between py-2 px-3 items-center">
              <InputLabel >Cover Photo</InputLabel>
              {
                showImage &&
                <Button onClick={() => {
                  setShowImage(null)
                  setData('cover_photo', null)
                }} className="" type={'ghost'}>
                  <span className="material-icons">&#xe5cd;</span>
                </Button>
              }
            </div>
            {
              showImage ? <img src={showImage} alt="project image" className="w-full h-full rounded py-2 px-3 rounded"/> :
                <Upload
                  onUpload={(info, url) => {
                    setShowImage(url)
                    setData('cover_photo', info.file)
                  }}
                />
            }
            <InputError message={errors?.blogAddForm?.cover_photo} className="pl-2"/>

          </div>

          <div className="flex flex-col flex-1 bg-white grow shadow-sm p-3 rounded">
            <InputSection
              label="Title"
              onChange={(e) => setData('title', e.target.value)}
              errorMessage={errors?.blogAddForm?.title} />
            <InputSection
              label="Description"
              onChange={(e) => setData('description', e.target.value)}
              errorMessage={errors.blogAddForm?.description} />
            <div className="grow py-2">
              <InputLabel className="py-2"> Categories</InputLabel>
              <Select
                mode="multiple"
                style={{ width: '100%' }}
                onChange={(v, record) => setData('categories', record)}
                tokenSeparators={[',']}
                options={categories}
              />
              <InputError message={errors?.blogAddForm?.categories} className="pl-2"/>
            </div>
          </div>



        </div>

        <div className="flex flex-col bg-white grow shadow-sm p-3 mx-6 mb-10 rounded">
          <InputSection
            label="URL host like"
            onChange={(e) => setData('host_link', e.target.value)}
            errorMessage={errors?.blogAddForm?.host_link} />
          <div className="grow py-2">
            <InputLabel className="py-2"> Meta-tags</InputLabel>
            <Select
              mode="multiple"
              style={{ width: '100%' }}
              onChange={null}
              // onChange={(v, record) => setData('categories', record)}
              tokenSeparators={[',']}
              options={null}
            />
            {/*<InputError message={errors?.blogAddForm?.categories} className="pl-2"/>*/}
          </div>
        </div>



      </div>


    </AdminLayout>
  )
}

function InputSection({label = "", errorMessage = "", onChange = () => {}}) {
  return (
    <div className="flex flex-col">
      <InputLabel className="py-2" >{label}</InputLabel>
      <Input
        onChange={onChange}
        className="py-2 px-3 rounded" />
      <InputError message={errorMessage}/>
    </div>
  )
}

export default AddBlog
