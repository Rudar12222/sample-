import  { useState, useEffect } from "react";
import InputForm from "./components/InputForm";
import LearningDashboard from "./components/LearningDashboard";
import SignUpForm from "./components/SignUpForm";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";


const App = () => {
  const [user, setUser] = useState(null);
  const [learningPlan, setLearningPlan] = useState(null);
  const [progress, setProgress] = useState([]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const updateProgress = (newProgress) => {
    setProgress(newProgress);
  };

  return (
    <div className="App">
      <h1 className="text-3xl font-bold text-center my-6">Learning Platform</h1>
      {user ? (
        <div>
          <InputForm setLearningPlan={setLearningPlan} />
          {learningPlan && (
            <LearningDashboard
              learningPlan={learningPlan}
              progress={progress}
              updateProgress={updateProgress}
            />
          )}
        </div>
      ) : (
        <SignUpForm setUser={setUser} />
      )}
    </div>
  );
};

export default App;
