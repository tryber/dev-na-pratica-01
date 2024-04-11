import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Footer from '../src/components/Footer'
 
describe('Footer component', () => {
  it('Should return component Footer.', () => {
    render(<Footer />)
 
    const heading = screen.getByText('Idealizadores:')

    const msg = screen.getByText('Links úteis:');
 
    expect(heading).toBeInTheDocument()

    expect(msg).toBeInTheDocument()

  })
})