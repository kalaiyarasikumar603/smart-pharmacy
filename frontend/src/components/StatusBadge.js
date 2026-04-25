function StatusBadge({ status }) {
  const color =
    status === "DELIVERED"
      ? "bg-green-500"
      : status === "PENDING"
      ? "bg-yellow-500"
      : "bg-blue-500";

  return (
    <span className={`text-white px-2 py-1 rounded ${color}`}>
      {status}
    </span>
  );
}

export default StatusBadge;