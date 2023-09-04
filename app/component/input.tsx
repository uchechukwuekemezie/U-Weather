"use client";
import { HiSearch } from "react-icons/hi";
const input = () => {
  return (
    <form className=" flex items-center md:w-2/4 w-full">
      <input
        type="text"
        placeholder="Enter the city"
        className="w-full outline-none"
      />
      <div className="ml-[-25px] text-black cursor-pointer">
        <HiSearch />
      </div>
    </form>
  );
};

export default input;
