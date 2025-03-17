import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Navbar() {
    const navigator=useNavigate()
    return (
        <>
            <div className='bg-blue-400 p-4 sticky top-0 z-3'>
                <div className="flex justify-between text-white">
                    <h1 className='text-2xl'>Liver Cirrhosis Prediction Tool</h1>
                    <div className=' text-2xl flex gap-9.5'>
                        <i className="fa-regular fa-circle-user place-content-center cursor-pointer" onClick={()=>navigator("/Info")}></i>
                        <Link to={"/Home"}>Home</Link>
                        <Link to={"/patides"}>Contect us</Link>
                    </div>
                </div>
            </div>
        </>

    )
}
