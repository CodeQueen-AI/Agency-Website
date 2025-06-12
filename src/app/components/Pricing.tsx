import { FaCheckCircle } from "react-icons/fa";
import Image from "next/image";

const plans = [
  {
    title: "Basic Plan",
    price: "$149,25",
    features: [
      "Lorem ipsum dolor sit amet",
      "consectetur adipiscing elit",
      "sed do eiusmod tempor",
    ],
  },
  {
    title: "Standart Plan",
    price: "$250,25",
    features: [
      "Lorem ipsum dolor sit amet",
      "consectetur adipiscing elit",
      "sed do eiusmod tempor",
    ],
  },
  {
    title: "Premium Plan",
    price: "$375,25",
    features: [
      "Lorem ipsum dolor sit amet",
      "consectetur adipiscing elit",
      "sed do eiusmod tempor",
    ],
  },
];

export default function PricingPlans() {
  return (
    <section className="bg-[#0b0823] text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 flex flex-col items-center text-center">
          <div className="inline-flex items-center bg-[#1c1735] px-5 py-2 rounded-full text-sm font-medium mb-4 border border-purple-500">
            <Image src="/star.png" alt="star" width={20} height={20} />
            <span className="ml-2">Pricing Plan</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Choose Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Pricing Plan
            </span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#1c133a] to-[#24153f] p-8 rounded-3xl shadow-lg border border-purple-800 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-semibold mb-2">{plan.title}</h3>
                <div className="flex items-end mb-6">
                  <span className="text-4xl font-bold text-pink-300">{plan.price}</span>
                  <span className="ml-2 text-gray-400 text-lg">/ month</span>
                </div>
                <hr className="border-gray-600 mb-6" />
                <ul className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-base text-gray-100">
                      <FaCheckCircle className="text-pink-300" /> {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <button className="mt-8 bg-transparent border border-purple-400 hover:bg-gradient-to-r from-purple-600 to-pink-500 text-white py-3 rounded-full w-full text-lg transition duration-300">
                Select Plan <span className="ml-2">➔</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
