import React, { useContext, useEffect } from 'react'
import PatientContext from '../context/info/PatientContext'

export default function Info(props) {
    const getinfo=useContext(PatientContext)
    const {doclogin}=getinfo
    useEffect(()=>{
        doclogin()
    },[])
    const {logininfo}=getinfo
    console.log(logininfo)
  return (
    <div>
        <h1>{logininfo.name}</h1>
    </div>
  )
}
