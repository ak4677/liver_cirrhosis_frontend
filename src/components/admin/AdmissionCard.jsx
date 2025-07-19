import React from 'react'
import { useContext } from 'react'
import PatientContext from '../../context/info/PatientContext'

export default function AdmissionCard(props) {
    const deleting = useContext(PatientContext)
    const { deleteassignment } = deleting
    return (
        <div className="w-full max-w-xl mx-auto mb-4">
            <div className="flex items-center bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition">
                {/* You can optionally add an image here */}
                {/* <img className="object-cover w-48 h-full rounded-l-lg" src="..." alt="Profile" /> */}

                <div className="flex flex-col justify-between p-4 w-full">
                    <h5 className="text-xl font-bold text-gray-900 dark:text-white">
                        Dr. {props.assistante.doctor_id.name}
                    </h5>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                        Patient: {props.assistante.patient_id.name}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        Age: {props.assistante.patient_id.Age}
                    </p>

                    {/* Placeholder for future info
                    {props.assistante.notes && (
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                            Notes: {props.assistante.notes}
                        </p>
                    )} */}
                </div>

                <div className="p-4">
                    <i
                        className="fa-solid fa-trash-can text-red-500 hover:text-red-700 cursor-pointer text-lg"
                        onClick={() => deleteassignment(props.assistante._id)}
                    ></i>
                </div>
            </div>
        </div>

    )
}
