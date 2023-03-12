import Image from "next/image";
import Link from "next/link";
import SearchBox from "./SearchBox";
import { RiSettings3Line } from "react-icons/ri";
import { TbGridDots } from "react-icons/tb";
import SearchHeaderOptions from "./SearchHeaderOptions";

export default function SearchHeader() {
  return (
    <header className="sticky top-0 bg-white">
      <div className="flex items-center justify-between w-full p-6">
        <Link href="/">
          <Image
            width="120"
            height="40"
            src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c51f.png"
            alt="Google logo"
          />
        </Link>
        <div className="flex-1">
          <SearchBox />
        </div>
        <div className="hidden md:inline-flex space-x-2 ">
          <RiSettings3Line className="header-icon" />
          <TbGridDots className="header-icon" />
        </div>
        <button className="px-6 py-2 font-medium text-white transition-all bg-blue-500 rounded-md hover:brightness-105 hover:shadow-md ml-2">
          Sign in
        </button>
      </div>
      <SearchHeaderOptions/>
    </header>
  );
}
