import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import PatientContext from '../../context/info/PatientContext';
import Labpatients from './labpatients';

export default function Labentry() {
  const navigator = useNavigate();
  const fetching = useContext(PatientContext)
  const { labassi_get_pati } = fetching
  useEffect(() => {
    labassi_get_pati();
  }, [])
  const { labassi_pati } = fetching
  return (
    <>
      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Assigned Patients</h1>

        {labassi_pati.length === 0 ? (
          <p className="text-gray-500 text-lg">No patients assigned yet.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {labassi_pati.map((patient) => (
              <Labpatients key={patient._id} patient={patient} />
            ))}
          </div>
        )}
      </div>
    </>
  )
}
