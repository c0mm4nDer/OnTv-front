"use client";
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getAllEpisode } from "../_api/get-all-episode";
import { NewestCard } from "@/app/_components/cards/newest-card";

function Episode({ data, itemId}: { data: any; itemId: string }) {
  const [page, setPage] = useState<number>(1);

  const { data: episode, isLoading } = useQuery({
    queryKey: ["episode", { id: itemId, page }],
    queryFn: () => getAllEpisode({ id: itemId, page }),
    initialData: data,
  });

  const totalPages = episode?.Episodes?.meta?.last_page || 1;

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  const getDisplayedPages = () => {
    let startPage = Math.max(1, page - 1);
    let endPage = Math.min(totalPages, startPage + 3);

    if (endPage - startPage < 3) {
      startPage = Math.max(1, endPage - 3);
    }

    const pages = [];
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <div className="relative">
      {isLoading ? (
        <div className=" h-[400px] flex items-center justify-center bg-black bg-opacity-50">
          <div className="loader">Loading...</div>
        </div>
      ) : (
        <div
          className={`container flex px-4 md:px-0 flex-col md:grid w-full md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 justify-center items-center gap-2 mx-auto overflow-auto ${
            isLoading ? "opacity-50" : ""
          }`}
        >
          {episode?.Episodes?.data?.map((item: any, index: any) => (
            <React.Fragment key={item?.id}>
              <NewestCard
                 data={{...item, index: index + 1}}
              />
            </React.Fragment>
          ))}
        </div>
      )}

      <div className="flex justify-center mt-4 gap-2">
        <button
          onClick={handlePrevPage}
          disabled={page === 1}
          className={`px-4 py-2 rounded  font-thin text-white ${
            page === 1 ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          صفحه قبل
        </button>
        {getDisplayedPages().map((pageNum) => (
          <button
            key={pageNum}
            onClick={() => setPage(pageNum)}
            className={`px-2 py-2 rounded ${
              pageNum === page
                ? "bg-blue-500 text-white"
                : "bg-gray-300 text-black"
            }`}
          >
            {pageNum}
          </button>
        ))}
        <button
          onClick={handleNextPage}
          disabled={page === totalPages}
          className={`px-4 py-2 rounded font-thin text-white ${
            page === totalPages ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          صفحه بعد
        </button>
      </div>
    </div>
  );
}

export default Episode;
