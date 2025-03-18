import React, { useContext, useEffect } from 'react'
import Patientcard from '../Patientcard'
import PatientContext from '../../context/info/PatientContext';
export default function Docdes() {
    const fetching = useContext(PatientContext)
    const { fetchdata, doclogin } = fetching;
    useEffect(() => {
        fetchdata();
    }, [])
    const { patientdata } = fetching
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-5'>
            {patientdata.map((patient) => {
                return (<div key={patient._id}><Patientcard patient={patient}></Patientcard></div>);
            })}
        </div>
    )
}