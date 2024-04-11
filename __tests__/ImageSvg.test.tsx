import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import ImageSvg from '../src/components/ImageSvg'
import React from 'react'
 
describe('Component ImageSvg', () => {
  it('Should return ImageSvg component.', () => {
    render(<ImageSvg image='/eli.jpeg' linkedin='linkedin.com'/>)
 
    const backgroundImageDiv = screen.getByTestId('testId-image') as HTMLImageElement;;

    expect(backgroundImageDiv).toBeInTheDocument();
    expect(backgroundImageDiv).toHaveClass('rounded-[40px] w-48 md:w-[240px] lg:w-70 group-hover:opacity-10');
    expect(backgroundImageDiv.src).toEqual('http://localhost/_next/image?url=%2Feli.jpeg&w=256&q=75');
  })
})