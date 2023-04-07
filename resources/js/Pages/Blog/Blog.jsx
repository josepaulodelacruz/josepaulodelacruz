import AdminLayout from "@/Layouts/AdminLayout";
import Chip from '@/Components/Chip'
import { Button } from 'antd'
import Card from '@/Components/Card'
import ListTile from '@/Components/ListTile'
import { useState } from 'react'
import Modal from '@/Components/Modal'
import InputLabel from '@/Components/InputLabel'
import TextInput from '@/Components/TextInput'

function Blog({categories}) {
  const [selectedCategories, setSelectedCategories] = useState(categories)
  const [showFilter, setShowFilter] = useState(false)

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


          <div className="flex h-0.5 bg-gray-300 grow mx-6"/>

          <div className="flex flex-col md:flex-row grow mx-6 my-8 gap-4">
            <div className="flex-1 flex-col bg-white rounded shadow-md p-4">
              <span className="text-sm font-light">Most View Blogs</span>
              <ListTile />
              <ListTile />
              <ListTile />
              <ListTile />
              <ListTile />
            </div>
            <div className="flex-1">
              <div className="flex-1 flex-col bg-white rounded shadow-md p-4">
                <span className="text-sm font-light">Most recent Blogs</span>
                <ListTile/>
                <ListTile />
                <ListTile />
                <ListTile />
                <ListTile />
              </div>
            </div>

          </div>

          {/*Create a horizontal line with a full width*/}
          <div className="flex h-0.5 bg-gray-300 grow mx-6"/>

          <div className="flex flex-col md:pl-6 md:mt-3">
            <div className="flex flex-col md:flex-row ">
              <div className="flex flex-row flex-1 flex-wrap items-center mb-4">
                <span className="text-xl font-semibold flex self-center mr-4">List of Blogs </span>
                {
                  selectedCategories.filter(category => category.isSelected).map((category, index) => {
                    return <Chip
                      unSelect={(c) => {
                        const newCategories = [...selectedCategories]
                        newCategories[index].isSelected = !newCategories[index].isSelected
                        setSelectedCategories(newCategories)
                      }}
                      key={index} category={category.value} unSelectable={true}/>
                  })
                }
              </div>

              <Button as="href" href={route('panel.blogs.add')} className="bg-blue-900 text-white md:mr-6" >
                Add Blogs
              </Button>

            </div>

            <div className="flex flex-col md:flex-row flex-wrap gap-4 md:pr-6">
              {/*<Card />*/}
              {/*<Card />*/}
              {/*<Card />*/}
              {/*<Card />*/}
              {/*<Card />*/}
            </div>

          </div>

        </div>

      </div>

      <Modal
        show={showFilter}
        closeable={true}
        onClose={() => setShowFilter(false)}
      >
        <div className="flex flex-col p-6">
          <InputLabel value="Search Category"/>
          <TextInput className="mb-4"/>

          <InputLabel value="List of categories"/>
          <div className="flex flex-col min-h-[0px] max-h-[200px] overflow-y-auto ">
            {
              selectedCategories.map((category, index) => {
                return (
                  <Button
                    key={index}
                    onClick={() => {
                      const newCategories = [...selectedCategories]
                      newCategories[index].isSelected = !newCategories[index].isSelected
                      setSelectedCategories(newCategories)
                    }}
                    className={`${!category.isSelected ? 'text-blue-900 bg-white' : 'text-white bg-blue-600'} duration-200`}>
                    {category.value}
                  </Button>
                )
              })
            }
          </div>
        </div>
      </Modal>
    </AdminLayout>
  )
}

export default Blog;
