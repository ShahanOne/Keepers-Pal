import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex justify-center py-4">
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`mx-1 px-3 py-1 rounded ${
            page === currentPage ? 'bg-violet-500 text-white' : 'bg-gray-300'
          }`}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
