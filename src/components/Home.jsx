import React from 'react'
import {useNavigate } from 'react-router-dom'

export default function Home() {
  const Navigate=useNavigate()
  return (
    <>

      <div className="grid justify-items-center gap-9 place-content-center text-white content-center w-full min-h-[calc(100vh-64px)]">
        <div className={`bg-[url(/src/components/doctor.png)] bg-cover bg-no-repeat fixed -z-1 inset-0 opacity-50 `}></div>
        <div className='grid gap-9 justify-items-center [&>button]:bg-blue-400 [&>button]:rounded-full  [&>button]:h-20 [&>button]:w-60 [&>button]:text-3xl [&>button]:hover:h-25 [&>button]:hover:w-65 [&>button]:hover:bg-blue-700 [&>button]:delay-75 [&>button]:duration-75 [&>button]:hover:translate-y-0.5 [&>button]:cursor-pointer'>
          <button onClick={()=>Navigate("/Login")}>
            login
          </button>
          <button className="">
            sign up
          </button>
        </div>
      </div>

    </>
  )
}
