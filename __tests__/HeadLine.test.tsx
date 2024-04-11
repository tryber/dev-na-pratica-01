import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import HeadLine from '../src/components/Headline'
 
describe('Component HeadLine', () => {
  it('Should return HeadLine component.', () => {
    render(<HeadLine title='title'/>)
 
    const heading = screen.getByText('title')
 
    expect(heading).toBeInTheDocument()

  })
})