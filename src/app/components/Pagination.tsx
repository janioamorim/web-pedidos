import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  itemsPerPage: number;
  setItemsPerPage: (items: number) => void;
  changePage: (newPage: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  itemsPerPage,
  setItemsPerPage,
  changePage,
}) => {
  return (
    <div className="flex items-center justify-between p-2 bg-gray-custom-200 rounded-lg ">

      <div className="flex items-center space-x-2 ">
        <button
          className="p-2 rounded bg-transparent text-red-500 disabled:opacity-50"
          onClick={() => changePage(1)}
          disabled={currentPage === 1}
        >
          «
        </button>
        <button
          className="px-4 rounded bg-transparent text-red-500 disabled:opacity-50"
          onClick={() => changePage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          ‹
        </button>

        {Array.from({ length: totalPages }, (_, i) => i + 1)
          .slice(Math.max(0, currentPage - 3), currentPage + 2)
          .map((page) => (
            <button
              key={page}
              onClick={() => changePage(page)}
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                currentPage === page ? 'bg-red-custom-100 text-white' : 'text-color'
              }`}
            >
              {page}
            </button>
          ))}

        <button
          className="px-4 rounded bg-transparent text-red-500 disabled:opacity-50"
          onClick={() => changePage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          ›
        </button>
        <button
          className="px-4 rounded bg-transparent text-red-500 disabled:opacity-50"
          onClick={() => changePage(totalPages)}
          disabled={currentPage === totalPages}
        >
          »
        </button>

        <span className="text-color ml-2 px-4 text-font-14">
          {currentPage} de {totalPages} páginas
        </span>
      </div>


      <div className="flex items-center space-x-2">
        <span className="text-color text-font-14">Linhas por página</span>
        <select
          className="border rounded-8 p-1 select-custom"
          value={itemsPerPage}
          onChange={(e) => {
            setItemsPerPage(Number(e.target.value));
          }}
        >
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
        </select>
      </div>
    </div>
  );
};

export default Pagination;