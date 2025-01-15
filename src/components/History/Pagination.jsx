import React from "react";
import PropTypes from "prop-types";

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  handleRowsPerPageChange,
  rowsPerPage,
}) => {
  const handlePageChange = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      onPageChange(pageNumber); // Call the callback to change the page
    }
  };

  const generatePageNumbers = () => {
    let pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  return (
    <div className="flex justify-center items-center mt-4 space-x-2">
      <div className="mb-4">
        <label className="text-sm font-semibold text-gray-700 mr-2">
          Rows per page:
        </label>
        <select
          value={rowsPerPage}
          onChange={handleRowsPerPageChange}
          className="p-2 border rounded-md"
        >
          <option value={10}>10</option>
          <option value={15}>15</option>
          <option value={20}>20</option>
        </select>

        {/* Previous Button */}
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-300 rounded-lg text-sm"
        >
          Prev
        </button>

        {/* Page Number Buttons */}
        {generatePageNumbers().map((pageNum) => (
          <button
            key={pageNum}
            onClick={() => handlePageChange(pageNum)}
            className={`px-4 py-2 text-sm rounded-lg ${
              pageNum === currentPage ? "bg-[#ff9a26] text-white" : "bg-gray-200"
            }`}
          >
            {pageNum}
          </button>
        ))}

        {/* Next Button */}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-300 rounded-lg text-sm"
        >
          Next
        </button>
      </div>
    </div>
  );
};
Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  handleRowsPerPageChange: PropTypes.func.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

export default Pagination;
