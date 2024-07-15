import { Link } from "react-router-dom";
import heroImg from "../assets/hero.png";
import Navbar from "../components/Navbar";
import { FaArrowRight } from "react-icons/fa6";
import FeatureCards from "../components/Landing/FeatureCards";
const Home = () => {
  return (
    <div className="flex flex-col items-center z-10 relative">
      <Navbar />
      <div className="h-[calc(100vh_-_160px)] flex place-items-center">
        <img
          src={heroImg}
          className="w-full absolute left-0 opacity-80 top-0 z-0"
          alt="hero"
        />
        <div className="w-1/2 mx-auto flex flex-col items-center gap-8 text-center z-10">
          <h1 className="text-6xl font-bold text-center text-white">
            Where the joy of learn meets the power of community
          </h1>
          <p>
            Dive deep in immersive, interactive small groups. Expand horizons,
            engage in <br /> discussions, and elevate your learning journey with
            us.
          </p>
          <button>Start your travel</button>
          <Link
            to="/"
            className="text-sm hover:text-white text-[#DDD6FE] flex flex-row gap-2 place-items-center"
          >
            <span>Watch a video</span>
            <FaArrowRight />
          </Link>
        </div>
      </div>
      <FeatureCards />
    </div>
  );
};

export default Home;
