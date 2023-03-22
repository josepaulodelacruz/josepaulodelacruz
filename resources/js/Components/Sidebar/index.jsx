import { Link } from '@inertiajs/react'
import DangerButton from "@/Components/DangerButton";

function Sidebar(){
  return (
    <div className="flex justify-between flex-col bg-primary shadow min-h-screen w-1/6">
      <Link href={route('home')} className="font-bold pl-6 pt-4 text-white shadow text-xl mt-auto">
        Home
      </Link>
      <ul className="flex flex-col pt-4 h-full pl-6">
        <Link href="" className="font-bold items-center flex text-white shadow text-md py-1">
          <span className="material-icons mr-2">&#xe7fd;</span>
          Profiles </Link>
        <Link href="" className="font-bold items-center flex text-white shadow text-md py-1">
          <span className="material-icons mr-2">&#xeb81;</span>
          Blogs </Link>
        <Link href="" className="font-bold items-center flex text-white shadow text-md py-1">
          <span className="material-icons mr-2">&#xef6e;</span>
          Projects </Link>
      </ul>
      <Link href={route('logout')} method="post" className="flex w-40 rounded bg-red-800 text-white font-bold text-sm items-center ml-6 p-3 mb-10">
        <span className="material-icons mr-2">logout</span>
        LOGOUT
      </Link>
    </div>
  )
}

export default Sidebar
