import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import PatientForm from "./components/PatientForm";
import MedicineForm from "./components/MedicineForm";
import OrderForm from "./components/OrderForm";
import DeliveryForm from "./components/DeliveryForm";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Patients</Link> |
        <Link to="/medicines">Medicines</Link> |
        <Link to="/orders">Orders</Link> |
        <Link to="/delivery">Delivery</Link>
      </nav>

      <Routes>
        <Route path="/" element={<PatientForm />} />
        <Route path="/medicines" element={<MedicineForm />} />
        <Route path="/orders" element={<OrderForm />} />
        <Route path="/delivery" element={<DeliveryForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
 
