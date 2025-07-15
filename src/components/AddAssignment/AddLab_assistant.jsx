import React, { useContext, useEffect, useState } from 'react'
import PatientContext from '../../context/info/PatientContext';
import { useNavigate } from 'react-router-dom';

function AddLab_assistant(props) {
    const creatinglab_assitant = useContext(PatientContext)
    const { createlab_assistant } = creatinglab_assitant
    const navigate = useNavigate()
    const [newassistant, setNewassistant] = useState({ name: "", email: "", number: "", lab_name: "" })
    const creatingdoctor = useContext(PatientContext);
    const { createdoctor } = creatingdoctor
    useEffect(() => {
        if (!localStorage.getItem('token')) {
            navigate('/Login');
        }

    }, []);
    const add = (e) => {
        e.preventDefault();
        if (newassistant.email && newassistant.number && newassistant.name && newassistant.lab_name) {
            // console.log(newassistant.Doctor);
            createlab_assistant(newassistant.name, newassistant.email, newassistant.number, newassistant.lab_name);
            setNewassistant({ name: "", email: "", number: "", lab_name: ""});
        } else {
            // e.preventDefault();
            alert("fill the data")
        }
    }

    const onChange = (e) => {
        setNewassistant({ ...newassistant, [e.target.name]: e.target.value })
    }
    const handleClickOutside = (e) => {
        if (e.target.id === "edit") {
            props.onClose(); // Close modal when clicking outside
        }
    };
    if (!props.visible) return null;
    return (
        <div id='edit' className="fixed inset-0 z-1 bg-opacity-50 flex justify-center items-center" onClick={handleClickOutside}>
            <form className="max-w-md mx-auto bg-gray-600 rounded-4xl p-30">
                <div className="relative z-0 w-full mb-5 group">
                    <input type="text" name="name" id="floating_text" value={newassistant.name} onChange={onChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="floating_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-100 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">name</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input type="email" name="email" id="floating_email" value={newassistant.email} onChange={onChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-100 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input type="tel" pattern="[0-9]{10}" name="number" value={newassistant.number} onChange={onChange} id="mobile_number" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="mobile_number" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-100 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">mobile number</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input type="text" name="lab_name" id="Lab_name" value={newassistant.lab_name} onChange={onChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="lab_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-100 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">name</label>
                </div>
                <button type="submit" onClick={add} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>
        </div>
    )
}

export default AddLab_assistant
