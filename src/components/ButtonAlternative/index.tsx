import { Link } from 'react-router-dom';


interface ButtonAlternativeProps {
    children: string;    
    onClick: () => void;
}

const ButtonAlternative: React.FC<ButtonAlternativeProps> = ({ onClick }) => {
    return (
        <button type='button' className='bg-black-500 w-44 hover:bg-black-600 font-bold py-2 px-4 text-white rounded' onClick={onClick}>
            <Link to={'link do projeto'}>Projeto</Link>
        </button>
    )
}

export default ButtonAlternative;