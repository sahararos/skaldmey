"use client";

import { client } from "@/lib/sanity/client";
import SearchButton from "./SearchButton";
// import { useState } from "react";

const books = [
  {
    id: 1,
    title: "Sálarstríð",
    author: "Steindór Ívarsson",
    coverImage: "/bookcovers/salarstrid.png",
  },
  {
    id: 2,
    title: "sálartjón",
    author: "Alison Espach",
    coverImage: "/bookcovers/brudkaupsfolkid.png",
  },
  {
    id: 3,
    title: "Eftirför",
    author: "Anna Rún Frímannsdóttir",
    coverImage: "/bookcovers/eftirfor.png",
  },
  {
    id: 4,
    title: "Mín er hefndin",
    author: "Nanna Rögnvaldardóttir",
    coverImage: "/bookcovers/minerhefndin.png",
  },
  {
    id: 5,
    title: "Svikabirta",
    author: "Ingi Markússon",
    coverImage: "/bookcovers/svikabirta.png",
  },
  {
    id: 6,
    title: "Syndafall",
    author: "Yrsa Sigurðardóttir",
    coverImage: "/bookcovers/syndafall.png",
  },
];

export default function SearchBar() {
  // const [searchTerm, setSearchTerm] = useState("");

  // const filteredData = books.filter((book) =>
  //   book.title.toLowerCase().startsWith(searchTerm.toLowerCase())
  // );

  return (
    <div className="flex items-start gap-6">
      <div className="relative">
        <div
          className="
          flex h-14 w-112.5 items-center
          rounded-2xl
          bg-[#F5F5F5]
          px-2 py-1
          shadow-[5px_5px_10px_rgba(0,0,0,0.25),-6px_-6px_22px_rgba(255,255,255,1)]
          "
        >
          <div
            className="
            flex h-10 w-108.5 items-center
            rounded-xl
            border-2 border-[#C7C7C7] hover:border-[#ACACAC]
            bg-transparent
            px-4
            "
          >
            <input
              type="text"
              placeholder="Titill, höfundur, ISBN ..."
              // value={searchTerm}
              // onChange={(e) => setSearchTerm(e.target.value)}
              className="
              w-full bg-transparent
              font-montserrat text-sm tracking-wider
              outline-none
              placeholder:text-[#8D8D8D]
              "
            />
          </div>
        </div>

        {/* {searchTerm && (
          <ul
            className="
            absolute left-0 top-14 z-10 w-full
            rounded-b-2xl bg-[#F5F5F5]
            py-2
            shadow-[5px_5px_10px_rgba(0,0,0,0.25),-6px_-6px_22px_rgba(255,255,255,1)]
            "
          >
            {filteredData.map((book) => (
              <li
                key={book.id}
                className="
                px-6 py-4
                font-montserrat text-[18px] tracking-wider text-[#8D8D8D]
                hover:bg-[#EFEFEF]
                "
              >
                {book.title}
              </li>
            ))}
          </ul>
        )} */}
      </div>

      <SearchButton />
    </div>
  );
}