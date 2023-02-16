import React, { useState } from "react";
import SingleContact from "./SingleContact";
import { Link } from "react-router-dom";
import "../styles/listContacts.css";

const ListContacts = ({ contacts, reRender, setReRender }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredContacts = contacts.filter((contact) =>
    `${contact.firstName} ${contact.lastName} ${contact.phonenumber}`
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  filteredContacts.sort((a, b) => (a.firstName > b.firstName ? 1 : -1));

  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="container-fluid m-5">
      <div className="container d-flex mb-3">
        <input
          className="px-3 rounded-4 border border-3 inputField"
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={handleSearchQueryChange}
        />
      </div>
      <table className="table container-fluid">
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
          {filteredContacts.length === 0 ? (
            <tr>
              <td colSpan="5">
                <h5>No contacts found!</h5>
              </td>
            </tr>
          ) : (
            filteredContacts.map((contact, index) => (
              <tr key={contact.id}>
                <th scope="row">{index + 1}</th>
                <td>{contact.firstName}</td>
                <td>{contact.lastName}</td>
                <td>{contact.phonenumber}</td>
                <td>
                  <SingleContact
                    contacts={contact}
                    reRender={reRender}
                    setReRender={setReRender}
                  />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      <div className="d-flex justify-content-center">
        <Link to={"/add-contact"} className=" btn btn-primary me-5 mt-5">
          Add Contact
        </Link>
      </div>
    </div>
  );
};

export default ListContacts;
