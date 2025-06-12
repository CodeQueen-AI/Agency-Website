import { FaArrowRight } from "react-icons/fa";
import { GiAchievement } from "react-icons/gi";

export default function AchievementSection() {
  return (
    <div className="bg-gradient-to-l from-[#2A004E] via-black to-[#2A004E] text-white p-6 sm:p-8 rounded-3xl w-[95%] mx-auto flex flex-col lg:flex-row items-center gap-6 border border-gray-700">
      <div className="p-6 sm:p-8 rounded-3xl border border-gray-600 w-full lg:w-[30%]">
        <h2 className="text-xl sm:text-2xl font-semibold text-white text-center mb-4">
          Why Choose Us?
        </h2>
        <hr className="border-gray-500 mb-4" />
        <p className="text-gray-300 text-center text-sm sm:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus.
        </p>
        <div className="flex justify-center mt-4">
          <button className="text-[#b28ead] flex items-center gap-2 hover:underline text-sm sm:text-base">
            Learn More <FaArrowRight />
          </button>
        </div>
      </div>
      <div className="w-full lg:w-[60%]">
        <div className="flex items-center gap-4 bg-gradient-to-bl from-purple-800 via-purple-900 to-gray-400 p-4 rounded-full w-fit">
          <div className="bg-white text-[#6b4cff] p-2 rounded-full text-xl">
            <GiAchievement />
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-white">Our Achievement</h3>
            <p className="text-gray-300 text-xs sm:text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6 text-center">
          <div>
            <p className="text-4xl sm:text-5xl font-semibold text-white">
              98<span className="text-[#b28ead]">+</span>
            </p>
            <p className="text-sm">Years Of Experience</p>
          </div>
          <div>
            <p className="text-4xl sm:text-5xl font-semibold text-white">
              80<span className="text-[#b28ead]">K+</span>
            </p>
            <p className="text-sm">User Worldwide</p>
          </div>
          <div>
            <p className="text-4xl sm:text-5xl font-semibold text-white">
              500<span className="text-[#b28ead]">+</span>
            </p>
            <p className="text-sm">Popular Features</p>
          </div>
          <div>
            <p className="text-4xl sm:text-5xl font-semibold text-white">
              25<span className="text-[#b28ead]">%</span>
            </p>
            <p className="text-sm">Satisfied Clients</p>
          </div>
        </div>
      </div>
    </div>
  );
}
