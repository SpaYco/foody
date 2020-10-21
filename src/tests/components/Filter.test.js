import React from 'react';
import { render } from '@testing-library/react';
import Filter from '../../components/Filter';

describe('Filter', () => {
  it('renders a select inputt', () => {
    const { queryAllByTestId } = render(
      <Filter />,
    );
    const text = queryAllByTestId('categories');
    expect(text).toBeTruthy();
  });
});
