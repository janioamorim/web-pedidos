import Image from "next/image";

export default function Sidebar() {
    return (
      <aside className="w-64 bg-white min-h-screen p-4 text-white border-r border-gray-100 shadow-md">
        <div className="flex items-center justify-center py-4">
          <Image src="/logo.svg" 
              alt="Login Art" 
              width={120} 
              height={51}
              priority
              className="" />
          </div>
        <nav className="mt-6">
          <ul>
            <li className="flex p-3 text-sm bg-red-custom-100 hover:bg-red-300 cursor-pointer gap-1 rounded-8">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.0" stroke="currentColor" className="size-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
            </svg>

              Dashboard
            </li>
          </ul>
        </nav>
      </aside>
    );
  }