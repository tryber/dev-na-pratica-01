import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import AboutPhrase from '../src/components/AboutPhrase'
import React from 'react'
 
describe('AboutPhrase component', () => {
  it('Should return AboutPhrase in the component.', () => {
    render(<AboutPhrase name='Pedro' phrase='cheguei' about='xxxxxxx' date='18-04-2001' />)
 
    const heading = screen.getByText('Pedro')
 
    expect(heading).toBeInTheDocument()

    const phrase = screen.getByText('cheguei')

    expect(phrase).toBeInTheDocument()

  })
})