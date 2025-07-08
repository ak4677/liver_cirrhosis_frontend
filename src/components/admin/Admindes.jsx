import React, { useContext, useEffect } from 'react'
import PatientContext from '../../context/info/PatientContext';
import AdmissionCard from './AdmissionCard';
import AddAssignment from '../AddAssignment/AddAssignment';
import { useState } from 'react';

export default function Admindes() {
    const fetching = useContext(PatientContext)
    const [isEditVisible, setEditVisible] = useState(false)
    const { fetchassignment } = fetching;
    useEffect(() => {
        if(localStorage.getItem('fetch')==='assignments'){
            fetchassignment();
        }
        else if(localStorage.getItem('fetch')==='doctors'){
            console.log(localStorage.getItem('fetch'))
        }
        else if(localStorage.getItem('fetch')==='lab_assistands'){
            console.log(localStorage.getItem('fetch'))
        }
        else if(localStorage.getItem('fetch')==='patients'){
            console.log(localStorage.getItem('fetch'))
        }
    }, [])
    const { assignments } = fetching
    const update = () => setEditVisible(true);
    const hideEdit = () => setEditVisible(false);
    // console.log(assignments)
    return (
        <>
        {isEditVisible && <AddAssignment className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center" visible={isEditVisible} onClose={hideEdit} />}
        <div className='flex mt-16'>
            <aside className='w-64 bg-blue-400 h-screen fixed top-16 p-4 shadow-md'>
                <ul className='space-y-4 grid justify-items-center text-3xl text-white cursor-pointer'>
                    <i className='p-2 hover:bg-blue-200 rounded' onClick={()=>localStorage.setItem('fetch','assignments')}>Assignments</i>
                    <i className='p-2 hover:bg-blue-200 rounded' onClick={()=>localStorage.setItem('fetch','doctors')}>Doctors</i>
                    <i className='p-2 hover:bg-blue-200 rounded' onClick={()=>localStorage.setItem('fetch','lab_assistands')}>lab_assistands</i>
                    <i className='p-2 hover:bg-blue-200 rounded' onClick={()=>localStorage.setItem('fetch','patients')}>patients</i>
                    <i className='p-2 hover:bg-blue-200 rounded' onClick={()=>localStorage.setItem('fetch','assignments')}>hello</i>
                </ul>
            </aside>
            {/* <div className='grid h-56 grid-cols-3 col-start-2 col-span-6 content-center gap-4 p-5 justify-items-center w-full overflow-auto relative max-h-full'> */}
            <div className='ml-64 p-6 w-full'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                    <span  className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700" onClick={update}>
                        <div className="flex  justify-items-center gap-5 p-4 leading-normal" >
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Add</h5>
                            <i className="fa-solid fa-plus text-white content-center"></i>
                        </div>
                    </span>
                    {assignments.map((assistante) => {
                        return (<div key={assistante._id}><AdmissionCard assistante={assistante}></AdmissionCard></div>);
                    })}
                </div>
            </div>
        </div>
        </>
    )
}
