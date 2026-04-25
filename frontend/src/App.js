import './App.css';
import "./styles/layout.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import PatientForm from "./components/PatientForm";
import MedicineForm from "./components/MedicineForm";
import OrderForm from "./components/OrderForm";
import DeliveryForm from "./components/DeliveryForm";

function App() {
  return (
    <BrowserRouter>
      <div className="app">

        {/* Sidebar */}
        <div className="sidebar">
          <h2>Pharmacy</h2>

          <Link to="/">Patients</Link>
          <Link to="/medicines">Medicines</Link>
          <Link to="/orders">Orders</Link>
          <Link to="/delivery">Delivery</Link>
        </div>

        {/* Content */}
        <div className="content">
          <Routes>
            <Route path="/" element={<PatientForm />} />
            <Route path="/medicines" element={<MedicineForm />} />
            <Route path="/orders" element={<OrderForm />} />
            <Route path="/delivery" element={<DeliveryForm />} />
          </Routes>
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;