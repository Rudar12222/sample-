import { FaInstagram, FaLinkedin, FaMedium } from "react-icons/fa6";
import logo from "../assets/logo.png";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#171717] flex flex-row p-32 w-full justify-between">
      <div className="flex flex-col gap-12 w-2/5">
        <img src={logo} alt="logo" className="w-20 aspect-auto" />
        <div className="flex flex-row gap-8 text-2xl">
          <FaInstagram />
          <FaLinkedin />
          <FaTwitter />
          <FaMedium />
        </div>
        <p className="text-white text-sm">
          &copy; 2024 Learning Platform. All rights reserved.
        </p>
      </div>
      <div className="flex flex-col gap-6">
        <h1 className="text-white text-xl font-semibold">Products</h1>
        <ul className="flex flex-col gap-4">
          <li className="text-white text-sm">Courses</li>
          <li className="text-white text-sm">Development</li>
        </ul>
      </div>
      <div className="flex flex-col gap-6">
        <h1 className="text-white text-xl font-semibold">Resources</h1>
        <ul className="flex flex-col gap-4">
          <li className="text-white text-sm">Careers</li>
          <li className="text-white text-sm">Blog</li>
        </ul>
      </div>
      <div className="flex flex-col gap-6">
        <h1 className="text-white text-xl font-semibold">Company</h1>
        <ul className="flex flex-col gap-4">
          <li className="text-white text-sm">QA</li>
          <li className="text-white text-sm">Terms and conditions</li>
          <li className="text-white text-sm">Privacy policy</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
