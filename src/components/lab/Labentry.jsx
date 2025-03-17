import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Patientcard from '../Patientcard';
import PatientContext from '../../context/info/PatientContext';

export default function Labentry() {
  const navigator = useNavigate();
  const fetching = useContext(PatientContext)
  const { fetchdata } = fetching;
  useEffect(() => {
    fetchdata();
  }, [])
  const { patientdata } = fetching
  return (
    <div className='grid h-56 grid-cols-3 content-center gap-4 justify-items-center w-full top-55 relative'>
      <div className='grid content-center w-sm justify-items-center text-white text-4xl cursor-pointer p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700' onClick={() => { navigator("/Patides") }}>
        <a>Add patinet</a>
      </div>
      {patientdata.map((patient) => {
        return (<div key={patient._id}><Patientcard patient={patient}></Patientcard></div>);
      })}
    </div>
  )
  // return (
  //   <div className='grid h-56 grid-cols-3 content-center gap-4 justify-items-center w-full min-h-[calc(100vh-64px)] relative p-15 ' onClick={()=>{navigator("/Patides")}}>

  //   </div >
  // )
}
