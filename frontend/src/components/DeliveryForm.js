import React, { useState } from "react";
import API from "../services/api";

function DeliveryForm() {
  const [form, setForm] = useState({
    order_id: "",
    delivery_person: ""
  });

  const handleSubmit = async () => {
    await API.post("/deliveries", {
      order_id: Number(form.order_id),
      delivery_person: form.delivery_person
    });

    alert("Delivery Assigned");
  };

  return (
    <div>
      <h2>Assign Delivery</h2>

      <input placeholder="Order ID" onChange={e => setForm({...form, order_id: e.target.value})} />
      <input placeholder="Delivery Person" onChange={e => setForm({...form, delivery_person: e.target.value})} />

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default DeliveryForm;