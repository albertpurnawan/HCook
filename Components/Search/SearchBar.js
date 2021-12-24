import React from "react";
import { SearchIcon } from "@heroicons/react/solid";
export default function SearchBar({ placeholder, data }) {
  return (
    <div className="">
      <div className="flex flex-row">
        <input type="text" placeholder={placeholder} className="p-2" />
        <SearchIcon className="w-7 h-7 mt-1" role="button" />
        <div className=""></div>
      </div>
      <div className=""></div>
    </div>
  );
}
