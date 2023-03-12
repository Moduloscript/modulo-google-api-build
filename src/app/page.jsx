import Image from "next/image";
import HomeHeader from "../components/HomeHeader";
import HomeSearch from "../components/HomeSearch";

export default function HomePage() {
  return (
    <>
      {/* Header */}
      <HomeHeader />
      {/* Body */}
      <div className="flex flex-col items-center mt-24">
        <Image 
          width="300"
          height="100"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c51f.png"
        />
        <HomeSearch />
      </div>

    </>
  )
}
