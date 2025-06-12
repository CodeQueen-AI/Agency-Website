import { FaPlay } from 'react-icons/fa';
import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="min-h-screen text-white flex flex-col items-center justify-center px-6">
      <div className="flex flex-col items-center justify-center py-6">
        <div
          className="flex items-center justify-center mb-4 p-3 border border-white rounded-full"
          style={{ height: '60px', width: '300px' }}
        >
          <Image src="/star.png" alt="Welcome Image" width={30} height={30} className="rounded-full" />
          <p className="text-lg sm:text-xl md:text-2xl font-serif ml-3 bg-gradient-to-r from-purple-500 via-pink-400 to-pink-300 bg-clip-text text-transparent">
            Welcome to Fluxco
          </p>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-semibold leading-tight tracking-wide text-center">
          Bringing Revolution in
          <span className="block text-purple-300">Digital Marketing</span>
        </h1>

        <p className="text-sm sm:text-base md:text-lg text-gray-300 mt-4 max-w-2xl mx-auto text-center">
          Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam, quis nostrud exercitation
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 items-center">
          <button className="border border-white hover:bg-gradient-to-r from-purple-600 to-pink-400 w-64 px-8 py-4 rounded-full text-white transition duration-500 ease-in-out transform hover:scale-105 text-sm sm:text-base">
            Lets Get Started
          </button>

          <div className="relative flex items-center justify-center">
            <div className="absolute h-14 w-14 sm:h-16 sm:w-16 rounded-full bg-gradient-to-r from-purple-600 to-blue-400 animate-pulse opacity-75"></div>
            <button className="relative bg-purple-600 p-4 sm:p-5 rounded-full z-10 flex items-center justify-center">
              <FaPlay size={18} className="sm:size-[20px]" color="white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
