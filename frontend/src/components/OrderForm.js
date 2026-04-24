import React, { useState } from "react";
import API from "../services/api";

function OrderForm() {
  const [patientId, setPatientId] = useState("");
  const [items, setItems] = useState([
    { medicine_id: "", quantity: "" }
  ]);

  const addItem = () => {
    setItems([...items, { medicine_id: "", quantity: "" }]);
  };

  const handleItemChange = (index, field, value) => {
    const updated = [...items];
    updated[index][field] = value;
    setItems(updated);
  };

  const handleSubmit = async () => {
    const payload = {
      patient_id: Number(patientId),
      items: items.map(i => ({
        medicine_id: Number(i.medicine_id),
        quantity: Number(i.quantity)
      }))
    };

    const res = await API.post("/orders", payload);
    alert("Order Created. Priority: " + res.data.priority);
  };

  return (
    <div>
      <h2>Create Order</h2>

      <input
        placeholder="Patient ID"
        onChange={e => setPatientId(e.target.value)}
      />

      {items.map((item, index) => (
        <div key={index}>
          <input
            placeholder="Medicine ID"
            onChange={e => handleItemChange(index, "medicine_id", e.target.value)}
          />
          <input
            placeholder="Quantity"
            onChange={e => handleItemChange(index, "quantity", e.target.value)}
          />
        </div>
      ))}

      <button onClick={addItem}>Add More</button>
      <button onClick={handleSubmit}>Submit Order</button>
    </div>
  );
}

export default OrderForm;