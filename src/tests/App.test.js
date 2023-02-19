import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import App from '../App';
import { Time } from '../components/Time'


test('print out the contents of the DOM, from when the website is first loaded', () => {
  render(<App />);
  screen.debug();
});
