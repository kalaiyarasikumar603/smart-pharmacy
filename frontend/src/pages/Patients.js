import { useEffect, useState } from "react";
import API from "../services/api";
import Table from "../components/Table";
import "../styles/table.css";

function Patients() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    API.get("/patients")
      .then(res => setPatients(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Patients</h1>

      <Table
        columns={["ID", "Name", "Age", "Phone", "Elderly"]}
        data={patients.map(p => ({
          id: p.id,
          name: p.name,
          age: p.age,
          phone: p.phone,
          elderly: p.is_elderly ? "Yes" : "No"
        }))}
      />
    </div>
  );
}

export default Patients;