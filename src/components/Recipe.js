import React from 'react';
import PropTypes from 'prop-types';

const Recipe = ({ data, handleUpdateIndex, handleUpdateData }) => {
  const handleClick = () => {
    handleUpdateData(data);
    handleUpdateIndex('detail');
  };

  return (
    <div onClick={handleClick} aria-hidden="true">
      <img src={data.image} alt={data.title} />
      <p>{data.title}</p>
    </div>
  );
};

Recipe.propTypes = {
  data: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
  handleUpdateIndex: PropTypes.func.isRequired,
};

export default Recipe;
