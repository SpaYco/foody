import React from 'react';
import { render } from '@testing-library/react';
import SearchBar from '../../components/SearchBar';

describe('SearchBar', () => {
  it('renders an text input', () => {
    const { queryAllByTestId } = render(
      <SearchBar />,
    );
    const text = queryAllByTestId('search-bar');
    expect(text).toBeTruthy();
  });
  it('renders creadit', () => {
    const { queryAllByTestId } = render(
      <SearchBar />,
    );
    const btn = queryAllByTestId('search-btn');
    expect(btn).toBeTruthy();
  });
});
