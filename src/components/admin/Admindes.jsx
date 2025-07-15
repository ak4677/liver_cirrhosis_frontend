import React, { useContext, useEffect } from 'react'
import PatientContext from '../../context/info/PatientContext';
import AdmissionCard from './AdmissionCard';
import AddAssignment from '../AddAssignment/AddAssignment';
import { useState } from 'react';
import DoctorCard from './DoctorCard';
import PatientCard from './PatientCard';
import AssistantCard from './AssistantCard';
import AddDoctor from '../AddAssignment/AddDoctor';
import AddLab_assistant from '../AddAssignment/AddLab_assistant';
import AddPatient from '../AddAssignment/AddPatient';

export default function Admindes() {
    const [fetchTarget, setFetchTarget] = useState(localStorage.getItem('fetch') || 'assignments');
    const fetching = useContext(PatientContext)
    const [isEditVisible, setEditVisible] = useState(false)
    const { fetchassignment, getdoctors, getpatients, getlabassistant} = fetching;
    useEffect(() => {
        localStorage.setItem('fetch', fetchTarget);
        if (localStorage.getItem('fetch') === 'assignments') {
            fetchassignment();
        }
        else if (localStorage.getItem('fetch') === 'doctors') {
            getdoctors();
        }
        else if (localStorage.getItem('fetch') === 'lab_assistands') {
            getlabassistant();
        }
        else if (localStorage.getItem('fetch') === 'patients') {
            getpatients();
        }
    }, [fetchTarget])
    const { assignments,Doctors,Patients,Assistent } = fetching
    const update = () => setEditVisible(true);
    const hideEdit = () => setEditVisible(false);
    // console.log(Assistent)
    return (
        <>
            {localStorage.getItem('fetch')==='assignments'&&isEditVisible && <AddAssignment className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center" visible={isEditVisible} onClose={hideEdit} />}
            {localStorage.getItem('fetch')==='doctors'&&isEditVisible && <AddDoctor className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center" visible={isEditVisible} onClose={hideEdit} />}
            {localStorage.getItem('fetch')==='patients'&&isEditVisible && <AddPatient className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center" visible={isEditVisible} onClose={hideEdit} />}
            {localStorage.getItem('fetch')==='lab_assistands'&&isEditVisible && <AddLab_assistant className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center" visible={isEditVisible} onClose={hideEdit} />}
            <div className='flex mt-16'>
                <aside className='w-64 bg-blue-400 h-screen fixed top-16 p-4 shadow-md'>
                    <ul className='space-y-4 grid justify-items-center text-3xl text-white cursor-pointer'>
                        <i className='p-2 hover:bg-blue-200 rounded' onClick={() => setFetchTarget('assignments')}>Assignments</i>
                        <i className='p-2 hover:bg-blue-200 rounded' onClick={() => setFetchTarget('doctors')}>Doctors</i>
                        <i className='p-2 hover:bg-blue-200 rounded' onClick={() => setFetchTarget('lab_assistands')}>lab_assistands</i>
                        <i className='p-2 hover:bg-blue-200 rounded' onClick={() => setFetchTarget('patients')}>patients</i>
                        {/* <i className='p-2 hover:bg-blue-200 rounded' onClick={()=>localStorage.setItem('fetch','assignments')}>hello</i> */}
                    </ul>
                </aside>
                {fetchTarget === 'assignments' && (<div className='ml-64 p-6 w-full'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                        <span className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700" onClick={update}>
                            <div className="flex  justify-items-center gap-5 p-4 leading-normal" >
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Add</h5>
                                <i className="fa-solid fa-plus text-white content-center"></i>
                            </div>
                        </span>
                        {assignments.map((assistante) => {
                            return (<div key={assistante._id}><AdmissionCard assistante={assistante}></AdmissionCard></div>);
                        })}
                    </div>
                </div>)}
                {fetchTarget === 'doctors' && (<div className='ml-64 p-6 w-full'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                        <span className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700" onClick={update}>
                            <div className="flex  justify-items-center gap-5 p-4 leading-normal" >
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Add</h5>
                                <i className="fa-solid fa-plus text-white content-center"></i>
                            </div>
                        </span>
                        {Doctors.map((doc) => {
                            return (<div key={doc._id}><DoctorCard doctor={doc}/></div>);
                        })}
                    </div>
                </div>)}
                {fetchTarget === 'patients' && (<div className='ml-64 p-6 w-full'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                        <span className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700" onClick={update}>
                            <div className="flex  justify-items-center gap-5 p-4 leading-normal" >
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Add</h5>
                                <i className="fa-solid fa-plus text-white content-center"></i>
                            </div>
                        </span>
                        {Patients.map((pati) => {
                            return (<div key={pati._id}><PatientCard patient={pati}/></div>);
                        })}
                    </div>
                </div>)}
                {fetchTarget === 'lab_assistands' && (<div className='ml-64 p-6 w-full'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                        <span className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700" onClick={update}>
                            <div className="flex  justify-items-center gap-5 p-4 leading-normal" >
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Add</h5>
                                <i className="fa-solid fa-plus text-white content-center"></i>
                            </div>
                        </span>
                        {Assistent.map((assi) => {
                            return (<div key={assi._id}><AssistantCard assis={assi}/></div>);
                        })}
                    </div>
                </div>)}
            </div>
        </>
    )
}
