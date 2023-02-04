import React from "react";
import SingleContact from "./SingleContact";
import { Link } from "react-router-dom";


const ListContacts = ({ contacts, reRender, setReRender }) => {


    return (
        <div className="m-5">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Firstname</th>
                        <th scope="col">Lastname</th>
                        <th scope="col">Phonenumber</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.length === 0 ? (<>
                        <tr>
                            <td>
                                Contacts list is empty !
                            </td>
                        </tr>
                  </>  ) : (
                        <>
                            {contacts.map((contacts, index) => (
                                <tr key={contacts.id}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{contacts.firstName}</td>
                                    <td>{contacts.lastName}</td>
                                    <td>{contacts.phonenumber}</td>
                                    <td><SingleContact contacts={contacts} reRender={reRender} setReRender={setReRender} /></td>
                                </tr>

                            ))}

                        </>
                    )

                    }
                </tbody>
            </table>
            <div className="d-flex justify-content-center align-items-center m-5">
            <Link to={"/add-contact"} className="btn btn-primary btn-lg">Add Contact</Link> 
            </div>
            
        </div>
    )
}

export default ListContacts