import React, { useContext, useEffect } from 'react'
import {useNavigate } from 'react-router-dom'
import PatientContext from '../context/info/PatientContext'

export default function Home() {
  const Navigate=useNavigate()
  const getinfo = useContext(PatientContext)
  const {setrole}=getinfo
  useEffect(()=>{
    localStorage.clear()
  },[])
  return (
    <>
      <div className="grid justify-items-center gap-9 place-content-center text-white content-center w-full min-h-[calc(100vh-64px)]">
        <div className={`bg-[url(/src/components/doctor.png)] bg-cover bg-no-repeat fixed -z-1 inset-0 opacity-50 `}></div>
        <div className='grid grid-cols-2 gap-9 justify-items-center [&>button]:bg-blue-400 [&>button]:rounded-full  [&>button]:h-20 [&>button]:w-60 [&>button]:text-3xl [&>button]:hover:h-25 [&>button]:hover:w-65 [&>button]:hover:bg-blue-700 [&>button]:delay-75 [&>button]:duration-75 [&>button]:hover:translate-y-0.5 [&>button]:cursor-pointer'>
          <button onClick={()=>{localStorage.setItem('role',"Doctor");Navigate("/Login");}} >
            Doctor
          </button>
          <button onClick={()=>{localStorage.setItem('role',"Admin");Navigate("/Login")}}>
            Admin
          </button>
          <button onClick={()=>{localStorage.setItem('role',"Patient");Navigate("/Login")}}>
            Patient
          </button>
          <button onClick={()=>{localStorage.setItem('role',"Assistante");Navigate("/Login")}}>
            Lab assistante 
          </button>
        </div>
      </div>

    </>
  )
}
