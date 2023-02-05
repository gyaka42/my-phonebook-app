import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";

import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css"
import "../styles/EditContactForms.css"


const EditContactForm = () => {
    const params = useParams()
    const navigate = useNavigate()
    const [editContact, setEditContact] = useState(null)
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [phonenumber, setphonenumber] = useState("")
    console.log(params)

    useEffect(() => {
        axios.get(`http://localhost:3004/contacts/${params.contactId}`)
            .then(res => {
                setEditContact(res.data)
                setFirstName(res.data.firstName)
                setLastName(res.data.lastName)
                setphonenumber(res.data.phonenumber)
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    const checkContact = (event) => {
        event.preventDefault();
        /*Validation*/
        if (firstName === "" ||
            lastName === "" ||
            phonenumber === "") {
            alert("All Fields need to be filled in !")
            return
        }

        const editedContact = {
            id: params.contactId,
            firstName: firstName,
            lastName: lastName,
            phonenumber: phonenumber,
        }
        axios.put(`http://localhost:3004/contacts/${params.contactId}`, editedContact)
            .then(res => {
                navigate("/")
            })
            .catch(err => {
                alert("An Error Occured during updating contact.")
            })


        if (editContact === null) {
            return null
        }
    }

    return (
        <div className="container my-5 w-50">
            <Header />
            <div className="d-flex justify-content-center align-items-center">
            </div>
            <div className="container my-5 w-50">
                <p className="fw-bold fs-4 text-center">Contact Information.</p>
                <form onSubmit={checkContact}>
                    <div className="mb-3">
                        <label htmlFor="firstName" className="form-label">Firstname</label>
                        <input type="text" className="form-control" id="firstName" placeholder="Example: John" value={firstName} onChange={(event) => setFirstName(event.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="lastName" className="form-label">Lastname</label>
                        <input type="text" className="form-control" id="lastName" placeholder="Example: Doe" value={lastName} onChange={(event) => setLastName(event.target.value)} />
                    </div>

                    {/* <div className="mb-3">
                        <label htmlFor="phonenumber" className="form-label">Phone Number</label>
                        <input type="tel" pattern="[+]{1}[0-9]{11,11}" className="form-control" id="phonenumber" placeholder="Example: +31612345678" value={phonenumber} onChange={(event) => setphonenumber(event.target.value)} />
                    </div> */}

                    <div>
                        <p>Phone Number</p>
                    </div>
                    <PhoneInput
                        value={phonenumber}
                        onChange={(value) => { setphonenumber(value) }}
                        defaultCountry="NL"
                        placeholder="+31 623456789"
                    />

                    <div className="d-flex justify-content-center align-items-center gap-4 mt-4">
                        <button type="submit" className="btn btn-primary ">Update</button>
                        <button onClick={() => navigate("/")} className="btn btn-danger">Back</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditContactForm