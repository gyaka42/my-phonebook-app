import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const SingleContact = ({ contacts, reRender, setReRender }) => {
  const deleteContact = () => {
    axios
      .delete(`http://localhost:3004/contacts/${contacts.id}`)
      .then((res) => {
        setReRender(!reRender);
      })
      .catch((err) => {});
  };
  return (
    <div className="container-fluid">
      <div className="container-fluid d-flex justify-content-start align-items-center gap-3">
        <Link
          to={`/edit-contact/${contacts.id}`}
          className="btn btn-secondary btn-sm"
        >
          Edit
        </Link>
        <button
          onClick={deleteContact}
          type="button"
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default SingleContact;
