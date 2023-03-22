import Sidebar from '@/Components/Sidebar'
import Navbar from "@/Components/Navbar";

function AdminLayout({children}) {
  return(
    <div className="flex">

      <Sidebar />

      <div className="flex flex-col w-full">
        <Navbar/>
        <main className="w-full h-full bg-gray-100">
          {children}
        </main>
      </div>

    </div>
  )
}

export default AdminLayout
