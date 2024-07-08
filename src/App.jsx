import  { useState } from "react";
import InputForm from "./components/InputForm";
import LearningDashboard from "./components/LearningDashboard";


const App = () => {
  const [learningPlan, setLearningPlan] = useState(null);

  return (
    <div className="App">
      <h1>Learning Platform</h1>
      <InputForm setLearningPlan={setLearningPlan} />
      <LearningDashboard learningPlan={learningPlan} />
    </div>
  );
};

export default App;
