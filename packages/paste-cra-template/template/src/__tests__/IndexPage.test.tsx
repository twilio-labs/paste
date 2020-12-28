import React from 'react';
import {render, screen} from '@testing-library/react';

import {IndexPage} from '../pages/IndexPage';

test('renders index page', () => {
  render(<IndexPage />);
  const linkElement = screen.getByText(/start here./i);
  expect(linkElement).toBeInTheDocument();
});
