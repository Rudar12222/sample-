import ft1 from "../../assets/ft1.png";
import ft2 from "../../assets/ft2.png";
import ft3 from "../../assets/ft3.png";

const FEATURES = [
  {
    title: "Explore topics",
    description:
      "Dive deep into our diverse catalog featuring a curated selection of courses in the realms of arts and writing. Experience knowledge crafted by experts, designed to inspire and nurture your creative journey.",
    img: ft1,
  },
  {
    title: "Meet new Friends",
    description:
      "Connect with our expansive network, match with like-minded peers, and learn code together",
    img: ft2,
  },
  {
    title: "Learn at your pace",
    description:
      "Our courses are designed to be flexible, allowing you to learn at your own pace. Whether you're a beginner or an expert, our platform is built to accommodate your unique learning journey.",
    img: ft3,
  },
];

const Feature = ({ title, description, img }) => {
  return (
    <div className="flex flex-row justify-between items-center w-full my-8">
      <img src={img} alt={title} className="w-1/3" />
      <div className="flex flex-col gap-4 items-start ">
        <h1 className="font-semibold text-4xl">{title}</h1>
        <p className=" max-w-xl text-lg text-gray-400">{description}</p>
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <div className="flex flex-col items-center gap-16 px-16 w-full mb-16">
      <div className="flex flex-col gap-16">
        {FEATURES.map((feature) => (
          <Feature key={feature.title} {...feature} />
        ))}
      </div>
    </div>
  );
};

export default Features;
