import AdminLayout from "@/Layouts/AdminLayout";
import Card from "@/Components/Card";
import Chip from '@/Components/Chip'
import { Button } from 'antd'
import ListTile from '@/Components/ListTile'

function Projects(){
  return(
    <AdminLayout>
      <div className="flex flex-col">
        <div className="flex sm:justify-between content-center flex-col">

          <div className="p-6 flex flex-col md:flex-row">
            <div className="flex self-center flex-col ">
              <span className="text-2xl font-semibold">Projects</span>
              <span style={{fontSize: '12px'}} className="text-gray-600">Home / Projects</span>
            </div>

            <div className="flex flex-col sm:w-full md:flex-row md:grow md:justify-end">
              <div className="flex flex-row self-center ">
                <button className="mr-3 p-2 bg-white shadow self-center text-md rounded flex">
                  <span className="material-icons self-center px-1" style={{fontSize: '1rem'}}>&#xe8b6;</span>
                  Filter
                </button>
                <button className="bg-purple p-2 shadow self-center text-white  text-md rounded flex">
                  <span className="material-icons self-center px-1" style={{fontSize: '1rem'}}>&#xe8b6;</span>
                  Edit
                </button>
              </div>
            </div>
          </div>


          <div className="flex h-0.5 bg-gray-300 grow mx-6"/>

          <div className="flex flex-col md:flex-row grow mx-6 my-8 gap-4">
            <div className="flex-1 flex-col bg-white rounded shadow-md p-4">
              <span className="text-sm font-light">Most View Projects</span>
              <ListTile />
              <ListTile />
              <ListTile />
              <ListTile />
              <ListTile />
            </div>
            <div className="flex-1">
              <div className="flex-1 flex-col bg-white rounded shadow-md p-4">
                <span className="text-sm font-light">Most recent projects</span>
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
                <span className="text-xl font-semibold flex self-center mr-4">List of projects</span>
                <Chip />
                <Chip />
                <Chip />
              </div>

              <Button href={route('panel.projects.add')} className="z-1 bg-blue-900 text-white md:mr-6" >
                Add Project
              </Button>

            </div>

            <div className="flex flex-col md:flex-row flex-wrap gap-4 md:pr-6">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>

          </div>

        </div>

      </div>
    </AdminLayout>
  )
}



export default Projects
