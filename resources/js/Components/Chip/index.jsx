import { useEffect, useState } from 'react'

function Chip({category}){
  return (
    <div className="w-[70px] bg-blue rounded-full flex justify-center py-1 mr-2 mt-1">
      <span style={{fontSize: '8px'}} className="text-white">{category}</span>
    </div>
  )
}

export default Chip
