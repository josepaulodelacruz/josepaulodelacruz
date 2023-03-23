import Sidebar from '@/Components/Sidebar'
import Navbar from "@/Components/Navbar";
import {adminStore} from "@/stores/adminStore";

function AdminLayout({children}) {
  const { triggerSidebar } = adminStore(state => state)


  return(
    <div className="flex">
      <Sidebar />

      <div className="flex flex-col w-full bg-gray-100">
        <Navbar/>
        <main className="w-full h-full">
          <div className="pl-9 pr-9 pt-9 h-full">
            <section className="max-w-7xl h-full">
              {children}
            </section>
          </div>
        </main>
      </div>

    </div>
  )
}

export default AdminLayout
