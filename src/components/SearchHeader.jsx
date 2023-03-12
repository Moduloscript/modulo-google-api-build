import Image from "next/image";
import Link from "next/link";
import SearchBox from "./SearchBox";
import { RiSettings3Line } from 'react-icons/ri'
import {TbGridDots} from 'react-icons/tb'

export default function SearchHeader() {
  return (
    <header>
      <div className="">
        <Link href="/">
          <Image
            width="120"
            height="40"
            src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c51f.png"
            alt="Google logo"
          />
        </Link>
        <div>
         <SearchBox/>
        </div>
        <div className="">
          <RiSettings3Line className="header-icon"/>
          <TbGridDots className="header-icon"/>
        </div>
        <button className="px-6 py-2 font-medium text-white bg-blue-500 rounded-md hover:brightness-105">
          Sign in
        </button>
      </div>
    </header>
  );
}
