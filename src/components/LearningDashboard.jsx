
import PropTypes from "prop-types";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const LearningDashboard = ({ learningPlan }) => {
  const [user] = useAuthState(auth);

  if (!user) {
    return <div>Please log in to view your learning dashboard.</div>;
  }

  if (!learningPlan) {
    return <div>Please create a learning plan.</div>;
  }

  return (
    <div>
      <h2>Learning Plan for {learningPlan.topic}</h2>
      {learningPlan.dailyGoals.map((goal, index) => (
        <div key={index}>
          <h3>Day {goal.day}</h3>
          <h4>Lessons:</h4>
          <ul>
            {goal.lessons.map((lesson, i) => (
              <li key={i}>
                <a href={lesson.link} target="_blank" rel="noopener noreferrer">
                  {lesson.title}
                </a>
              </li>
            ))}
          </ul>
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
            link: PropTypes.string.isRequired,
          })
        ).isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default LearningDashboard;
