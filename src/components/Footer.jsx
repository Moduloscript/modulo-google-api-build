import React from "react";
import CountryLookup from "./CountryLookup";

export default function Footer() {
  return (
    <footer className="absolute bottom-0 text-sm text-gray-500 bg-[#f2f2f2] w-full">
      <div className="px-8 py-3 border-b ">
        <CountryLookup />
      </div>
      <div
        className="flex flex-col items-center justify-between px-8 py-3 sm:flex-row space-y-7 sm:space-y-0"
      >
        <ul className="flex items-center space-x-6">
          <li className="cursor-pointer link">Home</li>
          <li className="cursor-pointer link">About</li>
          <li className="cursor-pointer link">Advertisting</li>
          <li className="cursor-pointer link">Business</li>
          <li className="cursor-pointer link">How Search Works</li>
        </ul>
        <ul className="flex items-center space-x-6">
          <li className="cursor-pointer link items-centerointer">
            Privacy
          </li>
          <li className="cursor-pointer link">Terms</li>
          <li className="cursor-pointer link">Settings</li>
        </ul>
      </div>
    </footer>
  );
}
