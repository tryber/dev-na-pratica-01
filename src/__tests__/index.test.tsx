import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Home from '../pages/index'
import { describe, it, expect } from '@jest/globals';
 
describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />)
 
    // Utilize expect para verificar se o elemento está presente na tela
    expect(screen.getByRole('heading', { name: /destaques do mês/i })).toBeInTheDocument();
  })
})
