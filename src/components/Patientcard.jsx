import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import PatientContext from './PatientContext';

export default function Patientcard(props) {
    const navigator = useNavigate()
    return (
        <div onClick={()=>navigator("/Patides")}>
            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                <div className="relative size-40">
                    <svg className="size-full rotate-180" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-orange-100 dark:text-neutral-700" strokeWidth="3" strokeDasharray="50 100" strokeLinecap="round"></circle>
                        <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-orange-600 dark:text-orange-500" strokeWidth="1" strokeDasharray="25 100" strokeLinecap="round"></circle>
                    </svg>
                    <div className="absolute top-9 start-1/2 transform -translate-x-1/2 text-center">
                        <span className="text-2xl font-bold text-orange-600 dark:text-orange-500">{props.patient.Age}</span>
                        <span className="text-xs text-orange-600 dark:text-orange-500 block">{props.patient.name}</span>
                    </div>
                </div>
                <a >
                    <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Need a help in Claim?</h5>
                </a>
                <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Go to this step by step guideline process on how to certify for your weekly benefits:</p>
            </div>
        </div>
    )
}
