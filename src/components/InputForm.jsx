import { useState } from "react";

import PropTypes from "prop-types";
import { generateLearningPlan } from "../services/contentCurationService";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const InputForm = ({ setLearningPlan, addCourse }) => {
  const [user] = useAuthState(auth);
  const [preferences, setPreferences] = useState({
    topic: "",
    duration: 30,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPreferences({ ...preferences, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const learningPlan = await generateLearningPlan(preferences);
      setLearningPlan(learningPlan);
      addCourse(preferences.topic); // Add the new course
    } catch (error) {
      console.error("Error generating learning plan:", error);
    }
  };

  if (!user) {
    return <div>Please log in to create a learning plan.</div>;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-gray-700 font-bold mb-2" htmlFor="topic">
          Topic:
        </label>
        <input
          type="text"
          name="topic"
          value={preferences.topic}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
      </div>
      <div>
        <label
          className="block text-gray-700 font-bold mb-2"
          htmlFor="duration"
        >
          Duration (days):
        </label>
        <select
          name="duration"
          value={preferences.duration}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
        >
          <option value={30}>30</option>
          <option value={60}>60</option>
          <option value={90}>90</option>
        </select>
      </div>
     
      <button
        type="submit"
        className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
      >
        Create Learning Plan
      </button> 
    </form>
  );
};

InputForm.propTypes = {
  setLearningPlan: PropTypes.func.isRequired,
  addCourse: PropTypes.func.isRequired,
};

export default InputForm;
