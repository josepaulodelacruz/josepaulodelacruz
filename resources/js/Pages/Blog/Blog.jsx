import AdminLayout from "@/Layouts/AdminLayout";


function Blog() {
  return (
    <AdminLayout>
      <div className="flex flex-row w-full h-10 bg-red-500">
        <div className="bg-red-500 w-4 "/>
        <div className="bg-red w-4 "/>
      </div>
    </AdminLayout>
  )
}

export default Blog;
