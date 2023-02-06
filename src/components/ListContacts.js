import React from "react";
import SingleContact from "./SingleContact";
import { Link } from "react-router-dom";

const ListContacts = ({ contacts, reRender, setReRender }) => {
  return (
    <div className="container-fluid m-5">
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
          {contacts.length === 0 ? (
            <>
              <tr>
                <td>
                  <h5>Contact list is empty !</h5>
                </td>
                <td>
                  <h5>*</h5>
                </td>
                <td>
                  <h5>*</h5>
                </td>
                <td>
                  <h5>*</h5>
                </td>
              </tr>
            </>
          ) : (
            <>
              {contacts.map((contacts, index) => (
                <tr key={contacts.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{contacts.firstName}</td>
                  <td>{contacts.lastName}</td>
                  <td>{contacts.phonenumber}</td>
                  <td>
                    <SingleContact
                      contacts={contacts}
                      reRender={reRender}
                      setReRender={setReRender}
                    />
                  </td>
                </tr>
              ))}
            </>
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
