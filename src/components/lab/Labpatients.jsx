import React from 'react'
import { useContext } from 'react';
import PatientContext from '../../context/info/PatientContext';
import { useState } from 'react';

function Labpatients({ patient }) {
    const p = patient?.patient_id || {};
    const { upload_patient_data } = useContext(PatientContext); // get dummy from context

    const [isFormOpen, setIsFormOpen] = useState(false);
    const [formData, setFormData] = useState({
        patient: p._id || "",
        ascites: "",
        hepatome: "",
        spiders: "",
        edema: "",
        bilirubin: "",
        cholesterol: "",
        albumin: "",
        copper: "",
        alk_phos: "",
        SGOT: "",
        tryglicerides: "",
        platelets: "",
        prothrombin: ""
    });
    // console.log(formData.patient)
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        upload_patient_data(formData); // call dummy with patient ID and form data
        setIsFormOpen(false);
    };

    return (
        <>
            {/* Card */}
            <div
                className="max-w-sm w-full bg-white border border-gray-200 rounded-lg shadow-md p-5 hover:shadow-lg transition-shadow duration-200 cursor-pointer"
                onClick={() => setIsFormOpen(true)}
            >
                <h2 className="text-xl font-bold text-gray-800 mb-2">
                    {p.name || 'Unnamed Patient'}
                </h2>
                <p className="text-gray-600 mb-1">
                    <span className="font-medium">Contact:</span> {p.Number || 'N/A'}
                </p>
                {p.age && (
                    <p className="text-gray-600 mb-1">
                        <span className="font-medium">Age:</span> {p.age}
                    </p>
                )}
                {p.condition && (
                    <p className="text-gray-600 mb-3">
                        <span className="font-medium">Condition:</span> {p.condition}
                    </p>
                )}
                {p.address && (
                    <p className="text-gray-600 mb-1">
                        <span className="font-medium">Address:</span> {p.address}
                    </p>
                )}
                {p.gender && (
                    <p className="text-gray-600">
                        <span className="font-medium">Gender:</span> {p.gender}
                    </p>
                )}
            </div>

            {/* Modal Form */}
            {isFormOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-transparent bg-opacity-50 z-50 overflow-y-auto">
                    <div className="bg-white rounded-lg p-6 w-full max-w-3xl">
                        <h3 className="text-lg font-bold mb-4">Enter Lab Results</h3>

                        <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {Object.keys(formData).map((field) =>
                                field !== "patient" ? (
                                    <div key={field}>
                                        <label className="block text-gray-700 capitalize mb-1">
                                            {field.replace(/_/g, " ")}
                                        </label>
                                        <input
                                            type="text"
                                            name={field}
                                            value={formData[field]}
                                            onChange={handleChange}
                                            className="w-full border p-2 rounded"
                                            required
                                        />
                                    </div>
                                ) : null
                            )}

                            {/* Buttons */}
                            <div className="flex justify-end space-x-2 pt-4">
                                <button
                                    type="button"
                                    onClick={() => setIsFormOpen(false)}
                                    className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                                >
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}

export default Labpatients
