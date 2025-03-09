import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Labentry() {
    const navigator=useNavigate();
  return (
    <div className='grid h-56 grid-cols-3 content-center gap-4 justify-items-center w-full top-55 relative p-15 ' onClick={()=>{navigator("/Patides")}}>
      <div className='bg-amber-600 w-full h-25 grid content-center  rounded-3xl p-10'>add data</div>
    </div >
  )
}
