import React, { useState } from "react";
import API from "../services/api";

function MedicineForm() {
  const [form, setForm] = useState({
    name: "",
    stock: "",
    price: ""
  });

  const handleSubmit = async () => {
    await API.post("/medicines", form);
    alert("Medicine Added");
  };

  return (
    <div>
      <h2>Add Medicine</h2>

      <input placeholder="Name" onChange={e => setForm({...form, name: e.target.value})} />
      <input placeholder="Stock" onChange={e => setForm({...form, stock: e.target.value})} />
      <input placeholder="Price" onChange={e => setForm({...form, price: e.target.value})} />

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default MedicineForm;