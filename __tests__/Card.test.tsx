import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { CardItem } from '../src/components/Card'
import { User } from './mock/User'
 
describe('Card component', () => {
  it('Should return Card in the component.', () => {
    render(<CardItem project={User.projects[0]}/>)
 
    const backgroundImageDiv = screen.getByTestId('background-image-div');

    expect(backgroundImageDiv).toBeInTheDocument();
    expect(backgroundImageDiv).toHaveClass('absolute inset-0 bg-cover bg-center');
    expect(backgroundImageDiv).toHaveStyle({ backgroundImage: 'url(/aprendizagem.jpeg)' });

  })
})