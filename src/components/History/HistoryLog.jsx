import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useFetch from "../../hooks/useFetchData";
import Pagination from "./Pagination"; // Import Pagination component

const HistoryLog = () => {
  const [formattedData, setFormattedData] = useState([]);
  const [totalPages, setTotalPages] = useState(0); 
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const brandQuery = useSelector((state) => state.table.brandQuery); 
  const { data, error, loading } = useFetch(
    `http://localhost:8000/api/history-log?page=${currentPage}&limit=${rowsPerPage}&${brandQuery}`
  );

  useEffect(() => {
    if (data) {
      const formattedData = data.data.map((item) => {
        const newCondition = item.conditions.find((c) => c.condition === "new") || { totalCars: 0, totalPrice: 0, averagePrice: 0 };
        const usedCondition = item.conditions.find((c) => c.condition === "used") || { totalCars: 0, totalPrice: 0, averagePrice: 0 };
        const cpoCondition = item.conditions.find((c) => c.condition === "cpo") || { totalCars: 0, totalPrice: 0, averagePrice: 0 };

        return {
          _id: item._id, // Date
          newInventory: newCondition.totalCars,
          newTotalPrice: newCondition.totalPrice,
          newAvgPrice: Math.ceil(newCondition.averagePrice),
          usedInventory: usedCondition.totalCars,
          usedTotalPrice: usedCondition.totalPrice,
          usedAvgPrice: Math.ceil(usedCondition.averagePrice),
          cpoInventory: cpoCondition.totalCars,
          cpoTotalPrice: cpoCondition.totalPrice,
          cpoAvgPrice: Math.ceil(cpoCondition.averagePrice),
        };
      });

      setFormattedData(formattedData);
      setTotalPages(data.totalPages);
    }
  }, [data, currentPage, rowsPerPage, brandQuery]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Handle change of rows per page
  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(+(event.target.value));
    setCurrentPage(1); 
  };

  return (
    <div className=" ">
      <h2 className="text-2xl font-semibold p-4 mb-6">History Log Table</h2>

      <table className="table-auto bg-white rounded-lg shadow-md overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Date</th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">New Inventory</th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">New Total Price</th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">New Avg Price</th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Used Inventory</th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Used Total Price</th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Used Avg Price</th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">CPO Inventory</th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">CPO Total Price</th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">CPO Avg Price</th>
          </tr>
        </thead>
        <tbody>
          {formattedData.map((item) => (
            <tr key={item._id} className="border-t hover:bg-gray-50 transition duration-200">
              <td className="px-6 py-4 text-sm text-gray-900">{item._id}</td>
              <td className="px-6 py-4 text-sm text-gray-700 text-center">{item.newInventory}</td>
              <td className="px-6 py-4 text-sm text-gray-700 text-center">{item.newTotalPrice}</td>
              <td className="px-6 py-4 text-sm text-gray-700 text-center">{item.newAvgPrice}</td>
              <td className="px-6 py-4 text-sm text-gray-700 text-center">{item.usedInventory}</td>
              <td className="px-6 py-4 text-sm text-gray-700 text-center">{item.usedTotalPrice}</td>
              <td className="px-6 py-4 text-sm text-gray-700 text-center">{item.usedAvgPrice}</td>
              <td className="px-6 py-4 text-sm text-gray-700 text-center">{item.cpoInventory}</td>
              <td className="px-6 py-4 text-sm text-gray-700 text-center">{item.cpoTotalPrice}</td>
              <td className="px-6 py-4 text-sm text-gray-700 text-center">{item.cpoAvgPrice}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Component */}
      <Pagination 
        currentPage={currentPage} 
        totalPages={totalPages} 
        onPageChange={paginate} 
        rowsPerPage={rowsPerPage}
        handleRowsPerPageChange={handleRowsPerPageChange}
      />
    </div>
  );
};

export default HistoryLog;
