import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Home from '../src/pages/index'
import React from 'react'
 
describe('Page index', () => {
  it('Should return initial cards in the page.', () => {
    render(<Home />)
 
    const heading = screen.getByText('EXPLORANDO A CATEGORIA')
 
    expect(heading).toBeInTheDocument()

  })
})