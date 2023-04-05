import { useEffect, useState } from 'react'

function Chip({category, unSelect, unSelectable = false}){
  return (
    <>
      {
        !unSelectable ?
          <div className="w-[70px] relative bg-blue rounded-full flex justify-center py-1 mr-2 mt-1">
            <span style={{fontSize: '8px'}} className="text-white">{category}</span>
          </div> :
          <div className="flex flex-row w-[100px] bg-white rounded-full items-center pr-3 shadow-lg mr-1 mt-1">
            <div className="w-[70px] grow relative bg-blue rounded-full flex justify-center py-1 mr-2 ">
              <span style={{fontSize: '8px'}} className="text-white">{category}</span>
            </div>

            <button onClick={() => unSelect(category)} className="flex self-center">
              <span style={{fontSize: '16px'}} className="material-icons p-0">&#xe5c9;</span>
            </button>
          </div>
      }
    </>
  )
}

export default Chip
