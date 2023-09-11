"use client";
import { HiSearch } from "react-icons/hi";

interface InputProps {
  handleSearch: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  setLocation: React.Dispatch<React.SetStateAction<string>>;
}

const input = ({ handleSearch, setLocation }: InputProps) => {
  return (
    <form className=" flex items-center md:w-2/4 w-full">
      <input
        type="text"
        placeholder="Enter the city"
        className="w-full outline-none"
        onKeyDown={handleSearch}
        onChange={(e) => setLocation(e.target.value)}
      />
      <div className="ml-[-25px] text-black cursor-pointer">
        <HiSearch />
      </div>
    </form>
  );
};

export default input;
