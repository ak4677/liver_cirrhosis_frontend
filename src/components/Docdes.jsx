import React from 'react'
import Patides from './Patides'
import Patientcard from './Patientcard'

export default function Docdes() {
    
    return (
        <div className='grid h-56 grid-cols-3 content-center gap-4 justify-items-center w-full mt-80 relative'>
            <Patientcard></Patientcard>
            <Patientcard></Patientcard>
            <Patientcard></Patientcard>
            <Patientcard></Patientcard>
            <Patientcard></Patientcard>
        </div>
    )
}
