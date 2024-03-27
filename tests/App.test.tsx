import { render, screen } from '@testing-library/react';

import App from '../src/App';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

it('should show "Destrybers" text', () => {

  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>);
  expect(screen.getByText(/Destrybers/i)).toBeInTheDocument();

})
