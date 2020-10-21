import React from 'react';
import { render } from '@testing-library/react';
import Filter from '../../components/Filter';

describe('Filter', () => {
  it('renders an text input', () => {
    const { queryAllByTestId } = render(
      <Filter />,
    );
    const text = queryAllByTestId('search-bar');
    expect(text).toBeTruthy();
  });
  it('renders creadit', () => {
    const { queryAllByTestId } = render(
      <Filter />,
    );
    const btn = queryAllByTestId('search-btn');
    expect(btn).toBeTruthy();
  });
});
