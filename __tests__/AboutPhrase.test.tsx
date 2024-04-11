import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import AboutPhrase from '../src/components/AboutPhrase'
 
describe('AboutPhrase component', () => {
  it('Should return AboutPhrase in the component.', () => {
    render(<AboutPhrase name='Pedro' phrase='cheguei' about='xxxxxxx'/>)
 
    const heading = screen.getByText('Pedro')
 
    expect(heading).toBeInTheDocument()

    const phrase = screen.getByText('cheguei')

    expect(phrase).toBeInTheDocument()

  })
})