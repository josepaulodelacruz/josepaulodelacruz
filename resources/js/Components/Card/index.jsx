import Chip from '@/Components/Chip'
import { Button } from 'antd'
import { router } from '@inertiajs/react'

function Card ({ project }) {
  return (
    <div className="md:w-60 group overflow-hidden">
      <div className="flex relative flex-col bg-white shadow-sm rounded sm:grow min-w-min shadow-lg">

        {/*Retrieve project.file then render*/}
        <div className="relative overflow-hidden">
          <img src={project.file} alt="project"
               className="rounded object-cover
             aspect-square group-hover:scale-110 transition duration-300 ease-in-out
             "
          />
          <div className="flex absolute max-h-fit inset-0 group-hover:bg-white group-hover:bg-opacity-10 aspect-square group-hover:backdrop-blur-md transition duration-300 ease-in-out backdrop-opacity-75">

            <div className="flex items-center justify-center text-white grow overflow-hidden translate-y-4 ease-in-out duration-200 opacity-0  delay-75 group-hover:translate-y-0 group-hover:opacity-100">
              <div className="flex flex-row gap-6">
                <div className="flex flex-col">
                  <Button onClick={() => window.open(project.host_link)} shape={'circle text-white block'}>
                    <span className="material-icons text-sm text-center">&#xe8f4;</span>
                  </Button>
                  <span className="text-white text-xs font-bold">View</span>
                </div>
                <div className="flex flex-col">
                  <Button onClick={() => {
                    router.visit(`/panel/projects/edit/${project.id}`, {method: 'get'})
                  }} shape={'circle text-white block'}>
                    <span className="material-icons text-sm">&#xe3c9;</span>
                  </Button>
                  <span className="text-white text-xs font-bold">Edit</span>
                </div>
              </div>
            </div>
          </div>
        </div>



        <div className="flex flex-row">
          <div className="flex flex-col grow px-3 py-3">
            <div className="flex justify-between">
             <span className="text-sm font-medium text-blue-900 ">
               {project.title}
            </span>
              <div className="flex flex-row justify-center self-center">
                <span className="text-gray-600 text-md">{project.views[0].aggregate}</span>
                <span style={{ fontSize: '10px' }} className=" self-center  px-1">views</span>
              </div>
            </div>
            <span style={{ fontSize: '12px' }} className="text-gray-600 text-start">
                {project.description}
            </span>
          </div>
        </div>
        <div className="flex px-2 py-2 flex-wrap">
          {
            project.categories.map((category, index) => {
              return <Chip key={index} category={category.category}/>
            })
          }
        </div>
      </div>
    </div>

  )
}

export default Card
