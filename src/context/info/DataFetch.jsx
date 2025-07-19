import { React, useState } from "react";
import { useContext } from "react";
import PatientContext from "./PatientContext";


export default function DataFetch(props) {
    const intial = []
    const [patientdata, Setpatinetdata] = useState(intial)
    const [logininfo, setlogininfo] = useState({})
    const [assignments, setassignments] = useState(intial)
    const [Doctors, setDoctors] = useState(intial)
    const [Patients, setPatients] = useState(intial)
    const [Assistent, setAssistent] = useState(intial)
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
    const fetchassignment = async () => {
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
    const createassignment = async (doctor_id, patient_id) => {
        const response = await fetch("http://localhost:5000/api/datatras/assignments", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
                // "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3Y2M5M2Y2OTcyOTljMmRkYmNlNThiYiIsInJvbGUiOiJkb2N0b3IiLCJpYXQiOjE3NDIyMzMxNTIsImV4cCI6MTc0MjIzNjc1Mn0.-87ZombJ3U4KvkeZFAIQ5XtRZSWfcX4I5tKzfL7s8-0",
            },
            body: JSON.stringify({ doctor_id, patient_id })
        })
        const data = await response.json();
        // console.log(data)
        // setassignments(data)
    }

    //ge all doctors after login 
    const getdoctors = async () => {
        const response = await fetch("http://localhost:5000/api/datatras//admin/doctors", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
            }
        })
        const data = await response.json()
        // console.log("doctor"+data);
        setDoctors(data);
    }

    //get all the patients
    const getpatients = async () => {
        const response = await fetch("http://localhost:5000/api/datatras//admin/patients", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
            }
        })
        const data = await response.json()
        // console.log("patient"+data);
        setPatients(data);
    }
    //get all lab_assitant
    const getlabassistant = async () => {
        const response = await fetch("http://localhost:5000/api/datatras//admin/Assistant", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
            }
        })
        const data = await response.json()
        // console.log("assi"+data);
        setAssistent(data);
    }

    //create new doctor
    const createdoctor = async (name, email, Number) => {
        const response = await fetch("http://localhost:5000/api/auth/createdoc", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
            },
            body: JSON.stringify({ name, email, Number })
        })
        const data = await response.json()
        alert(data.message)
        // console.log("assi"+data);
    }

    //create new patient
    const createPatient = async (name, email, Number, Age, sex) => {
        const response = await fetch("http://localhost:5000/api/auth/addpatient", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
            },
            body: JSON.stringify({ name, email, Number, Age, sex })
        })
        const data = await response.json()
        alert(data.message)
        // console.log("assi"+data);
    }

    //create new lab_assistant
    const createlab_assistant = async (name, email, Number, lab_name) => {
        const response = await fetch("http://localhost:5000/api/auth/createlabassis", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
            },
            body: JSON.stringify({ name, email, Number, lab_name })
        })
        const data = await response.json()
        alert(data.message)
        // console.log("assi"+data);
    }

    //deleting assignment
    const deleteassignment = async (id) => {
        const response = await fetch(`http://localhost:5000/api/datatras/deleteassignment/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
            }
        })
        const data = await response.json()
        if(response.ok){
            if (role === 'assignments') fetchassignment();
        }else{
            alert(data.error || "Server fetching issue in assignment");
        }
    }
    const deleterole = async (id) => {
        const role = localStorage.getItem('fetch');
        const response = await fetch(`http://localhost:5000/api/datatras/delete/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
            },
            body: JSON.stringify({ role })
        })
        const data = await response.json()
        if (response.ok) {
            alert(data.delete);
            // 👇 Trigger the appropriate refetch based on current view
            if (role === 'doctor') getdoctors();
            else if (role === 'patient') getpatients();
            else if (role === 'lab_assistant') getlabassistant();
        } else {
            alert(data.error || "Server fetching issue in role");
        }
    }
    return (
        <PatientContext.Provider value={{
            patientdata, logininfo, assignments, Doctors, Patients, Assistent,
            fetchdata, info, fetchassignment, createassignment, getdoctors, getpatients, getlabassistant, createdoctor, createlab_assistant, createPatient, deleteassignment, deleterole
        }}>
            {props.children}
        </PatientContext.Provider>
    )
}