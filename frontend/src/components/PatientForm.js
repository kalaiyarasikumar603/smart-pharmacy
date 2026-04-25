import React, { useState } from "react";
import API from "../services/api";
import "../styles/form.css";   // ✅ import CSS

function PatientForm() {
  const [form, setForm] = useState({
    name: "",
    age: "",
    phone: "",
    address: ""
  });

  const handleSubmit = async () => {
    await API.post("/patients", form);
    alert("Patient Added");
  };

  return (
    <div className="page">   {/* ✅ main container */}
      <h2>Add Patient</h2>

      <div className="form-row">  {/* ✅ row layout */}

        <input
          className="input"
          placeholder="Name"
          onChange={e => setForm({...form, name: e.target.value})}
        />

        <input
          className="input"
          placeholder="Age"
          onChange={e => setForm({...form, age: e.target.value})}
        />

        <input
          className="input"
          placeholder="Phone"
          onChange={e => setForm({...form, phone: e.target.value})}
        />

        <input
          className="input"
          placeholder="Address"
          onChange={e => setForm({...form, address: e.target.value})}
        />

        <button className="btn" onClick={handleSubmit}>
          Submit
        </button>

      </div>
    </div>
  );
}

export default PatientForm;