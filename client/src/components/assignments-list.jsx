import PropTypes from "prop-types";

export default function AssignmentList({ assignments }) {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold">Assignments</h1>
      <ul className="mt-4">
        {assignments.map((assignment) => (
          <li key={assignment.id} className="text-xl">
            {assignment.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

AssignmentList.propTypes = {
  assignments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};
