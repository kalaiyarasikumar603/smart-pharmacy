import './App.css';
import "./styles/layout.css";
import { BrowserRouter, Routes, Route, Link,Navigate } from "react-router-dom";
import Home from "./pages/Home";
import PatientForm from "./components/PatientForm";
import MedicineForm from "./components/MedicineForm";
import OrderForm from "./components/OrderForm";
import DeliveryForm from "./components/DeliveryForm";
import Admin from "./components/Admin";



function App() {
  return (
    <BrowserRouter>
      <div className="app">

        {/* Sidebar */}
        <div className="sidebar">
          <h2>Pharmacy</h2>
          <Link to="/">Home</Link>
          <Link to="/patients">Patients</Link>
          <Link to="/medicines">Medicines</Link>
          <Link to="/orders">Orders</Link>
          <Link to="/delivery">Delivery</Link>
          <Link to="/Admin">Admin</Link>
        </div>

        {/* Content */}
        <div className="content">
          <Routes>
            
            {/* ✅ Default Home Page */}
             <Route path="/" element={<Navigate to="/home" />} />

            <Route path="/home" element={<Home />} />
            <Route path="/patients" element={<PatientForm />} />
            <Route path="/medicines" element={<MedicineForm />} />
            <Route path="/orders" element={<OrderForm />} />
            <Route path="/delivery" element={<DeliveryForm />} />
            <Route path="/admin" element={<Admin />} />

          </Routes>
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;