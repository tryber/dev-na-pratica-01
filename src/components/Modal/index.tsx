/* eslint-disable react/jsx-max-depth */
/* eslint-disable max-len */
import { Link } from 'react-router-dom';

import github from '../../assets/icones/github.png';
import linkedin from '../../assets/icones/linkedin.png';

interface IModal {
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
  fotoCapa: string;
  titulo: string;
  stacks: string[];
  fotoPeople: string;
  nome: string;
  turma: string;
  pathLinkedin: string;
  pathGitHub: string;
  descricao: string;
  linkProjeto: string;
}

export function Modal({ isOpen, setOpen, fotoCapa, titulo, stacks, fotoPeople, nome, turma, pathLinkedin, pathGitHub, descricao, linkProjeto } : IModal) {
  if (isOpen) {
    return (
      <div className="fixed top-0 left-0 bottom-0 right-0 bg-opacity-90 bg-gray-700">
        <div className="flex min-[360px]:flex-col sm:flex-col md:flex-col lg:flex-row items-center w-3/6 fixed top-1/4 left-1/4 p-1 rounded-lg text-black bg-white">
          <img
            className="min-[360px]:w-1/2 min-[360px]:h-1/2"
            src={ fotoCapa }
            alt="Capa do projeto"
          />
          <div className="flex flex-col items-center gap-4 pl-2">
            <div className="w-full text-left">
              <h3 className="font-bold text-lg">{titulo}</h3>
              <div className="flex gap-1">
                <span className="bg-[#1EB720] p-2 rounded-lg text-white text-xs">{stacks[0]}</span>
                <span className="bg-[#1EB720] p-2 rounded-lg text-white text-xs">{stacks[1]}</span>
              </div>
            </div>
            <div className="w-full">
              <div className="flex justify-between items-center p-4">
                <div className="flex items-center gap-2">
                  <img
                    className="w-14 h-14"
                    src={ fotoPeople }
                    alt="Foto da pessoa que criou o projeto"
                  />
                  <div className="flex flex-col">
                    <p className="font-medium text-xs">{nome}</p>
                    <span className="font-light text-xs">{turma}</span>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <Link to={ pathLinkedin }><img className="w-6 h-6" src={ linkedin } alt="Ícone do linkedin" /></Link>
                  <Link to={ pathGitHub }><img className="w-6 h-6" src={ github } alt="Ícone do github" /></Link>
                </div>
              </div>
            </div>
            <p className="font-normal text-xs p-1">{descricao}</p>
            <button className="bg-blue-600 w-44 p-3 text-white"><Link to={ linkProjeto }>Ver projeto</Link></button>
          </div>
          <button className="fixed hover:text-[#1EB720] top-1/4 right-1/4 p-2" onClick={ () => setOpen(!isOpen) }>X</button>
        </div>
      </div>
    );
  }
}
