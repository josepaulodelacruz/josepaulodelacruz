import AdminLayout from '@/Layouts/AdminLayout'
import { Button, Select } from 'antd'
import React from 'react'
import InputLabel from '@/Components/InputLabel'
import TextInput from '@/Components/TextInput'
import InputError from '@/Components/InputError'

function AddBlog () {
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
            onClick={null} className="bg-blue-900 text-md text-white ">
            Submit Blog
          </Button>
        </div>

        <div className="flex flex-col p-6">

          <div className="flex flex-col bg-white shadow-lg p-3 rounded">
            <InputSection label="Title" />
            <InputSection label="Description" />

            <div className="grow py-2">
              <InputLabel > Categories</InputLabel>
              <Select
                mode="multiple"
                style={{ width: '100%' }}
                onChange={null}
                // onChange={(v, record) => setData('categories', record)}
                tokenSeparators={[',']}
                options={null}

              />
              {/*<InputError message={errors?.projectFormBag?.categories} className="pl-2"/>*/}

            </div>

          </div>

        </div>



      </div>


    </AdminLayout>
  )
}

function InputSection({label}) {
  return (
    <div className="flex flex-col">
      <InputLabel className="py-2" >{label}</InputLabel>
      <TextInput />
      <InputError message={`${label} is required`}/>
    </div>
  )
}

export default AddBlog
