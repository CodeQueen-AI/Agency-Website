'use client';
import { useState } from "react";
import Image from "next/image";
import { IoSearchOutline } from "react-icons/io5";
import { HiMenu, HiX } from "react-icons/hi";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="flex items-center justify-between px-6 py-6 border-b text-white relative z-50">
      <div className="flex items-center z-50">
        <Image src="/logo.png" alt="Logo" width={120} height={120} />
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center space-x-8 font-semibold">
        <a href="#" className="hover:text-[#FFCFCF]">Home</a>
        <a href="#" className="hover:text-[#FFCFCF]">About Us</a>
        <a href="#" className="hover:text-[#FFCFCF]">Service</a>
        <a href="#" className="hover:text-[#FFCFCF]">Pages</a>
        <button className="bg-gradient-to-r from-purple-400 via-[#B771E5] to-[#FCC6FF] text-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition duration-300">
          Contact Us
        </button>
        <IoSearchOutline 
          size={36} 
          className="p-2 bg-purple-500 text-white rounded-full hover:bg-white hover:text-purple-500 transition duration-300"
        />
      </div>
      <div className="md:hidden z-50">
        {isOpen ? (
          <HiX size={36} onClick={() => setIsOpen(false)} className="cursor-pointer" />
        ) : (
          <HiMenu size={36} onClick={() => setIsOpen(true)} className="cursor-pointer" />
        )}
      </div>
      {isOpen && (
        <div className="fixed inset-0 bg-white/10 backdrop-blur-md backdrop-saturate-150 flex flex-col items-center justify-center space-y-8 text-xl font-semibold text-white z-40 transition-all">
          <a href="#" className="hover:text-[#FFCFCF]" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#" className="hover:text-[#FFCFCF]" onClick={() => setIsOpen(false)}>About Us</a>
          <a href="#" className="hover:text-[#FFCFCF]" onClick={() => setIsOpen(false)}>Service</a>
          <a href="#" className="hover:text-[#FFCFCF]" onClick={() => setIsOpen(false)}>Pages</a>
          <button className="bg-gradient-to-r from-purple-400 via-[#B771E5] to-[#FCC6FF] text-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition duration-300">
            Contact Us
          </button>
          <IoSearchOutline 
            size={36} 
            className="p-2 bg-purple-500 text-white rounded-full hover:bg-white hover:text-purple-500 transition duration-300"
          />
        </div>
      )}
    </nav>
  );
}
