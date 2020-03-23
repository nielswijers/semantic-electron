import React from 'react';
import { App } from './App';
import { render } from '@testing-library/react';

describe('App', () => {
  it('renders without errors', () => {
    const { unmount } = render(<App />);
    unmount();
  });
});
