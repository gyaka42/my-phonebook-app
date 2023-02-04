import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddContactForms from "./pages/AddContactForms";
import EditContactForm from "./pages/EditContactForm";

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add-contact/" element={<AddContactForms />} />
      <Route path="/edit-contact/:contactId" element={<EditContactForm />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
