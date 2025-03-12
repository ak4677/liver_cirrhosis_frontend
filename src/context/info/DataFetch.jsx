import { React, useState } from "react";
import { useContext } from "react";
import PatientContext from "./PatientContext";


export default function DataFetch(props) {
    const intial = []
    const [patientdata, Setpatinetdata] = useState(intial)
    const [logininfo,setlogininfo]=useState({})
    //patient data fetching
    const fetchdata = async () => {
        const response = await fetch("http://localhost:5000/api/datatras/patientdata", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkb2N0b3IiOnsiaWQiOiI2N2NjOTNmNjk3Mjk5YzJkZGJjZTU4YmIifSwiaWF0IjoxNzQxNDYwNDcwfQ.coMx6UrIwGYDmlU9O7ejSoaxrzZHm1A70NyJHn-2_94",
            }
        })
        const data = await response.json();
        // console.log(data);
        Setpatinetdata(data)
    }
    
    //doctor login
    const doclogin = async () => {
        const response = await fetch("http://localhost:5000/api/auth/getdoc", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkb2N0b3IiOnsiaWQiOiI2N2NjOTNmNjk3Mjk5YzJkZGJjZTU4YmIifSwiaWF0IjoxNzQxNDYwNDcwfQ.coMx6UrIwGYDmlU9O7ejSoaxrzZHm1A70NyJHn-2_94",
            }
        })
        const data1 = await response.json();
        // console.log(data1);
        if(data1){
            
        setlogininfo({...data1})
        }
    }

    return (
        <PatientContext.Provider value={{patientdata,logininfo,fetchdata,doclogin}}>
            {props.children}
        </PatientContext.Provider>
    )
}