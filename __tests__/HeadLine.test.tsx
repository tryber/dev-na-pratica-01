import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import HeadLine from '../src/components/Headline'
import React from 'react'
 
describe('Component HeadLine', () => {
  it('Should return HeadLine component.', () => {
    render(<HeadLine title='title'/>)
 
    const heading = screen.getByText('title')
 
    expect(heading).toBeInTheDocument()

  })
})