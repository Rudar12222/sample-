import { Fa0 } from "react-icons/fa6";
import { IoIosPeople, IoMdPricetags } from "react-icons/io";
import { IoCodeSlash } from "react-icons/io5";

const CARDS = [
  {
    icon: <IoMdPricetags size={24} className="mt-1 text-[#8B5CF6]" />,
    title: "Explore topics",
    description: "Explore our selection of courses in development",
  },
  {
    icon: <IoIosPeople size={24} className="mt-1 text-[#8B5CF6]" />,
    title: "Meet new friends",
    description: "Join the network with million of students and learn",
  },
  {
    icon: <IoCodeSlash size={24} className="mt-1 text-[#8B5CF6]" />,
    title: "Learn code",
    description: "Learn all about code and become in a developer",
  },
];

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="flex flex-row gap-4 items-start p-8 bg-neutral-950/80 backdrop-blur-md hover:ring-2 hover:outline-2 hover:ring-offset-2 ring-offset-transparent hover:ring-[#8a5cf6ba] transition-all duration-300 rounded-md">
      {icon}
      <div className="flex flex-col items-start">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

const FeatureCards = () => {
  return (
    <div className="flex flex-row gap-6 mt-8 justify-around px-20 z-10 w-full">
      {CARDS.map((card) => (
        <FeatureCard key={card.title} {...card} />
      ))}
    </div>
  );
};

export default FeatureCards;
