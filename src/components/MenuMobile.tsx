import React, { useState } from "react";
import { routes } from "./routes";

const MenuMobile = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleToggleMenu = () => {
    setOpen((prev) => !prev);
  };

  const handleRedirect=(link:string)=>{
    setOpen(false)
    window.location.replace(link);
  }

  return (
    <div className="flex items-center">
      <div
        className={`bg-black fixed w-full inset-0 bg-opacity-95 backdrop-blur-md p-5 flex flex-col items-center justify-center ${
          open ? "block" : "hidden"
        }`}
      >
        <button onClick={handleToggleMenu} className="absolute z-0 top-6 right-7">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M18 6l-12 12"></path>
            <path d="M6 6l12 12"></path>
          </svg>
        </button>
        <div className="flex flex-col text-3xl font-normal text-center gap-4">
          {
            routes.map((route,key)=><button key={key} onClick={()=>handleRedirect(route.link)} disabled={document?.location?.pathname === route.link} className={`${ document?.location?.pathname === route.link ? 'opacity-30' : ''}`}>{route.name}</button>)
          }
        </div>
      </div>
      <button className={`block md:hidden`} onClick={handleToggleMenu}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-menu-deep"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M4 6h16"></path>
          <path d="M7 12h13"></path>
          <path d="M10 18h10"></path>
        </svg>
      </button>
    </div>
  );
};

export default MenuMobile;
