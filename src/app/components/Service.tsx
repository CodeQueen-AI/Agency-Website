import React from 'react';
import Image from 'next/image';
import { FaAd, FaCode, FaChartBar, FaPaintBrush } from 'react-icons/fa';

type ServiceProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const services: ServiceProps[] = [
  {
    icon: <FaAd className="text-[#1F1235] text-3xl transition-all duration-300 hover:text-white" />,
    title: "Social Media",
    description: "Grow your brand on social platforms.",
  },
  {
    icon: <FaCode className="text-[#1F1235] text-3xl transition-all duration-300 hover:text-white" />,
    title: "Web Development",
    description: "Build modern and responsive websites.",
  },
  {
    icon: <FaChartBar className="text-[#1F1235] text-3xl transition-all duration-300 hover:text-white" />,
    title: "SEO & Marketing",
    description: "Optimize your business for search engines.",
  },
  {
    icon: <FaPaintBrush className="text-[#1F1235] text-3xl transition-all duration-300 hover:text-white" />,
    title: "Graphic Design",
    description: "Create stunning visuals and branding.",
  }
];

const ServiceBox: React.FC<ServiceProps> = ({ icon, title, description }) => {
  return (
    <div className="relative bg-[#0B0A1F] p-8 rounded-2xl border border-[#2A2A40] shadow-lg w-[300px] h-[250px] transition-all duration-300 hover:shadow-purple-500/50 hover:border-purple-400 hover:scale-105">
      <div className="absolute inset-0 rounded-2xl border border-[#33314D] pointer-events-none"></div>
      <div className="absolute inset-1 rounded-2xl border border-[#4A495E] pointer-events-none"></div>
      <div className="flex items-center justify-center w-16 h-16 bg-[#E4C4CF] rounded-full mx-auto transition-all duration-300 hover:bg-purple-400">
        {icon}
      </div>
      <h3 className="text-white text-lg font-semibold text-center mt-4">{title}</h3>
      <p className="text-gray-300 text-center mt-2 text-sm">{description}</p>
    </div>
  );
};

const ServicesGrid: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] space-y-4">
      <div 
        className="flex items-center justify-center p-3 border border-white rounded-full"
        style={{ height: '60px', width: '300px' }}
      >
        <Image src="/star.png" alt="Welcome Image" width={30} height={30} className="rounded-full" />
        <p className="text-2xl font-serif ml-3 bg-gradient-to-r from-purple-500 via-pink-400 to-pink-300 bg-clip-text text-transparent">
          Our Services
        </p>
      </div>

      <p className="text-6xl font-semibold text-gray-300 text-center">
        Your Success Story Begins <span className='bg-gradient-to-r from-purple-400 via-pink-300 to-pink-200 bg-clip-text text-transparent'>With Fluxco</span>
      </p>

      <p className='text-white text-center max-w-xl'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
        {services.map((service, index) => (
          <ServiceBox
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesGrid;
