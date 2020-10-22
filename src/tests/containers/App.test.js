import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../../reducers/index';
import App from '../../containers/App';

const store = createStore(rootReducer);

describe('App', () => {
  it('renders logo text', () => {
    const { getByText } = render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    const logo = getByText(/Foody/i);
    expect(logo).toBeInTheDocument();
  });

  it('renders credit', () => {
    const { getByText } = render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    const credit = getByText(/By SpaYco/i);
    expect(credit).toBeInTheDocument();
  });

  it('renders an text input', () => {
    const { queryAllByTestId } = render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    const text = queryAllByTestId('search-bar');
    expect(text).toBeTruthy();
  });
  it('renders creadit', () => {
    const { queryAllByTestId } = render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    const btn = queryAllByTestId('search-btn');
    expect(btn).toBeTruthy();
  });
});
