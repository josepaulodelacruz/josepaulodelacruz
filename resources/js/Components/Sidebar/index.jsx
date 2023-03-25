import {useEffect, useState} from "react"
import {Link, router, usePage} from '@inertiajs/react'
import {adminStore} from "@/stores/adminStore"
import MenuOption from "@/Components/Sidebar/MenuOption";


const Menus = [
  {
    title: "Projects", menuUrl: '/panel/projects', subMenus: [
      {title: "View Projects", href: route('panel.projects')},
      {title: "Add/Edit Projects"},
    ]
  },
  {
    title: "Blogs", menuUrl: '/panel/blogs',  subMenus: [
      {title: "View Blogs", href: route('panel.blogs')},
      {title: "Add/Edit Blogs"},
    ]
  },
  {title: "Categories", gap: true},
  {title: "Tutorials",},
  {title: "Analytics",},
  {title: "Files ", gap: true},
  {title: "Setting",},
];


function Sidebar() {
  const {isSidebarOpen, triggerSidebar, toggledMenuOption, setToggledMenuOption} = adminStore(state => state)
  const [toggledMenu, setToggledMenu] = useState(toggledMenuOption)
  const {url} = usePage()

  useEffect(() => {
    setToggledMenu(toggledMenuOption)
  }, [toggledMenuOption])

  const _handleToggleSubMenu = (title) => setToggledMenuOption(toggledMenu === title ? '' : title)

  return (
    <div
      className={`${isSidebarOpen ? 'w-72' : 'w-20'} items-stretch flex flex-col p-5 pt-8 duration-200 relative bg-primary shadow min-h-screen`}
    >
      <div className={`absolute cursor-pointer -right-6 top-8 w-12 h-12 bg-white border-dark-purple
           border-2 rounded-full`}>
        <button
          onClick={() => triggerSidebar()}
          className="flex items-center justify-center w-full h-full">
          <span className={`${isSidebarOpen ? 'rotate-180' : 'rotate-0'} material-icons self-center`}>&#xe409;</span>
        </button>
      </div>

      <Link
        as="button"
        href={route('panel')}
        className={`text-white origin-left self-start pl-2 font-medium text-xl duration-200 ${
          !isSidebarOpen && "scale-0"
        }`}
      >
        Jose
      </Link>

      {/*I want the material-icons at the edge right side*/}
      <ul className="pt-6 flex-col flex">
        {Menus.map((Menu, index) => (
          <MenuOption
            key={index}
            Menu={Menu}
            index={index}
            handleToggleSubMenu={_handleToggleSubMenu}
            toggledMenu={toggledMenu}
            isSidebarOpen={isSidebarOpen}
          />

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
