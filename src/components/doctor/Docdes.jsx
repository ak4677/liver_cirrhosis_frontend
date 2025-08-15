import React, { useContext, useEffect } from 'react'
import Patientcard from '../Patientcard'
import PatientContext from '../../context/info/PatientContext';
import { useState } from 'react';
export default function Docdes() {
    const fetching = useContext(PatientContext)
    const { fetchdata, doc_create_assig, doc_get_assis, doc_get_assistant,doc_delete_assig } = fetching;
    // const [newPatient, setNewPatient] = useState({ name: "", age: "", condition: "" });
    const [active, setActive] = useState("get_assignment");
    const [form, setForm] = useState({ pati: "", lab_assi: "" });
    useEffect(() => {
        fetchdata();
        doc_get_assis();
        doc_get_assistant();
    }, [])


    // const handleChange = (e) => {
    //     setNewPatient({ ...newPatient, [e.target.name]: e.target.value });
    // };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (form.pati && form.lab_assi) {
            doc_create_assig(form.pati, form.lab_assi);
            setForm({ pati: "", lab_assi: "" });
        }
        setActive("get_assignment");
    };
    const { patientdata, doc_assistent, pati_assi_lab } = fetching
    // console.log(doc_assistent)
    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* Sidebar */}
            <div className="w-60 bg-gray-900 text-white p-4">
                <h1 className="text-xl font-bold mb-6">Dashboard</h1>
                <button
                    className={`block w-full text-left px-4 py-2 mb-2 rounded ${active === "get_assignment" ? "bg-gray-700" : "hover:bg-gray-700"
                        }`}
                    onClick={() => setActive("get_assignment")}
                >
                    Get Assignment
                </button>
                <button
                    className={`block w-full text-left px-4 py-2 mb-2 rounded ${active === "create_assignment" ? "bg-gray-700" : "hover:bg-gray-700"
                        }`}
                    onClick={() => setActive("create_assignment")}
                >
                    Create Assignment
                </button>
                <button
                    className={`block w-full text-left px-4 py-2 mb-2 rounded ${active === "patients" ? "bg-gray-700" : "hover:bg-gray-700"
                        }`}
                    onClick={() => setActive("patients")}
                >
                    Patients
                </button>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-5 overflow-auto">
                {active === "get_assignment" && (
                    <>
                        <h2 className="text-2xl font-bold mb-4">Assignments</h2>
                        {pati_assi_lab.length === 0 ? (
                            <p className="text-gray-500">No assignments found.</p>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {pati_assi_lab.map((a, index) => (
                                    <div key={index} className="border p-4 rounded shadow bg-white flex justify-between items-start">
                                        <div>
                                            <div className="text-sm text-gray-700 space-y-1">
                                                <p><span className="font-semibold">Doctor:</span> {a.doctor_id?.name || "N/A"}</p>
                                                <p><span className="font-semibold">Patient:</span> {a.patient_id?.name || "N/A"}</p>
                                                <p><span className="font-semibold">Lab Assistant:</span> {a.lab_assistant?.name || "N/A"}</p>
                                            </div>
                                        </div>

                                        <button
                                            onClick={() => doc_delete_assig(a._id)}
                                            className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded h-fit"
                                        >
                                            Delete
                                        </button>
                                    </div>

                                ))}
                            </div>
                        )}

                    </>
                )}

                {active === "create_assignment" && (
                    <>
                        <h2 className="text-2xl font-bold mb-4">Create Assignment</h2>
                        <form onSubmit={handleSubmit} className="space-y-4 max-w-md">

                            {/* Patient Select */}
                            <select
                                name="pati"
                                value={form.pati || ""}
                                onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })}
                                className="w-full border p-2 rounded"
                                required
                            >
                                <option value="">Select Patient</option>
                                {patientdata.map((patient) => (
                                    <option key={patient._id} value={patient._id}>
                                        {patient.name}
                                    </option>
                                ))}
                            </select>

                            {/* Lab Assistant Select */}
                            <select
                                name="lab_assi"
                                value={form.lab_assi || ""}
                                onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })}
                                className="w-full border p-2 rounded"
                                required
                            >
                                <option value="">Select Lab Assistant</option>
                                {doc_assistent.map((assistant) => (
                                    <option key={assistant._id} value={assistant._id}>
                                        {assistant.name}
                                    </option>
                                ))}
                            </select>

                            {/* Submit */}
                            <button
                                type="submit"
                                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                            >
                                Save
                            </button>
                        </form>
                    </>
                )}

                {active === "patients" && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {patientdata.map((patient) => (
                            <Patientcard key={patient._id} patient={patient} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}