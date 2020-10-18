import React from 'react';
import PropTypes from 'prop-types';

const Recipe = ({ data }) => (
  <div>
    <img src={data.image} alt={data.title} />
    <p>{data.title}</p>
  </div>
);

Recipe.propTypes = {
  data: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Recipe;
