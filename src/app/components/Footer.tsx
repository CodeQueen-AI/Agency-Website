import { FaFacebookF, FaTwitter, FaYoutube, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0b0823] text-white">
      <div className="bg-gradient-to-r from-purple-300 to-pink-300 rounded-t-[40px] px-6 py-10 md:px-16 md:py-12 flex flex-col lg:flex-row items-center justify-between gap-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center lg:text-left">
          Follow Our Newsletter
        </h2>
        <div className="flex flex-col sm:flex-row items-center w-full max-w-2xl gap-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-6 py-3 rounded-full text-black focus:outline-none"
          />
          <button className="bg-[#0b0823] hover:bg-purple-900 text-white font-semibold px-8 py-3 rounded-full transition duration-300">
            Subscribe
          </button>
        </div>
      </div>
      <div className="bg-[#18102b] px-6 md:px-16 py-14 text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
      <span>
            <Image src="/logo.png" alt="logo" width={150} height={150} />
      </span>
       <p className="text-gray-300 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit Ut elit tellus, luctus nec ullamcorper mattis.
            </p>
            <div className="flex gap-4 mt-4">
              <FaFacebookF className="text-[#d8a6c3] text-xl" />
              <FaTwitter className="text-[#d8a6c3] text-xl" />
              <FaYoutube className="text-[#d8a6c3] text-xl" />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[#d8a6c3] mb-4">Our Pages</h3>
            <ul className="space-y-2 text-white">
              <li>Home</li>
              <li>About Us</li>
              <li>Service</li>
              <li>Pricing</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[#d8a6c3] mb-4">Quick Links</h3>
            <ul className="space-y-2 text-white">
              <li>Privacy Policy</li>
              <li>Term Of Service</li>
              <li>Disclaimer</li>
              <li>Credits</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[#d8a6c3] mb-4">Get In Touch</h3>
            <ul className="space-y-4 text-white">
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-[#d8a6c3]" />
                (+23) 456-867-9008
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-[#d8a6c3]" />
                fluxco@example.site
              </li>
              <li className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-[#d8a6c3]" />
                Nusa Dua, Bali - Indonesia
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-[#836fb0] text-center text-white py-4 text-sm">
        Copyright © 2025 <span className="font-semibold">Fluxco</span> | Powered by Fluxco
      </div>
    </footer>
  );
}
