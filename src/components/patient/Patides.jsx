import React from 'react'
import { useEffect, useContext, useState } from 'react'
import { useParams } from 'react-router-dom';
import PatientContext from '../../context/info/PatientContext';
export default function Patides() {
    const { id } = useParams();
    const fetching = useContext(PatientContext)
    const { predictedData, logininfo, patientdata } = fetching
    const [patient, setpatient] = useState([]);
    useEffect(() => {
        if (localStorage.getItem('role') === "Patient") {
            setpatient(logininfo);
        } else {
            const selected = patientdata.find(p => p._id === id)
            setpatient(selected)
        }
    }, [])
    console.log(patient)
    return (
        <div className='flex flex-col lg:flex-row justify-center items-center m-4 gap-50 bg-blue-100'>
            {/* Health Score Progress Bar */}
            <div className='flex flex-col lg:flex-row justify-center items-center m-4 gap-50'>
                {/* Health Score Progress Bar */}
                <div className="relative mt-3">
                    <svg className="rotate-[135deg] size-40 lg:size-56" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                        {/* Background circle */}
                        <circle
                            cx="18"
                            cy="18"
                            r="16"
                            fill="none"
                            className="stroke-current text-gray-200 dark:text-neutral-700"
                            strokeWidth="2"
                            strokeDasharray="100 100"
                            strokeLinecap="round"
                        ></circle>

                        {/* Safe percentage */}
                        <circle
                            cx="18"
                            cy="18"
                            r="16"
                            fill="none"
                            className="stroke-current text-green-500"
                            strokeWidth="2"
                            strokeDasharray={`${patient.risk_percentages?.[0] || 0} 100`}
                            strokeLinecap="round"
                        ></circle>

                        {/* Ok percentage (offset by safe) */}
                        <circle
                            cx="18"
                            cy="18"
                            r="16"
                            fill="none"
                            className="stroke-current text-yellow-500"
                            strokeWidth="2"
                            strokeDasharray={`${patient.risk_percentages?.[1] || 0} 100`}
                            strokeDashoffset={`-${patient.risk_percentages?.[0] || 0}`}
                            strokeLinecap="round"
                        ></circle>

                        {/* Danger percentage (offset by safe + ok) */}
                        <circle
                            cx="18"
                            cy="18"
                            r="16"
                            fill="none"
                            className="stroke-current text-red-500"
                            strokeWidth="2"
                            strokeDasharray={`${patient.risk_percentages?.[2] || 0} 100`}
                            strokeDashoffset={`-${(patient.risk_percentages?.[0] || 0) + (patient.risk_percentages?.[1] || 0)}`}
                            strokeLinecap="round"
                        ></circle>
                    </svg>

                    {/* Center text: Prediction */}
                    <div className="absolute top-1/2 start-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                        <span className={`text-2xl font-bold ${patient.prediction === 0 ? "text-green-600" :
                                patient.prediction === 1 ? "text-yellow-600" :
                                    patient.prediction === 2 ? "text-red-600" :
                                        "text-gray-400"
                            }`}>
                            {patient.prediction === 0 ? "Safe" :
                                patient.prediction === 1 ? "Ok" :
                                    patient.prediction === 2 ? "Danger" : "N/A"}
                        </span>
                        <span className="text-sm dark:text-black dark:dark:text-white block">
                            Overall Status
                        </span>
                    </div>
                </div>

                {/* Patient Information Form */}
                <form className="w-full max-w-lg">
                    {/* keep your form UI same here */}
                </form>
            </div>


            {/* Patient Information Form */}
            <form className="w-full max-w-lg">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-white">
                    {/* Ascites */}
                    <div className="mb-2">
                        <label htmlFor="ascites" className="block mb-1 text-sm font-medium text-gray-700 dark:text-black">Ascites</label>
                        <input
                            type="text"
                            id="ascites"
                            className="bg-gray-50 border border-green-500 dark:text-white text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"
                            value={patient?.medical_history?.[0]?.ascites || "N/A"}
                            readOnly
                        />
                        <p className="mt-1 text-sm text-green-600 dark:text-green-500"><span className="font-medium">safe!</span> under control</p>
                    </div>

                    {/* Hepatome */}
                    <div className="mb-2">
                        <label htmlFor="hepatome" className="block mb-1 text-sm font-medium text-gray-700 dark:text-black">Hepatome</label>
                        <input
                            type="text"
                            id="hepatome"
                            className="bg-gray-50 border border-green-500 dark:text-white text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"
                            value={patient?.medical_history?.[0]?.hepatome || "N/A"}
                            readOnly
                        />
                        <p className="mt-1 text-sm text-green-600 dark:text-green-500"><span className="font-medium">safe!</span> under control</p>
                    </div>

                    {/* Spiders */}
                    <div className="mb-2">
                        <label htmlFor="spiders" className="block mb-1 text-sm font-medium text-gray-700 dark:text-black">Spiders</label>
                        <input
                            type="text"
                            id="spiders"
                            className="bg-gray-50 border border-green-500 dark:text-white text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"
                            value={patient?.medical_history?.[0]?.spiders || "N/A"}
                            readOnly
                        />
                        <p className="mt-1 text-sm text-green-600 dark:text-green-500"><span className="font-medium">safe!</span> under control</p>
                    </div>

                    {/* Edema */}
                    <div className="mb-2">
                        <label htmlFor="edema" className="block mb-1 text-sm font-medium text-gray-700 dark:text-black">Edema</label>
                        <input
                            type="text"
                            id="edema"
                            className="bg-gray-50 border border-green-500 dark:text-white text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"
                            value={patient?.medical_history?.[0]?.edema || "N/A"}
                            readOnly
                        />
                        <p className="mt-1 text-sm text-green-600 dark:text-green-500"><span className="font-medium">safe!</span> under control</p>
                    </div>

                    {/* Bilirubin */}
                    <div className="mb-2">
                        <label htmlFor="bilirubin" className="block mb-1 text-sm font-medium text-gray-700 dark:text-black">Bilirubin</label>
                        <input
                            type="text"
                            id="bilirubin"
                            className="bg-gray-50 border border-red-500 dark:text-white text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-red-500"
                            value={patient?.medical_history?.[0]?.bilirubin || "N/A"}
                            readOnly
                        />
                        <p className="mt-1 text-sm text-red-600 dark:text-red-500"><span className="font-medium">risk!</span> over the limit!</p>
                    </div>

                    {/* Cholesterol */}
                    <div className="mb-2">
                        <label htmlFor="cholesterol" className="block mb-1 text-sm font-medium text-gray-700 dark:text-black">Cholesterol</label>
                        <input
                            type="text"
                            id="cholesterol"
                            className="bg-gray-50 border border-green-500 dark:text-white text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"
                            value={patient?.medical_history?.[0]?.cholesterol || "N/A"}
                            readOnly
                        />
                        <p className="mt-1 text-sm text-green-600 dark:text-green-500"><span className="font-medium">safe!</span> under control</p>
                    </div>

                    {/* Albumin */}
                    <div className="mb-2">
                        <label htmlFor="albumin" className="block mb-1 text-sm font-medium text-gray-700 dark:text-black">Albumin</label>
                        <input
                            type="text"
                            id="albumin"
                            className="bg-gray-50 border border-green-500 dark:text-white text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"
                            value={patient?.medical_history?.[0]?.albumin || "N/A"}
                            readOnly
                        />
                        <p className="mt-1 text-sm text-green-600 dark:text-green-500"><span className="font-medium">safe!</span> under control</p>
                    </div>

                    {/* Copper */}
                    <div className="mb-2">
                        <label htmlFor="copper" className="block mb-1 text-sm font-medium text-gray-700 dark:text-black">Copper</label>
                        <input
                            type="text"
                            id="copper"
                            className="bg-gray-50 border border-red-500 dark:text-white text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-red-500"
                            value={patient?.medical_history?.[0]?.copper || "N/A"}
                            readOnly
                        />
                        <p className="mt-1 text-sm text-red-600 dark:text-red-500"><span className="font-medium">risk!</span> over the limit!</p>
                    </div>

                    {/* Alk Phos */}
                    <div className="mb-2">
                        <label htmlFor="alk_phos" className="block mb-1 text-sm font-medium text-gray-700 dark:text-black">Alk Phos</label>
                        <input
                            type="text"
                            id="alk_phos"
                            className="bg-gray-50 border border-green-500 dark:text-white text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"
                            value={patient?.medical_history?.[0]?.alk_phos || "N/A"}
                            readOnly
                        />
                        <p className="mt-1 text-sm text-green-600 dark:text-green-500"><span className="font-medium">safe!</span> under control</p>
                    </div>

                    {/* SGOT */}
                    <div className="mb-2">
                        <label htmlFor="sgot" className="block mb-1 text-sm font-medium text-gray-700 dark:text-black">SGOT</label>
                        <input
                            type="text"
                            id="sgot"
                            className="bg-gray-50 border border-green-500 dark:text-white text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"
                            value={patient?.medical_history?.[0]?.SGOT || "N/A"}
                            readOnly
                        />
                        <p className="mt-1 text-sm text-green-600 dark:text-green-500"><span className="font-medium">safe!</span> under control</p>
                    </div>

                    {/* Tryglicerides */}
                    <div className="mb-2">
                        <label htmlFor="tryglicerides" className="block mb-1 text-sm font-medium text-gray-700 dark:text-black">Tryglicerides</label>
                        <input
                            type="text"
                            id="tryglicerides"
                            className="bg-gray-50 border border-green-500 dark:text-white text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"
                            value={patient?.medical_history?.[0]?.tryglicerides || "N/A"}
                            readOnly
                        />
                        <p className="mt-1 text-sm text-green-600 dark:text-green-500"><span className="font-medium">safe!</span> under control</p>
                    </div>

                    {/* Platelets */}
                    <div className="mb-2">
                        <label htmlFor="platelets" className="block mb-1 text-sm font-medium text-gray-700 dark:text-black">Platelets</label>
                        <input
                            type="text"
                            id="platelets"
                            className="bg-gray-50 border border-green-500 dark:text-white text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"
                            value={patient?.medical_history?.[0]?.platelets || "N/A"}
                            readOnly
                        />
                        <p className="mt-1 text-sm text-green-600 dark:text-green-500"><span className="font-medium">safe!</span> under control</p>
                    </div>

                    {/* Prothrombin */}
                    <div className="mb-2">
                        <label htmlFor="prothrombin" className="block mb-1 text-sm font-medium text-gray-700 dark:text-black">Prothrombin</label>
                        <input
                            type="text"
                            id="prothrombin"
                            className="bg-gray-50 border border-green-500 dark:text-white text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"
                            value={patient?.medical_history?.[0]?.prothrombin || "N/A"}
                            readOnly
                        />
                        <p className="mt-1 text-sm text-green-600 dark:text-green-500"><span className="font-medium">safe!</span> under control</p>
                    </div>
                </div>
            </form>

        </div>
    )
}
