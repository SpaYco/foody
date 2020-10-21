import React from 'react';

const categories = ['Pizza', 'Pasta', 'Spaghetti', 'Couscous', 'Noodles', 'Sauce', 'Candy'];

const getCategories = () => {
  const result = [];
  for (let i = 0; i < categories.length; i += 1) {
    result.push(
      <option key={categories[i]} value={categories[i]}>
        {categories[i]}
      </option>,
    );
  }
  return result;
};

const Filter = ({ updateFilter }) => {
  const handleChange = e => {
    updateFilter(e.target.value);
  };
  return (
    <div id="search">
      <select onChange={handleChange} name="categories" id="categories" defaultValue="Pizza">
        {getCategories()}
      </select>
    </div>
  );
};

export default Filter;
