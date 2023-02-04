import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import ListContacts from "../components/ListContacts";

import axios from "axios";

const Home = () => {
    const [contacts, setContacts] = useState(null)
    const [reRender, setReRender] = useState(false)

    useEffect(() => {
        axios.get("http://localhost:3004/contacts")
            .then(res => {
                setContacts(res.data)
            })
            .catch(err => {
                alert("There was an error retrieving contact information!")
            })
    }, [reRender])

    if (contacts === null) {
        return null
    }
    return (
        <div className="container my-5 w-50">
            <div>
            <Header />
            <ListContacts contacts={contacts} reRender={reRender} setReRender={setReRender} />
            </div>
        </div>
    )
}

export default Home