import { Link } from 'react-router-dom';

interface ButtonMainProps {
    children: string;    
    onClick: () => void;
}

const ButtonMain: React.FC<ButtonMainProps> = ({ onClick }) => {
    return (
        <button type='button' className='bg-blue-500 w-44 hover:bg-blue-600 font-bold py-2 px-4 text-white rounded' onClick={onClick}>
            <Link to={'link do projeto'}>Projeto</Link>
        </button>
    )
}
export default ButtonMain;