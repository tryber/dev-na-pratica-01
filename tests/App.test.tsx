import { render, screen } from '@testing-library/react';

import App from '../src/App';
import React from 'react';

it('should show "Destrybers" text', () => {

  render(<App />);

  expect(screen.getByText(/Destrybers/i)).toBeInTheDocument();

})
