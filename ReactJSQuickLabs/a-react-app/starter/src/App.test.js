import { render, screen } from '@testing-library/react';
import App from './App';

test.skip('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/hello/i);
  expect(linkElement).toBeInTheDocument();
});

it('renders learn react link', () => {
  // Arrange Act Assert
  // Given When Then
  render(<App />);
  const linkElement = screen.getByText(/karl was here/i);
  expect(linkElement).toBeInTheDocument();
});
