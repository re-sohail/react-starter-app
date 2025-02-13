import React from 'react';
import { render, screen } from '@testing-library/react';
import { HomePage } from './HomePage';
import '@testing-library/jest-dom';

test('renders heading', () => {
  render(<HomePage />);
  expect(screen.getByRole('heading', { name: /React Starter App/i })).toBeInTheDocument();
});
