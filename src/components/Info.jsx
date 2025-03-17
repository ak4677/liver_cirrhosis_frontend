import React, { useContext, useEffect } from 'react'
import PatientContext from '../context/info/PatientContext'

export default function Info(props) {
  const getinfo = useContext(PatientContext)
  const { logininfo } = getinfo

  return (
    <><div className='grid content-center w-50% bg-amber-300'>
      <div className="justify-items-center">
        <h1>{logininfo.name}</h1>
        <h1>{logininfo.email}</h1>
      </div>
    </div>
    </>
  )
}
