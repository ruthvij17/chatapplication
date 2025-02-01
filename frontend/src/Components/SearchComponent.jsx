import React from "react";
import { IoSearchOutline } from "react-icons/io5";

const SearchComponent = () => {
  return (
    <>
      <div className="bg-[rgb(200,200,255)] rounded-lg flex flex-row items-center pl-2 pr-2 shadow-sm shadow-gray-800">
        <span className="text-xl">
          <IoSearchOutline />
        </span>
        <input
          type="search"
          className="bg-transparent outline-none text-lg"
          placeholder="Search"
        />
      </div>
    </>
  );
};

export default SearchComponent;
