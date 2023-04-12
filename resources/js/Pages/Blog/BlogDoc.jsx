import React, { useState } from 'react'
import { Button } from 'antd'
import Chip from '@/Components/Chip'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './index.scss'

const module = {
  toolbar: [
    [{ 'header': [1, 2, false] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ 'list': 'ordered' }, { 'list': 'bullet' },
      { 'indent': '-1' }, { 'indent': '+1' }],
    ['link', 'image', 'video'],
    [{ 'code-block': 'code' }], // add code-block option
    ['clean'],
  ],
}

const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "align",
  "strike",
  "script",
  "blockquote",
  "background",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "color",
  "code-block"
]

function BlogDoc ({blog}) {
  const [value, setValue] = useState('');
  const dateCreated = new Date(blog.created_at)


  return (
    <div className="flex flex-row bg-gray-100 h-screen  gap-4">

      <div className="flex flex-col bg-white flex-[1] shadow overflow-y-auto">

        <div className="flex flex-col px-2 py-3">

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


          <ReactQuill
            theme="snow"
            value={value}
            onChange={setValue}
            modules={module}
            formats={formats}

          />

        </div>

      </div>

      <div className="flex flex-col justify-center items-center bg-gray-300 flex-[2] shadow">
        <section className="flex flex-col max-w-xl w-3/4 h-screen bg-white my-3 overflow-y-auto break-words rounded-md">

          <div className="flex flex-row p-2 justify-start items-center">

            <div className="h-12 w-12 bg-blue-900 rounded-full"/>
            <div className="flex flex-col pl-2">
              <span className="font-light text-md font-semibold">{blog.user.name}</span>
              <p className="text-sm text-gray-600">{dateCreated.getMonth()}-{dateCreated.getDate()} . 2 min read</p>
            </div>

            <div id="" className="justify-end flex grow pr-2">
              <Button onClick={() => console.log(value)}>
                Submit
              </Button>
            </div>

          </div>

          <div id="cover_photo" className="flex bg-blue-300 h-[300px]"/>

          <div className="flex flex-col px-2 py-3">

            <span>{blog.title}</span>
            <div className="flex flex-row flex-wrap">
              {
                blog.categories.map((category, index) => {
                  return <Chip key={index}  />
                })
              }
            </div>

            {/*<div className="flex h-0.5 bg-gray-300 mt-3 "/>*/}

            <article className="text-start mt-3 text-gray-500 font-sans text-md font-light">
              {blog.description}
            </article>

            <br />

            <section dangerouslySetInnerHTML={{__html: value}} className="break-words">

            </section>

          </div>


        </section>

      </div>


    </div>
  )
}

export default BlogDoc

