function Dashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white p-5 shadow rounded">
          <h3>Total Patients</h3>
          <p className="text-xl font-bold">--</p>
        </div>

        <div className="bg-white p-5 shadow rounded">
          <h3>Total Orders</h3>
          <p className="text-xl font-bold">--</p>
        </div>

        <div className="bg-white p-5 shadow rounded">
          <h3>Pending Deliveries</h3>
          <p className="text-xl font-bold">--</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;