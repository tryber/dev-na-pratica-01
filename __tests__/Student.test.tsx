import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Student from '../src/components/Student'
import StudentReverse from '../src/components/StudentReverse'
import { User } from './mock/User'
import React from 'react'
 
describe('Student component', () => {
  it('Should return Student in the component.', () => {
    render(<Student image='/eli.jpeg' student_user={User}/>)
 
    const name = screen.getAllByText('Pedro');

    expect(name[0]).toBeInTheDocument();

  })
  it('Should return StudentReverse in the component.', () => {
    render(<StudentReverse image='/eli.jpeg' student_user={User}/>)
 
    const name = screen.getAllByText('Pedro');

    expect(name[0]).toBeInTheDocument();
  })

})