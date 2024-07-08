import  { useState } from "react";
import PropTypes from "prop-types";
import { generateLearningPlan } from "../services/contentCurationService";

const InputForm = ({ setLearningPlan }) => {
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
    } catch (error) {
      console.error("Error generating learning plan:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Topic:
        <input
          type="text"
          name="topic"
          value={preferences.topic}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Duration (days):
        <select
          name="duration"
          value={preferences.duration}
          onChange={handleChange}
        >
          <option value={30}>30</option>
          <option value={60}>60</option>
          <option value={90}>90</option>
        </select>
      </label>
      <button type="submit">Create Learning Plan</button>
    </form>
  );
};

InputForm.propTypes = {
  setLearningPlan: PropTypes.func.isRequired,
};

export default InputForm;
