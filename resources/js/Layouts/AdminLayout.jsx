import Sidebar from '@/Components/Sidebar'
import Navbar from "@/Components/Navbar";
import {adminStore} from "@/stores/adminStore";
import StickyBox from "react-sticky-box";

function AdminLayout({children}) {

  return(
    <div style={{height: '100vh'}} className="flex">

      <Sidebar />

      <div className="flex flex-col w-full bg-gray-100">
        <Navbar/>
        <main className="w-full h-full">
          <div className="h-full">
            <section style={{maxWidth: '1600px'}} className="h-full">
              {children}
            </section>
          </div>
        </main>
      </div>

    </div>
  )
}

export default AdminLayout
