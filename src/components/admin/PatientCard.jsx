import React, { useContext } from 'react'
import PatientContext from '../../context/info/PatientContext'

function PatientCard(props) {
  const deleting = useContext(PatientContext)
  const { deleterole } = deleting
  return (
    <div className="w-full max-w-xl mx-auto mb-4">
      <div className="flex items-center bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition">
        {/* You can optionally add an image here */}
        {/* <img className="object-cover w-48 h-full rounded-l-lg" src="..." alt="Profile" /> */}

        <div className="flex flex-col justify-between p-4 w-full">
          <h5 className="text-xl font-bold text-gray-900 dark:text-white">
            Dr. {props.patient.name}
          </h5>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Patient: {props.patient.email}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Number: {props.patient.Number}
          </p>

          {/* Placeholder for future info */}
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            Sex: {props.patient.sex}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            <span className={`inline-block h-3 w-3 rounded-full ${props.patient.isActivated ? "bg-green-500" : "bg-red-500"}`}></span>
            Status: {props.patient.isActivated ? "Active" : "InActive"}
          </p>

        </div>

        <div className="p-4">
          <i
            className="fa-solid fa-trash-can text-red-500 hover:text-red-700 cursor-pointer text-lg"
            onClick={() => deleterole(props.patient._id)}
          ></i>
        </div>
      </div>
    </div>
  )
}

export default PatientCard
