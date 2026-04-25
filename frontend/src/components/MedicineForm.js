import React, { useState } from "react";
import API from "../services/api";
import "../styles/form.css";   // ✅ reuse same CSS

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
    <div className="page">   {/* ✅ main container */}
      <h2>Add Medicine</h2>

      <div className="form-row">

        <input
          className="input"
          placeholder="Medicine Name"
          onChange={e => setForm({...form, name: e.target.value})}
        />

        <input
          className="input"
          placeholder="Stock"
          onChange={e => setForm({...form, stock: e.target.value})}
        />

        <input
          className="input"
          placeholder="Price"
          onChange={e => setForm({...form, price: e.target.value})}
        />

        <button className="btn" onClick={handleSubmit}>
          Submit
        </button>

      </div>
    </div>
  );
}

export default MedicineForm;