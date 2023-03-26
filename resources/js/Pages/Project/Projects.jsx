import AdminLayout from "@/Layouts/AdminLayout";
import Card from "@/Components/Card";

function Projects(){
  return(
    <AdminLayout>
      <div className="flex flex-col">
        {/*<h2 className="text-text_primary_color font-sans font-black">List of Projects</h2>*/}
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


          {/*Create a horizontal line with a full width*/}
          {/*<div className="w-full h-0.5 bg-gray-300 my-5"/>*/}

          <div className="flex flex-col pl-6">
            <span className="text-md font-semibold">List of projects</span>
            <div className="flex grow sm:flex-col md:flex-row">
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
