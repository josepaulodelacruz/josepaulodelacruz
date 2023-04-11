import React from 'react'
import { Button } from 'antd'
import Chip from '@/Components/Chip'

function BlogDoc () {
  return (
    <div className="flex flex-row bg-gray-100 h-screen gap-4">

      <div className="flex flex-col bg-white flex-[1] shadow overflow-y-auto">
        <div className="flex flex-row p-2 justify-start items-center">

          <div className="h-12 w-12 bg-blue-900 rounded-full"/>
          <div className="flex flex-col pl-2">
            <span className="font-light text-md font-semibold">Jose Paulo</span>
            <p className="text-sm text-gray-600">Mar 21 . 12 min read</p>
          </div>

          <div id="" className="justify-end flex grow pr-2">
            <Button>
              Submit
            </Button>
          </div>

        </div>

        <div className="flex h-0.5 bg-gray-300 mx-3"/>

        <div id="cover_photo" className="flex bg-blue-300 h-[300px]"/>

        <div className="flex flex-col px-2 py-3">

          <span>Blog title</span>
          <div className="flex flex-row flex-wrap">
            <Chip />
            <Chip />
            <Chip />
          </div>

          <div className="flex h-0.5 bg-gray-300 mt-3 "/>

          <article className="text-start text-blue-900 font-sans text-md font-light">
            lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed euismod, nisl vel tincidunt lacinia,
            nisl nisl aliquam nisl,
            eu aliquam nisl nisl eu nunc.
            Sed euismod, nisl vel tincidunt lacinia,
            nisl nisl aliquam nisl,
          </article>

          <br/>
          <div className="flex flex-row justify-between">
            <span>Upload Images</span>
            <Button>Add Image</Button>
          </div>

          <div className="flex flex-row justify-between pt-3">
            <input type="file" name="file" id="file" className="inputfile"/>
            <Button>
              Remove
            </Button>
          </div>


        </div>

      </div>

      <div className="flex flex-col bg-white flex-[2] shadow">

      </div>


    </div>
  )
}

export default BlogDoc
