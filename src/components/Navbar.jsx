import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Navbar() {
    const navigator = useNavigate()
    const information = () => {
        if (localStorage.getItem('token')) {
            navigator("/Info")
        }
    }
    const navigation = () => {
        if (!localStorage.getItem('token')) {
            navigator("/Home")
        } else {
            let x = localStorage.getItem('role').toLowerCase()
            if (x === 'doctor') {
                navigator("/Docdes");
            }
            else if (x === 'admin') {
                localStorage.setItem('fetch', 'assignments')
                navigator("/Admindes")
            }
            else if (x === 'patient') {
                navigator("/Patides")
            }
            else if (x === 'lab_assistant') {
                navigator("/Labentry")
            }
            else {
                console.log("error in login")
            }

        }
    }
    const logout=()=>{
        localStorage.clear()
        navigation()
    }
    return (
        <>
            <div className='bg-blue-400 p-4 sticky top-0 z-3'>
                <div className="flex justify-between text-white">
                    <h1 className='text-2xl'>Liver Cirrhosis Prediction Tool</h1>
                    <div className=' text-2xl flex gap-9.5'>
                        <i className="fa-regular fa-circle-user place-content-center cursor-pointer" onClick={() => information()}></i>
                        <span className='cursor-pointer' onClick={() => navigation()}>Home</span>
                        <span className='cursor-pointer' onClick={() => logout()}>log out</span>
                    </div>
                </div>
            </div>
        </>

    )
}
