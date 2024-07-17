import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { useState } from "react";

const NAV_ITEMS = [
  {
    id: "home",
    title: "Home",
    path: "/",
  },
  {
    id: "about",
    title: "About Us",
    path: "/about",
  },
  {
    id: "courses",
    title: "Courses",
    path: "/courses",
  },
  {
    id: "faq",
    title: "FAQ",
    path: "/faq",
  },
];

const Navbar = () => {
  const [activeNavvLink, setActiveNavLink] = useState("home");
  return (
    <nav className="py-10 px-20 flex flex-row justify-between items-center w-full relative z-10 text-sm">
      <img src={logo} alt="logo" className="w-16 h-full aspect-auto" />
      <div className="flex flex-row gap-8">
        <ul className="flex justify-between gap-8 items-center">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.title}
              to={item.path}
              className={
                "text-black hover:text-violet-400 cursor-pointer hover:underline hover:underline-offset-4" +
                (activeNavvLink === item.id
                  ? " font-bold underline-offset-4 underline"
                  : "")
              }
            >
              {item.title}
            </Link>
          ))}
        </ul>
        
        <button className="p-2 px-6 text-sm  text-white  bg-violet-500 hover:bg-violet-400 cursor-pointer">
          Log In
        </button>
        <button className="p-2 px-6 text-sm  text-white bg-violet-500 hover:bg-violet-400 cursor-pointer ">
          Sign In
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
