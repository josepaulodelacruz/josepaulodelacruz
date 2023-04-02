import AdminLayout from '@/Layouts/AdminLayout'
import { Input, Select, Button, Upload } from 'antd'
import './index.scss'
import { router, useForm } from '@inertiajs/react'


function ProjectAdd () {
  const { data, setData, post, processing, errors, reset } = useForm({
    name: '',
    description: '',
    host_link: '',
    source_code: '',
    project_image_path: ''
  });

  //submit project
  const _handleSubmitProject = (e) => {
    e.preventDefault()
    console.log(data.name)
    console.log('submit project')
    console.log(errors)

  }


  return (
    <AdminLayout>
      <form onSubmit={_handleSubmitProject} className="flex flex-col pt-6 pl-6">

        <div className="flex self-start flex-col ">
          <span className="text-2xl font-semibold">Projects</span>
          <span style={{fontSize: '12px'}} className="text-gray-600">Home / Projects / Add</span>
        </div>

        <div className="flex h-0.5 bg-gray-300 grow mt-3 mr-6"/>

        <div className="flex flex-row justify-between content-center items-center pt-6 pr-6">
          <span className="text-2xl font-semibold">Add Project</span>
          <Button onClick={_handleSubmitProject} className="bg-blue-900 text-md text-white ">
            Submit Project
          </Button>
        </div>

        <div className="flex flex-col md:flex-row  pt-6 gap-4 mr-6">
          <div className="flex flex-col flex-1 rounded p-4 bg-white shadow-md">
            <InputSection
              field="Title"
              value={data.name}
              required
              onChange={(e) => setData('name', e.target.value) }/>
            <InputSection field="Description"/>

            <div className="m-2 flex flex-row items-center">
              <span className="text-md font-bold text-blue-900">Category:</span>
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
          <div className="flex flex-col flex-1 rounded p-4 bg-white shadow-md">
            <InputSection field="URL Hosting Link"/>
            <InputSection field="Source Code"/>
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
          <div className="flex bg-white shadow rounded h-60 mr-6 ">
            <div className="flex justify-center items-center w-full ">
              Upload
            </div>

          </div>


        </div>

      </form>
    </AdminLayout>
  )
}

function InputSection({field = "", onChange = null, value = "", required = false}) {
  return (
    <div className="m-2">
      <span className="text-md font-bold text-blue-900">{field}</span>
      <Input
        value={value}
        rootClassName="rounded-md"
        onChange={onChange} />
    </div>
  )
}


export default ProjectAdd
