"use client";

import { Aside } from "@/layouts/Menu/menu";
import { Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const GlavniMenu = () => {
  const [isOpen, setIsOpen] = useState(false); 
  const menuRef = useRef<HTMLDivElement>(null); 

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false); 
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <div className="flex">

      <button
        onClick={toggleMenu}
        type="button"
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white transition-all rounded-lg lg:hidden bg-primary hover:bg-primary/80"
      >
        <Menu />
      </button>

      {isOpen && (
        <button onClick={() => setIsOpen(false)}>
          <div
            ref={menuRef}
            className="absolute top-0 right-0 w-full bg-white z-50 dark:bg-gray-900 p-4 shadow-md"
          >
   
            <div className="flex justify-end">
              <button
                onClick={() => setIsOpen(false)} 
                type="button"
                className="inline-flex items-center p-2 w-8 h-8 justify-center text-white rounded-lg bg-green-500 hover:bg-blue-700"
              >
                <X />
              </button>
            </div>
            <Aside />
          </div>
        </button>
      )}
    </div>
  );
};

export default GlavniMenu;