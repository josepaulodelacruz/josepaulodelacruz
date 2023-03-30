import { adminStore } from "@/stores/adminStore";
import './index.scss'

function Navbar(){
  const { triggerSidebar } = adminStore(state => state)

  return (
    <nav className="flex grow py-2 px-3 bg-white w-full shadow-md">
       <div className="pl-6 py-6 self-center">
        {/*<span className="material-icons text-2xl text-gray-600 cursor-pointer" onClick={() => adminStore.triggerSidebar()}>&#xe5d2;</span>*/}
       </div>

      {/*Create a input center inside the nav*/}
      {/*<div className="grow self-center flex justify-center">*/}
      {/*  <input type="text" className="w-1/2 h-10 rounded border-2 border-gray-300 px-4 py-2 focus:outline-none focus:border-gray-400"/>*/}
      {/*</div>*/}


     </nav>
  )
}

export default Navbar
