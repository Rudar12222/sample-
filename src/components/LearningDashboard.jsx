import  {  useEffect } from "react";
import PropTypes from "prop-types";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const LearningDashboard = ({ learningPlan, progress, updateProgress }) => {
  const [user] = useAuthState(auth);

  useEffect(() => {
    if (!progress || progress.length !== learningPlan.dailyGoals.length) {
      const initialProgress = new Array(learningPlan.dailyGoals.length).fill(
        false
      );
      updateProgress(initialProgress);
    }
  }, [learningPlan.dailyGoals.length, progress, updateProgress]);

  const handleCompleteLesson = (dayIndex) => {
    const newProgress = [...progress];
    newProgress[dayIndex] = !newProgress[dayIndex];
    updateProgress(newProgress);
  };

  if (!user) {
    return <div>Please log in to view your learning dashboard.</div>;
  }

  if (!learningPlan) {
    return <div>Please create a learning plan.</div>;
  }

  const completedDays = progress.filter(Boolean).length;
  const totalDays = progress.length;

  return (
    <div>
      <h2>Learning Plan for {learningPlan.topic}</h2>
      <div>
        Progress: {completedDays} / {totalDays} days completed
      </div>
      {learningPlan.dailyGoals.map((goal, index) => (
        <div key={index}>
          <h3>Day {goal.day}</h3>
          <h4>Lessons:</h4>
          <ul>
            {goal.lessons.map((lesson, i) => (
              <li key={i}>
                <h5>{lesson.title}</h5>
                <iframe
                  width="560"
                  height="315"
                  src={`https://www.youtube.com/embed/${lesson.videoId}`}
                  title={lesson.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </li>
            ))}
          </ul>
          {goal.message && <p>{goal.message}</p>}
          <button onClick={() => handleCompleteLesson(index)}>
            {progress[index] ? "Mark as Incomplete" : "Mark as Complete"}
          </button>
        </div>
      ))}
    </div>
  );
};

LearningDashboard.propTypes = {
  learningPlan: PropTypes.shape({
    topic: PropTypes.string.isRequired,
    dailyGoals: PropTypes.arrayOf(
      PropTypes.shape({
        day: PropTypes.number.isRequired,
        lessons: PropTypes.arrayOf(
          PropTypes.shape({
            title: PropTypes.string.isRequired,
            videoId: PropTypes.string.isRequired,
          })
        ).isRequired,
        message: PropTypes.string,
      })
    ).isRequired,
  }).isRequired,
  progress: PropTypes.arrayOf(PropTypes.bool).isRequired,
  updateProgress: PropTypes.func.isRequired,
};

export default LearningDashboard;
