import PropTypes from "prop-types";

const projectSchema = PropTypes.shape({
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
});

export default projectSchema;
