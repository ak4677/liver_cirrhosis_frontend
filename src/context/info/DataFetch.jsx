import { React, useState } from "react";
import { useContext } from "react";
import PatientContext from "./PatientContext";


export default function DataFetch(props) {
    const intial = []
    const [patientdata, Setpatinetdata] = useState(intial)
    const [logininfo,setlogininfo]=useState({})
    const [assignments,setassignments]=useState(intial)


    //patient data fetching
    const fetchdata = async () => {
        const response = await fetch("http://localhost:5000/api/datatras/doctor/patients", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
                // "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3ZDg1MTI4NWQ4Y2UyN2JkNDg0OTI2MSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTc0MjIzNjEyN30.wg0ycv5T1mm8U9nqXUitdvwIxx2rySXOL0jlin9I0mA",
            }
        })
        const data = await response.json();
        // console.log(data);
        Setpatinetdata(data)
    }
    
    //doctor's info after login
    const doclogin = async () => {
        const response = await fetch("http://localhost:5000/api/auth/getdoc", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token'),
            }
        })
        const data = await response.json();
        setlogininfo(data)
    }

    //login into the system
    const info = async () => {
        const response = await fetch("http://localhost:5000/api/datatras/getinfo", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
                // "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3Y2M5M2Y2OTcyOTljMmRkYmNlNThiYiIsInJvbGUiOiJkb2N0b3IiLCJpYXQiOjE3NDIyMzMxNTIsImV4cCI6MTc0MjIzNjc1Mn0.-87ZombJ3U4KvkeZFAIQ5XtRZSWfcX4I5tKzfL7s8-0",
            }
        })
        const data = await response.json();
        setlogininfo(data)
    }

    //fetching all assignments of the admin
    const fetchassignment=async()=>{
        const response = await fetch("http://localhost:5000/api/datatras/assignments", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
                // "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3Y2M5M2Y2OTcyOTljMmRkYmNlNThiYiIsInJvbGUiOiJkb2N0b3IiLCJpYXQiOjE3NDIyMzMxNTIsImV4cCI6MTc0MjIzNjc1Mn0.-87ZombJ3U4KvkeZFAIQ5XtRZSWfcX4I5tKzfL7s8-0",
            }
        })
        const data = await response.json();
        // console.log(data)
        setassignments(data)
    }

    //cleate all assignments of the admin
    const createassignment=async()=>{
        const response = await fetch("http://localhost:5000/api/datatras/assignments", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
                // "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3Y2M5M2Y2OTcyOTljMmRkYmNlNThiYiIsInJvbGUiOiJkb2N0b3IiLCJpYXQiOjE3NDIyMzMxNTIsImV4cCI6MTc0MjIzNjc1Mn0.-87ZombJ3U4KvkeZFAIQ5XtRZSWfcX4I5tKzfL7s8-0",
            }
        })
        const data = await response.json();
        // console.log(data)
        // setassignments(data)
    }

    return (
        <PatientContext.Provider value={{patientdata,logininfo,assignments,fetchdata,info,fetchassignment,createassignment}}>
            {props.children}
        </PatientContext.Provider>
    )
}