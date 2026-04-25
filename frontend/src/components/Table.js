function Table({ columns, data }) {
  return (
    <table className="w-full bg-white shadow rounded">
      <thead>
        <tr className="bg-gray-200">
          {columns.map((col, i) => (
            <th key={i} className="p-3 text-left">{col}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        {data.map((row, i) => (
          <tr key={i} className="border-t">
            {Object.values(row).map((val, j) => (
              <td key={j} className="p-3">{val}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;