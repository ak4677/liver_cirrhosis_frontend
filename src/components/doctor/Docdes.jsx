import React, { useContext, useEffect } from 'react'
import Patientcard from '../Patientcard'
import PatientContext from '../../context/info/PatientContext';
export default function Docdes() {
    const fetching=useContext(PatientContext)
    const {fetchdata,doclogin}=fetching;
    useEffect(()=>{
        fetchdata();
    },[])
    const {patientdata}=fetching
    return (
        <div className='grid h-56 grid-cols-3 content-center gap-4 justify-items-center w-full top-55 relative'>
            {patientdata.map((patient)=>{
                return (<div key={patient._id}><Patientcard patient={patient}></Patientcard></div>);
            })}
        </div>
    )
}