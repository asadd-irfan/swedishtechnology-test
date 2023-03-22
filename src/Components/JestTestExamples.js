import React from 'react';
import { render, screen } from '@testing-library/react';
import ExampleComponent from './ExampleComponent';
import MyComponent from './MyComponent';


describe('ExampleComponent', () => {
  test('renders without crashing', () => {
    render(<ExampleComponent />);
  });
});



test('renders component correctly', () => {
  render(<MyComponent />);
  const element = screen.getByText('Hello World');
  expect(element).toBeInTheDocument();
});

test('clicking button triggers event', () => {
  const mockFn = jest.fn();
  render(<MyComponent onClick={mockFn} />);
  const button = screen.getByRole('button');
  button.click();
  expect(mockFn).toHaveBeenCalled();
});

