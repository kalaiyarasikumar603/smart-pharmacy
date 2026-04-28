import React, { useState } from "react";
import API from "../services/api";
import "../styles/form.css";   // ✅ import CSS

function DeliveryForm() {
  const [form, setForm] = useState({
    order_id: "",
    delivery_person: ""
  });

  const handleSubmit = async () => {
  try {
    const res = await API.post("/deliveries", {
      order_id: Number(form.order_id),
      delivery_person: form.delivery_person
    });

    console.log("SUCCESS:", res.data);
    alert("Delivery Assigned");
  } catch (err) {
    console.error("REAL ERROR:", err.response?.data || err.message);
    alert("Delivery not assigned");
  }
};
  return (
    <div className="page">
      <h2>Assign Delivery</h2>

      <div className="form-row">

        <input
          className="input"
          placeholder="Order ID"
          onChange={e => setForm({ ...form, order_id: e.target.value })}
        />

        <input
          className="input"
          placeholder="Delivery Person"
          onChange={e => setForm({ ...form, delivery_person: e.target.value })}
        />

        <button className="btn" onClick={handleSubmit}>
          Assign Delivery
        </button>

      </div>
    </div>
  );
}

export default DeliveryForm;