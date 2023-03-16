import Link from "next/link";
import PaginationButtons from "./PaginationButtons";

export default function ImageSearchResults({ results }) {
  return (
    <div className=" sm:pb-24 mt-4 pb-40">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-3 space-x-4">
        {results.items?.map((result) => (
          <div key={result.link} className="mb-8 group-hover:underline">
            <div className="group-hover:underline">
              <Link
                href={result.image.contextLink}
                className="h-60 group-hover:shadow-xl w-full object-contain transition-shadow duration-200 ease-out"
              >
                <img src={result.link} alt={result.title} />
              </Link>
              <Link href={result.image.contextLink}>
                <h2 className="group-hover:underline truncate text-xl">
                  [ {result.displayLink} ] {result.title}
                </h2>
              </Link>
              <Link href={result.image.contextLink}>
                <p className="group-hover:underline text-gray-500">
                  {result.snippet}
                </p>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="ml-16">
      <PaginationButtons />
      </div>
    </div>
  );
}
