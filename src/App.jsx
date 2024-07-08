import  { useState, useEffect } from "react";
import InputForm from "./components/InputForm";
import LearningDashboard from "./components/LearningDashboard";
import { auth, signInWithGoogle, logOut } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";


const App = () => {
  const [user, setUser] = useState(null);
  const [learningPlan, setLearningPlan] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="App">
      <h1>Learning Platform</h1>
      {user ? (
        <div>
          <button onClick={logOut}>Log Out</button>
          <InputForm setLearningPlan={setLearningPlan} />
          <LearningDashboard learningPlan={learningPlan} />
        </div>
      ) : (
        <div>
          <button onClick={signInWithGoogle}>Sign In with Google</button>
        </div>
      )}
    </div>
  );
};

export default App;
