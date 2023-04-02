import {useEffect, useState} from "react"
import {Link, router, usePage} from '@inertiajs/react'
import {adminStore} from "@/stores/adminStore"
import MenuOption from "@/Components/Sidebar/MenuOption";
import { Button } from 'antd'


const Menus = [
  {
    title: "Projects", menuUrl: '/panel/projects', icon: '&#xe02f;', subMenus: [
      {title: "View Projects", href: route('panel.projects'), icon: '&#xe8f4;'},
      {title: "Add/Edit Projects", icon: '&#xe598;'},
    ]
  },
  {
    title: "Blogs", menuUrl: '/panel/blogs', icon: '&#xf009;',  subMenus: [
      {title: "View Blogs", href: route('panel.blogs'), icon: '&#xe8f4;'},
      {title: "Add/Edit Blogs", icon: '&#xe598;'},
    ]
  },
  {title: "Categories", gap: true, icon: '&#xe574;', menuUrl: '/panel/categories', href: route('panel.categories') },
  {title: "Tutorials", icon: '&#xefec;'},
  {title: "Analytics", icon: '&#xef3e;'},
  {title: "Files ", gap: true, icon: '&#xe2c7;' },
  {title: "Setting", icon: '&#xe8b8;'},
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
      className={`${isSidebarOpen ? 'w-72 pt-8 p-5' : 'w-0 md:w-20 md:pt-8 md:p-5'} z-10 items-stretch flex flex-col duration-200 fixed md:sticky top-0 bg-blue-900 shadow min-h-screen`}
      style={{height: '100vh'}}
    >
      <div className={`absolute cursor-pointer -right-6 top-8 w-12 h-12 bg-white border-dark-purple border-2 rounded-full`}>
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
        Jose Paulo
      </Link>

      <ul className="pt-6 flex-col flex">
        {Menus.map((Menu, index) => (
          <MenuOption
            key={index}
            Menu={Menu}
            index={index}
            handleToggleSubMenu={_handleToggleSubMenu}
            toggledMenu={toggledMenu}
            isSidebarOpen={isSidebarOpen}
            href={Menu.href ?? null}
          />

        ))}
      </ul>

      <div className="flex text-white h-full items-end">
        <a onClick={ () => router.post('/logout') } className=" flex flex-row grow items-center justify-start text-white">
          <span className="material-icons">&#xe9ba;</span>
          <span className={`${!isSidebarOpen && "hidden"}  pl-3 origin-left duration-200`}>
         Logout
        </span>
        </a>

      </div>


    </div>
  )
}


export default Sidebar
