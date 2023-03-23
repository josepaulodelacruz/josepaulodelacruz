import { useEffect } from "react"
import { Link } from '@inertiajs/react'
import { adminStore } from "@/stores/adminStore"
import { router } from '@inertiajs/react'

const Menus = [
  { title: "Dashboard", src: "Chart_fill" },
  { title: "Inbox", src: "Chat" },
  { title: "Blogs", src: "Blogs", gap: true },
  { title: "Schedule ", src: "Calendar" },
  { title: "Search", src: "Search" },
  { title: "Analytics", src: "Chart" },
  { title: "Files ", src: "Folder", gap: true },
  { title: "Setting", src: "Setting" },
];

function Sidebar(){
  const { isSidebarOpen, triggerSidebar } = adminStore(state => state)

  const _handleNavigate = (title) => {
    if(title === "Blogs") {
      const url = route('admin.blogs')
      router.visit(url)
      console.log(url)
    }

  }

  return (
    <div
      className={`${isSidebarOpen ? 'w-72' : 'w-20'} items-stretch flex flex-col p-5 pt-8 duration-200 relative bg-primary shadow min-h-screen`}
    >
      <div className={`absolute cursor-pointer -right-6 top-5 w-12 h-12 bg-white border-dark-purple
           border-2 rounded-full`}>
        <button
          onClick={() => triggerSidebar()}
          className="flex items-center justify-center w-full h-full">
          <span className="material-icons self-center">&#xe5d2;</span>
        </button>
      </div>

      <div className="">

        <h1
          className={`text-white origin-left font-medium text-xl duration-200 ${
            !isSidebarOpen && "scale-0"
          }`}
        >
         Jose
        </h1>
      </div>

      <ul className="pt-6">
        {Menus.map((Menu, index) => (
          <Link href={null} as="button" onClick={() => _handleNavigate(Menu.title)}
            key={index}
            className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4
              ${Menu.gap ? "mt-9" : "mt-2"} ${
              index === 0 && "bg-light-white"
            } `}
          >
            <div className="h-6 w-6 rounded-full bg-white"/>
            <span className={`${!isSidebarOpen && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
          </Link>
        ))}
      </ul>

     <div className="flex text-white h-full items-end">
       <div className="h-6 w-6 rounded-full bg-white"/>
       <span className={`${!isSidebarOpen && "hidden"} pl-3 origin-left duration-200`}>
         Logout
        </span>
     </div>


    </div>
  )
}

export default Sidebar
