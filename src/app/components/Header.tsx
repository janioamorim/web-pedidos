import { useState } from "react";
import { useAuth } from "../hooks/useAuth";


export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const { logout } = useAuth();
  const handleMenu = () => {
    setShowMenu(!showMenu);
  }

    return (
      <header className="bg-white shadow-md p-6 flex justify-end items-right">
        <div className="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5 color-gray-100">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
          </svg>
          <span className="text-md color-gray-100" >Avisos</span>

          <div className="flex items-center justify-items-center ml-10 gap-3 cursor-pointer" onClick={() => {handleMenu()}}>
            <div className="flex flex-col w-full items-end">
              <span className=" color-gray-100">Olá,</span>
              <span className="font-semibold color-gray-100" >Gabriel</span>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full size-10 text-color-red">
              <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clipRule="evenodd" />
            </svg>
          </div>

        </div>
        {showMenu && 
          <div className="relative">
            <div 
              className="absolute top-10 right-1 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 ring-1 shadow-lg ring-black/5 focus:outline-hidden" 
              role="menu" 
              aria-orientation="vertical" 
              aria-labelledby="user-menu-button" 
              tabIndex={-1}>
              <button onClick={()=>logout()}  className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="user-menu-item-2">Sair</button>
            </div>
          </div>
        }
      </header>
    );
  }