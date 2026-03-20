"use client";

import SearchButton from "./SearchButton";
// import { useState, useEffect } from "react";
// import Link from "next/link";


// useEffect(() => {
//   if (!searchTerm.trim()) {
//     setResults([]);
//     return;
//   }

//   const fetchData = async () => {
//     const res = await fetch(`/api/search?q=${searchTerm}`);
//     const data = await res.json();
//     setResults(data);
//   };

//   fetchData();
// }, [searchTerm]);

// const [searchTerm, setSearchTerm] = useState("");
// const [results, setResults] = useState([]);



export default function SearchBar() {

  return (
    <div className="flex w-full items-start gap-3 md:gap-4 lg:gap-6">
      <div className="relative min-w-0 flex-1">
        <div
          className="
          flex h-14 w-full items-center
          rounded-2xl
          bg-[#F5F5F5]
          px-2 py-1
          shadow-[5px_5px_10px_rgba(0,0,0,0.25),-6px_-6px_22px_rgba(255,255,255,1)]
          "
        >
          <div
            className="
            flex h-10 w-full items-center
            rounded-xl border-2 border-[#C7C7C7] bg-transparent px-3
            hover:border-[#ACACAC]
            "
          >
            <input
              type="text"
              placeholder="Titill, höfundur, ISBN ..."
              // value={searchTerm}
              // onChange={(e) => setSearchTerm(e.target.value)}
              className="
              w-full bg-transparent
              font-montserrat text-sm tracking-wide outline-none
              placeholder:text-[#8D8D8D]
              md:text-base 
              "
            />
          </div>
        </div>
      </div>

      <SearchButton />
    </div>
  );
}