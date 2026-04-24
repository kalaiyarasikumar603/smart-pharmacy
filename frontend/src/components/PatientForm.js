import React, { useState } from "react";
import API from "../services/api";

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
    <div>
      <h2>Add Patient</h2>

      <input placeholder="Name" onChange={e => setForm({...form, name: e.target.value})} />
      <input placeholder="Age" onChange={e => setForm({...form, age: e.target.value})} />
      <input placeholder="Phone" onChange={e => setForm({...form, phone: e.target.value})} />
      <input placeholder="Address" onChange={e => setForm({...form, address: e.target.value})} />

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default PatientForm;