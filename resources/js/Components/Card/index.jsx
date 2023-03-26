import Chip from "@/Components/Chip";

function Card() {
  return (
    <div className="flex flex-col bg-white shadow-sm rounded">

      <div className="grow h-60 w-full"/>

      <div className="flex flex-row">
        <div className="flex flex-col grow px-3 p-4">
          <div className="flex justify-between">
           <span className="text-sm font-medium text-blue-900 ">
            Title project
          </span>
            <div className="flex flex-row justify-center self-center">
              <span className="text-gray-600 text-md">123</span>
              <span style={{fontSize: '10px'}} className=" self-center  px-1">views</span>
            </div>
          </div>
          <span style={{fontSize: '12px'}} className="text-gray-600">
            Description projects
          </span>
        </div>
      </div>
      <div className="flex px-2 flex-wrap">
        <Chip />
        <Chip />
        <Chip />
        <Chip />
        <Chip />
      </div>


    </div>
  )
}

export default Card
