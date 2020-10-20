import React from 'react';
import PropTypes from 'prop-types';

const Recipe = ({ data }) => (
  <a href={`/show/${data.id}`}>
    <img src={data.image} alt={data.title} />
    <p>{data.title}</p>
  </a>
);

Recipe.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default Recipe;
