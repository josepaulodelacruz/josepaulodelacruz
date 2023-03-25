import { adminStore } from "@/stores/adminStore";
import './index.scss'

function Navbar(){
  return (
    <nav className="flex grow py-2 px-3 bg-white w-full shadow-md">
       <div className="pl-6 self-center">
         <span>Projects</span>
       </div>

      {/*Create a input center inside the nav*/}
      <div className="grow self-center flex justify-center">
        <input type="text" className="w-1/2 h-10 rounded border-2 border-gray-300 px-4 py-2 focus:outline-none focus:border-gray-400"/>
      </div>


     </nav>
  )
}

export default Navbar
