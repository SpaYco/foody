import React from 'react';
import { render } from '@testing-library/react';
import Recipe from '../../components/Recipe';

describe('Recipe', () => {
  it('renders a title', () => {
    const { getByText } = render(
      <Recipe data={{
        id: 1095817,
        image: 'https://spoonacular.com/recipeImages/1095817-636x393.jpg',
        title: 'Super Food Trail Mix',
      }}
      />,
    );
    const title = getByText(/Super Food Trail Mix/i);
    expect(title).toBeInTheDocument();
  });
  it('renders image', () => {
    const { queryAllByTestId } = render(
      <Recipe data={{
        id: 1095817,
        image: 'https://spoonacular.com/recipeImages/1095817-636x393.jpg',
        title: 'Super Food Trail Mix',
      }}
      />,
    );
    const image = queryAllByTestId('image');
    expect(image[0]).toBeTruthy();
  });

  it('renders image with src', () => {
    const { queryAllByTestId } = render(
      <Recipe data={{
        id: 1095817,
        image: 'https://spoonacular.com/recipeImages/1095817-636x393.jpg',
        title: 'Super Food Trail Mix',
      }}
      />,
    );
    const image = queryAllByTestId('image');
    expect(image[0]).toHaveAttribute('src', 'https://spoonacular.com/recipeImages/1095817-636x393.jpg');
  });

  it('renders image with alt', () => {
    const { queryAllByTestId } = render(
      <Recipe data={{
        id: 1095817,
        image: 'https://spoonacular.com/recipeImages/1095817-636x393.jpg',
        title: 'Super Food Trail Mix',
      }}
      />,
    );
    const image = queryAllByTestId('image');
    expect(image[0]).toHaveAttribute('alt', 'Super Food Trail Mix');
  });
});
