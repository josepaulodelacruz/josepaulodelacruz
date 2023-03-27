
function ListTile() {
  return (
    <div>
      <div className="flex flex-row justify-between py-2">
        <span className="text-sm font-medium">1. josepaulodelacruz.com</span>
        <span style={{fontSize: '10px'}} className="text-gray-500 font-light ml-2">123 views</span>
      </div>
      <div style={{height: '1px'}} className="flex bg-gray-300 grow "/>
    </div>
  )
}

export default ListTile
