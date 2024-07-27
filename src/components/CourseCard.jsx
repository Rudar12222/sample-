
import PropTypes from "prop-types";

const CourseCard = ({ course }) => {
  return (
    <div className="h-40 w-40 border-4 font-inter bg-[#E2D5FF] text-[#962DFF] border-[#962DFF] rounded-xl flex justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <div className="text-lg font-bold">{course.name}</div>
        <div>Progress: {course.progress}%</div>
      </div>
    </div>
  );
};

CourseCard.propTypes = {
  course: PropTypes.shape({
    name: PropTypes.string.isRequired,
    progress: PropTypes.number.isRequired,
  }).isRequired,
};

export default CourseCard;
