import React from 'react'
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import PatientContext from '../../context/info/PatientContext';
import { useNavigate } from 'react-router-dom';

function AddAssignment(props) {
    const navigate = useNavigate()
    const [newass, setNewass] = useState({ Doctor: "", Patient: "" })
    const fetchingdata = useContext(PatientContext);
    const { createassignment, getdoctors, getpatients } = fetchingdata;
    useEffect(() => {
        if (!localStorage.getItem('token')) {
            navigate('/Login');
        }
        else {
            getdoctors();
            getpatients();
        }

    }, []);

    const { Doctors, Patients } = fetchingdata;
    const add = (e) => {
        e.preventDefault();
        if (newass.Doctor && newass.Patient) {
            // console.log(newass.Doctor);
            createassignment(newass.Doctor, newass.Patient);
            setNewass({ Doctor: "", Patient: "" });
            props.onClose();
        } else {
            // e.preventDefault();
            alert("choose properly")
        }
    }

    const onChange = (e) => {
        setNewass({ ...newass, [e.target.name]: e.target.value })
    }
    const notadd = (e) => {
        e.preventDefault();
        props.onClose(); // Close modal via parent component
    };

    const handleClickOutside = (e) => {
        if (e.target.id === "edit") {
            props.onClose(); // Close modal when clicking outside
        }
    };
    // console.log(Doctors);
    if (!props.visible) return null;
    return (
        <div id='edit' className="fixed inset-0 z-1 bg-opacity-50 flex justify-center items-center" onClick={handleClickOutside}>
            <form className="max-w-md mx-auto bg-gray-600 rounded-4xl p-30">
                <div className="relative z-0 w-3xs mb-10 group">
                    {/* <input type="text" onChange={onChange} value={newass.Doctor} name="Doctor" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" required /> */}
                    <label htmlFor="floating_text" className="peer-focus:font-medium -z-10 absolute text-sm text-gray-500 dark:text-gray-100 duration-300 transform -translate-y-6 scale-75 top-3  origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Doctor</label>
                    <select
                        name="Doctor"
                        value={newass.Doctor}
                        onChange={onChange}
                        required
                        className="  border-none text-black text-sm rounded-lg block w-full p-2.5"
                    >
                        <option value="">Choose a doctor</option>
                        {Doctors.map((doc) => (
                            <option key={doc._id} value={doc._id}>{doc.name}</option>
                        ))}
                    </select>
                </div>
                <div className="relative z-0 w-3xs mb-10 group">
                    {/* <input type="text" onChange={onChange} value={newass.Patient} name="Patient" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" required /> */}
                    <label htmlFor="floating_text" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-100 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Patient</label>
                    <select
                        name="Patient"
                        value={newass.Patient}
                        onChange={onChange}
                        required
                        className=" border-none text-black text-sm rounded-lg block w-full p-2.5 mt-5"
                    >
                        <option value="">Choose a patient</option>
                        {Patients.map((pati) => (
                            <option key={pati._id} value={pati._id}>{pati.name}</option>
                        ))}
                    </select>
                </div>
                <button type="submit" onClick={add} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>

        </div>
    )
}

export default AddAssignment
