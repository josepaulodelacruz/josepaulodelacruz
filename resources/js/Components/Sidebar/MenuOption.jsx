import {Link, usePage} from "@inertiajs/react";

function MenuOption ({Menu, index, handleToggleSubMenu, isSidebarOpen, toggledMenu, href = null}) {
  const {url} = usePage()
  return (
    <div
      key={index}
      className="flex flex-col flex-1">
      <a
        href={href}
        onClick={() => !href && handleToggleSubMenu(Menu.title)}
        className={`${url === Menu.menuUrl ? 'bg-white bg-opacity-10' : ''}  hover:bg-blue-500 flex rounded-md p-2 cursor-pointer hover:bg-light-white text-white text-sm items-center
              ${Menu.gap ? "mt-9" : "mt-2"} ${
          index === 0 && "bg-light-white"
        } `}
      >
        <div className="h-6 w-6 rounded-full bg-white"/>
        <span className={`${!isSidebarOpen && "hidden"} origin-left duration-200 pl-3`}>
                {Menu.title}
            </span>
        {/*Force the element to be at the edge*/}
        <div className="flex-1"/>
        <span
          className={`${!isSidebarOpen && 'hidden'} ${toggledMenu === Menu.title ? 'rotate-90' : 'rotate-0'} duration-75 material-icons justify-self-end self-center`}>&#xe409;</span>
      </a>
      {
        //Check if the Menu.subMenu is in the array and if it is, then render the subMenu
        toggledMenu === null || toggledMenu === Menu.title &&
        Menu.subMenus && Menu.subMenus.map((subMenu, subIndex) => (
          <Link
            as="button"
            href={subMenu.href ?? null} key={subIndex}
            className={`${!isSidebarOpen && 'hidden'} hover:bg-blue-500 rounded
                  duration-200 text-gray-300 bg-light-white text-sm py-2 flex flex-row justify-start content-center`}>
            <div className={`${!isSidebarOpen && 'hidden'} h-4 w-4 ml-4 mr-2 rounded-full bg-white self-center `}/>
            {subMenu.title}
          </Link>
        ))}
    </div>
  )
}

export default MenuOption
