import React, { useContext, useEffect, useState } from 'react'
import PatientContext from '../../context/info/PatientContext';
import { useNavigate } from 'react-router-dom';

function AddDoctor(props) {
  const navigate=useNavigate()
  const [newDoc, setNewDoc] = useState({ name: "", email: "" ,number: ""})
  const creatingdoctor = useContext(PatientContext);
  const { createdoctor } = creatingdoctor
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/Login');
    }

  }, []);
  const add = (e) => {
    e.preventDefault();
    if (newDoc.email && newDoc.number&&newDoc.name) {
      // console.log(newDoc.Doctor);
      createdoctor(newDoc.name, newDoc.email, newDoc.number);
      setNewDoc({ name: "", email: "" ,number: ""});
    } else {
      // e.preventDefault();
      alert("fill the data")
    }
  }

  const onChange = (e) => {
    setNewDoc({ ...newDoc, [e.target.name]: e.target.value })
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
          <input type="text" name="name" value={newDoc.name} onChange={onChange} id="floating_text" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
          <label htmlFor="floating_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-100 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">name</label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input type="email" name="email" value={newDoc.email} onChange={onChange} id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
          <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-100 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input type="tel" pattern="[0-9]{10}" name="number" inputMode="numeric" value={newDoc.number} onChange={onChange} id="mobile_number" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
          <label htmlFor="mobile_number" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-100 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">mobile number</label>
        </div>
        <button type="submit" onClick={add} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
      </form>
    </div>
  )
}

export default AddDoctor
