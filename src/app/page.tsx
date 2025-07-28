import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <Link href={"/memo"}>
        <button className=" px-6 py-2 rounded-md bg-white text-black hover:scale-105 cursor-pointer">
          Memo Example
        </button>
      </Link>
    </div>
  );
}
