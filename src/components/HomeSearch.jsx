"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";

export default function HomeSearch() {
  const [input, setInput] = useState("");
  const [randomSearchLoading, setRandomSearchLoading] = useState(false);
  const router = useRouter();
  function handleSubmit(e) {
    e.preventDefault();
    if (!input.trim()) return;
    router.push(`/search/web?searchTerm=${input}`);
  }

  async function randomSearch(e) {
    setRandomSearchLoading(true);
    const response = await fetch("https://random-word-api.herokuapp.com/word")
      .then((res) => res.json())
      .then((data) => data[0]);
    if (!response) return;
    router.push(`/search/image?searchTerm=${response}`);
    setRandomSearchLoading(false);
  }
  return (
    <>
      <form
        onSubmit={handleSubmit}
        value={input}
        className="flex w-full mt-5 mx-auto max-w-[90%] border border-gray-200 px-5 py-3 rounded-full hover:shadow-md transition-shadow focus-within:shadow-md sm:max-w-xl lg:max-w-2xl"
      >
        <AiOutlineSearch className="mr-3 text-xl text-gray-500" />
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          className="flex-grow focus:outline-none"
        />
        <BsFillMicFill className="text-lg" />
      </form>
      <div className="flex flex-col justify-center mt-8 space-y-2 sm:space-y-0 sm:space-x-4 sm:flex-row">
        <button
          onClick={handleSubmit}
          className="bg-[#f8f9fa] rounded-md text-sm text-gray-800 hover:ring-1 hover:ring-gray-200 focus:outline-none active:ring-gray-300 hover:shadow-md w-36 h-10 transition-shadow"
        >
          Google Search
        </button>
        <button
          disabled={randomSearchLoading}
          onClick={randomSearch}
          className="bg-[#f8f9fa] rounded-md text-sm text-gray-800 hover:ring-1 hover:ring-gray-200 focus:outline-none active:ring-gray-300 hover:shadow-md w-36 h-10 transition-shadow flex items-center justify-center disabled:opacity-80"
        >
          {randomSearchLoading ? (
            <img
              className="h-6 text-center"
              src="spinner.svg"
              alt="looading ..."
            />
          ) : (
            "I am Feeling Lucky"
          )}
        </button>
      </div>
    </>
  );
}
