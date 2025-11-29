import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-4 text-center">
      <div className="font-sm text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-tighter leading-tight">
        <h1>Revolutionize your grind</h1>
        <h1 className="text-[#347BB2]">with superior automation</h1>
      </div>
      
      <Link 
        href="/about" 
        className="mt-12 rounded-full border-2 border-gray-500 px-8 py-2.5 text-sm font-medium text-gray-400 transition-all duration-300 hover:border-[#347BB2] hover:bg-[#347BB2]/10 hover:text-[#347BB2]"
      >
        About Us
      </Link>
    </main>
  );
}
