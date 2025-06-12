import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="text-white p-8 w-full mx-auto flex flex-col lg:flex-row items-center">
      <div className="relative w-full lg:w-1/2 mb-8 lg:mb-0">
        <Image
          src="/About.jpg"
          alt="Marketing Presentation"
          width={600}
          height={400}/>
        <div className="absolute top-4 left-4 bg-white px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
          <span className="text-yellow-500 text-lg">★★★★★</span>
          <span className="bg-blue-600 text-white px-2 py-1 rounded">(5/5)</span>
        </div>
      </div>
      <div className="w-full lg:w-1/2 text-left pl-4"> 
        <div
          className="flex items-center justify-start mb-4 p-3 border border-white rounded-full"
          style={{ height: '50px', width: '200px' }}>
          <Image src="/star.png" alt="Welcome Image" width={30} height={30} className="rounded-full" />
          <p className="text-2xl font-serif ml-3 bg-gradient-to-r from-purple-500 via-pink-400 to-pink-300 bg-clip-text text-transparent">
            About Us
          </p>
        </div>
        <p className="text-4xl md:text-6xl font-semibold leading-tight tracking-wide text-left mb-4">
          <span className="bg-gradient-to-r from-purple-400 via-pink-300 to-pink-200 bg-clip-text text-transparent">
            Building Brands
          </span>
          That Stand Out In A World
        </p>
        <div>
          <p className="mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius deserunt quod eaque amet explicabo quas
          </p>
          <button className="border border-white hover:bg-gradient-to-r from-purple-600 to-pink-400 w-64 px-8 py-5 rounded-full text-white transition duration-500 ease-in-out transform hover:scale-105">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
