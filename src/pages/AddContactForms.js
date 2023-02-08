import React, { useState, useEffect } from "react";
import Header from "../components/Header";

import axios from "axios";
import "../styles/AddContactForms.css"
import { useNavigate, Link } from "react-router-dom";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css"


const AddContactForms = () => {
    const navigate = useNavigate()
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [phonenumber, setphonenumber] = useState("")
    const [contacts, setContacts] = useState(null)

    const saveContact = (event) => {
        event.preventDefault();
        /*Validation*/
        if (firstName === "" || lastName === "" || phonenumber === "") {
            alert("All Fields need to be filled in !")
            return
        }
        
        const newContact = {
            id: String(new Date().getTime()),
            firstName: firstName,
            lastName: lastName,
            phonenumber: phonenumber,
        }
        axios.post("http://localhost:3004/contacts", newContact)
            .then(res => {
                navigate("/")
            })
            .catch(err => {
                alert("An Error Occured")
            })



    };


    useEffect(() => {
        axios.get("http://localhost:3004/contacts")
            .then(res => {
                setContacts(res.data)
            })
            .catch(err => { })
    }, [])



    if (contacts === null) { return null }


    return (
        <div className="container my-5 w-50">
            <Header />
            <div className="d-flex justify-content-center align-items-center">
            </div>
            <div className="container my-5 w-50">
                <p className="fw-bold fs-4 text-center">Contact Information.</p>
                <form onSubmit={saveContact}>
                    <div className="mb-3">
                        <label htmlFor="firstName" className="form-label">Firstname:</label>
                        <input type="text" className="form-control form" id="firstName" placeholder="Example: John" value={firstName} onChange={(event) => setFirstName(event.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="lastName" className="form-label">Lastname:</label>
                        <input type="text" className="form-control" id="lastName" placeholder="Example: Doe" value={lastName} onChange={(event) => setLastName(event.target.value)} />
                    </div>

                    {/* THIS WAS MY INITIAL INPUT FIELD
                     <div className="mb-3">
                        <label htmlFor="phonenumber" className="form-label">Phone Number</label>
                        <input type="tel" pattern="[+]{1}[0-9]{11,11}" className="form-control" id="phonenumber" placeholder="Example: +31612345678" value={phonenumber} onChange={(event) => setphonenumber(event.target.value)} />
                    </div> */}
                    
                    <div>
                    <p>Phone Number:</p>
                    </div>
                    <PhoneInput 
                    value={phonenumber}
                    onChange={(value)=>{setphonenumber(value)}}
                    defaultCountry="NL"
                    placeholder="+31 623456789"
                    />
                    <div className="d-flex justify-content-center align-items-center gap-4 mt-4">
                        <button type="submit" className="btn btn-primary ">Submit</button>
                        <Link to="/">
                        <button className="btn btn-danger">Back</button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddContactForms