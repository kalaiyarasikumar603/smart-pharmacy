import React, { useState } from "react";
import API from "../services/api";
import "../styles/form.css";

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
    <div className="page">
      <h2>Create Order</h2>

      {/* Patient ID */}
      <div className="form-group">
        <input
          className="input"
          placeholder="Patient ID"
          onChange={e => setPatientId(e.target.value)}
        />
      </div>

      {/* Items */}
      <div className="items-section">
        {items.map((item, index) => (
          <div className="item-row" key={index}>
            <input
              className="input"
              placeholder="Medicine ID"
              onChange={e =>
                handleItemChange(index, "medicine_id", e.target.value)
              }
            />

            <input
              className="input"
              placeholder="Quantity"
              onChange={e =>
                handleItemChange(index, "quantity", e.target.value)
              }
            />
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div className="btn-group">
        <button className="btn secondary" onClick={addItem}>
          + Add Item
        </button>

        <button className="btn" onClick={handleSubmit}>
          Submit Order
        </button>
      </div>
    </div>
  );
}

export default OrderForm;