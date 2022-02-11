import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

// test('renders header', () => {
//   render(<App />);
//   const element = screen.getAllByText(/List/i);
//   expect(element.length).toBe(3);
// });

test('renders submit buttonwa', () => {
  render(<App />);
  const element = screen.getByRole("button")
  expect(element).toBeInTheDocument();
});
test('input check', () =>{
  const input = screen.getByText(/Add to Do item/i)
  fireEvent.change(input, {target: {value: "hello world"}})
  expect(input.value).toBe("hello world")
})