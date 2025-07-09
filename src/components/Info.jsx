import React, { useContext, useEffect } from 'react'
import PatientContext from '../context/info/PatientContext'
import { useNavigate } from 'react-router-dom'

export default function Info(props) {
  const navigate=useNavigate()
  const getinfo = useContext(PatientContext)
  const { logininfo,info} = getinfo
  useEffect(()=>{
    if(localStorage.getItem('token')){
      info();
    }else{
      navigate("/Login");
    }
  },[])
//  console.log("hello")
  return (
    <>
    <div className='grid content-center w-50% bg-amber-300'>
      <div className="justify-items-center">
        <h1>{logininfo.name}</h1>
        <h1>{logininfo.email}</h1>
      </div>
    </div>
    </>
  )
}
