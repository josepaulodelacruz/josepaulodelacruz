import Chip from '@/Components/Chip'

function Card ({ project }) {
  console.log(project.file)
  return (
    <div className="md:w-60">
      <div className="flex flex-col bg-white shadow-sm rounded sm:grow min-w-min">

        {/*Retrieve project.file then render*/}
        <img src={project.file} alt="project" className="rounded-t h-60 w-full object-cover" />

        <div className="flex flex-row">
          <div className="flex flex-col grow px-3">
            <div className="flex justify-between">
           <span className="text-sm font-medium text-blue-900 ">
             {project.title}
          </span>
              <div className="flex flex-row justify-center self-center">
                <span className="text-gray-600 text-md">123</span>
                <span style={{ fontSize: '10px' }} className=" self-center  px-1">views</span>
              </div>
            </div>
            <span style={{ fontSize: '12px' }} className="text-gray-600">
              {project.description}
          </span>
          </div>
        </div>
        <div className="flex px-2 py-4 flex-wrap">
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
