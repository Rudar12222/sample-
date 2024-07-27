import { useState, useEffect } from "react";
import InputForm from "./components/InputForm";
import LearningDashboard from "./components/LearningDashboard";
import SignUpForm from "./components/SignUpForm";
import CourseCard from "./components/CourseCard";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import logo from "./assets/logo.svg";
import { AiOutlineHome } from "react-icons/ai";
import { GiOpenBook } from "react-icons/gi";
import { HiOutlineChartPie } from "react-icons/hi";
import { AiOutlineMessage } from "react-icons/ai";
import { CiSettings } from "react-icons/ci";
import joincommunity from "./assets/joincommunity.svg";
import createcoursebox from "./assets/createcoursebox.svg";
import { PiPlayCircle } from "react-icons/pi";
import avatar from "./assets/avatar.svg";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoIosNotificationsOutline } from "react-icons/io";
import graph from "./assets/graph.svg";

const App = () => {
  const [user, setUser] = useState(null);
  const [learningPlan, setLearningPlan] = useState(null);
  const [progress, setProgress] = useState([]);
  const [showInputForm, setShowInputForm] = useState(false);
  const [courses, setCourses] = useState([]); // New state for managing courses

  const progressbar = 40;
  const circleRadius = 30;
  const circumference = 2 * Math.PI * circleRadius;
  const strokeDashoffset = circumference - (progressbar / 100) * circumference;

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const updateProgress = (newProgress) => {
    setProgress(newProgress);
  };

  const addCourse = (courseName) => {
    const newCourse = {
      name: courseName,
      progress: 0,
    };
    setCourses([...courses, newCourse]);
  };

  return (
    <div className="App">
      {user ? (
        <div className="flex h-screen font-inter overflow-hidden">
          <div className="flex flex-col w-1/5 border py-8">
            <div className="pl-14">
              <div className="flex items-center gap-2">
                <img src={logo} alt="logo" />
                <div className="font-bold text-2xl leading-7">Omni.</div>
              </div>

              <div className="flex flex-col my-10">
                <div className="font-medium">Menu</div>
                <div className="flex flex-col gap-2">
                  <div className="flex gap-2 items-center text-[#AEAEB1] hover:text-[#FFFFFF] hover:bg-[#0177FB] hover:w-full py-3 pl-3 hover:border hover:rounded-md">
                    <AiOutlineHome className="text-xl" />
                    <div>Overview</div>
                  </div>
                  <div className="flex gap-2 items-center text-[#AEAEB1] hover:text-[#FFFFFF] hover:bg-[#0177FB] hover:w-full py-3 pl-3 hover:border hover:rounded-md">
                    <GiOpenBook />
                    <div>Courses</div>
                  </div>
                  <div className="flex gap-2 items-center text-[#AEAEB1] hover:text-[#FFFFFF] hover:bg-[#0177FB] hover:w-full py-3 pl-3 hover:border hover:rounded-md">
                    <HiOutlineChartPie />
                    <div>Groups</div>
                  </div>
                  <div className="flex gap-2 items-center text-[#AEAEB1] hover:text-[#FFFFFF] hover:bg-[#0177FB] hover:w-full py-3 pl-3 hover:border hover:rounded-md">
                    <HiOutlineChartPie />
                    <div>Statistics</div>
                  </div>
                </div>
                <hr className="h-[2px] w-4/5 my-8 bg-[#EFEFEF] border-0" />
                <div>
                  <div className="font-medium">Account</div>
                  <div className="flex flex-col gap-2">
                    <div className="flex gap-2 items-center text-[#AEAEB1] hover:text-[#FFFFFF] hover:bg-[#0177FB] hover:w-full py-3 pl-3 hover:border hover:rounded-md">
                      <AiOutlineMessage className="text-xl" />
                      <div>Messages</div>
                    </div>
                    <div className="flex gap-2 items-center text-[#AEAEB1] hover:text-[#FFFFFF] hover:bg-[#0177FB] hover:w-full py-3 pl-3 hover:border hover:rounded-md">
                      <CiSettings className="text-2xl" />
                      <div>Settings</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <div>
                <img src={joincommunity} alt="Join Community" />
              </div>
            </div>
          </div>

          <div className="flex flex-col flex-grow border-l border-r">
            <div>
              <form className="w-3/5 bg-[#FFFFFF] py-4 pl-8">
                <label
                  htmlFor="default-search"
                  className="text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                  Search or type
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    className="block w-full py-1 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-[#F4F4F4] focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search or type"
                    required
                  />
                </div>
              </form>
            </div>

            <div className="flex flex-col bg-[#F4F4F4] h-[60%] py-4">
              <div className="text-5xl font-bold pl-4">
                Hi rudra welcome back
              </div>
              <div
                className="flex flex-col gap-3 text-[#FFFFFF] bg-cover bg-center mx-4 border rounded-xl pt-4 px-4 pb-4"
                style={{ backgroundImage: `url(${createcoursebox})` }}
              >
                <div className="text-xs">ONLINE COURSE</div>
                <div className="text-lg">
                  Sharpen Your Skills With <br />
                  Professional Online Courses
                </div>
                <button
                  type="button"
                  onClick={() => setShowInputForm(true)}
                  className="text-white w-24 bg-black gap-2 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-1 py-1 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Create
                  <PiPlayCircle className="text-xl" />
                </button>
              </div>
              <div className="flex flex-col pl-4 gap-2 mt-2">
                <div className="font-medium">Continue watching</div>
                <div className="flex flex-grow gap-4">
                  <div className="h-40 w-40 border-4 font-inter bg-[#E2D5FF] text-[#962DFF] border-[#962DFF] rounded-xl  flex justify-center items-center">
                    <div className="flex flex-col justify-center items-center">
                      <div
                        onClick={() => setShowInputForm(true)}
                        className="text-4xl cursor-pointer"
                      >
                        +
                      </div>
                      <div>Create New</div>
                      <div>Course</div>
                    </div>
                  </div>
                  {courses.map((course, index) => (
                    <CourseCard key={index} course={course} />
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex flex-col gap-2 pl-4 pt-4">
                <div className="text-xl font-semibold">Top Tutors</div>
                <div className="text-[#ABB2B8] font-medium">
                  Add they to list
                </div>
              </div>
              <div className="flex items-center bg-[#E2D5FF] mx-4 py-3 mt-4 px-6 rounded-lg">
                <div>
                  <img src={avatar} alt="" />
                </div>
                <div className="mx-40 text-[#962DFF] font-medium text-xl">
                  Tutoring services coming soon – Stay tuned!
                </div>
              </div>
            </div>
          </div>

          <div className="w-1/5 border-l">
            <div className="flex flex-col px-8 pt-8">
              <div className="flex justify-between items-center">
                <div>Your Profile</div>
                <div>
                  <BsThreeDotsVertical />
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative flex items-center justify-center w-40 h-40">
                  <svg className="absolute w-full h-full" viewBox="0 0 120 120">
                    <circle
                      className="text-gray-300"
                      strokeWidth="10"
                      stroke="currentColor"
                      fill="transparent"
                      r={circleRadius}
                      cx="60"
                      cy="60"
                    />
                    <circle
                      className="text-[#962DFF]"
                      strokeWidth="10"
                      strokeDasharray={circumference}
                      strokeDashoffset={strokeDashoffset}
                      strokeLinecap="round"
                      stroke="currentColor"
                      fill="transparent"
                      r={circleRadius}
                      cx="60"
                      cy="60"
                    />
                  </svg>
                  <img
                    src={avatar}
                    alt="Center Image"
                    className="absolute w-16 h-16 rounded-full"
                  />
                </div>
              </div>
              <div className="flex flex-col text-center font-medium">
                <div>Good Morning name</div>
                <div className="text-[#7E7E7E] text-base">
                  continue your journey and achieve Your Target
                </div>
              </div>
              <div className="flex justify-between mx-20 mt-6 gap-6">
                <div className="border rounded-full">
                  <IoIosNotificationsOutline className="text-2xl m-2" />
                </div>
                <div className="border rounded-full">
                  <IoIosNotificationsOutline className="text-2xl m-2" />
                </div>
              </div>
              <div>
                <img src={graph} alt="" />
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex justify-between bg-[#F5F5F5] mt-4">
                  <div className="text-xl bg-white">Friends</div>
                  <div className="border rounded-full px-2">+</div>
                </div>
                <div className="text-center font-medium py-1 bg-[#702DFF33] text-[#702DFF] border rounded-full">
                  You can Add <br />
                  Friends soon
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <SignUpForm setUser={setUser} />
      )}

      {showInputForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg relative">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              onClick={() => setShowInputForm(false)}
            >
              ✖
            </button>
            <InputForm
              setLearningPlan={(plan) => {
                setLearningPlan(plan);
                setShowInputForm(false);
              }}
              addCourse={(courseName) => {
                addCourse(courseName);
                setShowInputForm(false);
              }}
            />
          </div>
        </div>
      )}
      {learningPlan && (
        <LearningDashboard
          learningPlan={learningPlan}
          progress={progress}
          updateProgress={updateProgress}
        />
      )}
    </div>
  );
};

export default App;
