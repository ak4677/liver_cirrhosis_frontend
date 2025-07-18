import React, { useContext, useEffect } from 'react'
import PatientContext from '../context/info/PatientContext'
import { useNavigate } from 'react-router-dom'

export default function Info(props) {
  const navigate = useNavigate()
  const getinfo = useContext(PatientContext)
  const { logininfo, info } = getinfo
  useEffect(() => {
    if (localStorage.getItem('token')) {
      info();
    } else {
      navigate("/Login");
    }
  }, [])
  //  console.log("hello")
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-6 max-w-sm w-full">
        <div className='text-center bg-gray-400 rounded-t-2xl'>
          <h1 className='relative text-4xl font-semibold mb-3'>{localStorage.getItem('role')}</h1>
        </div>
        <div className='flex justify-center mt-4 mb-4'>
          <div className="relative w-24 h-24 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
            <svg className="absolute w-28 h-28 text-gray-400 -left-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
          </div>
        </div>
        <div className="text-center space-y-4 bg-gray-400 rounded-b-2xl">
          <h2 className="text-xl font-semibold">{logininfo.name}</h2>
          <p className="text-gray-900">{logininfo.email}</p>
          <p className="text-gray-900">{logininfo.Number}</p>
        </div>
      </div>
    </div>

  )
}
