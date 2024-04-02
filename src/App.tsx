import './App.css';
import { useState } from 'react';
import Card from './components/Card';
import Header from './components/Header';

import capa from './assets/medalha.png';
import people from './assets/people.png';
import { Modal } from './components/Modal';

import capaProjeto from './assets/capa.png';

function App() {
  const [open, setOpen] = useState<boolean>(false);

  const stacks = ['React', 'TypeScript'];

  return (
    <div className="bg-green-500 w-full h-screen">
      <Header />
      <Card
        fotoCapa={ capa }
        titulo="Teclado de Ouro"
        descricao="Lorem Ipsum is simply dummy text
        of the printing and typesetting industry.
        Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        fotoUser={ people }
        nome="Fulano da Silva"
        stack="Front-end"
        medalhas={ capa }
      />
      <button
        className="bg-blue-600 w-44 p-3 text-white"
        onClick={ () => setOpen(!open) }
      >
        Abrir modal
      </button>
      <Modal
        isOpen={ open }
        setOpen={ setOpen }
        fotoCapa={ capaProjeto }
        titulo="Star Wars: Ep. IV - Uma Nova Esperança"
        stacks={ stacks }
        fotoPeople={ people }
        nome="Fulando da Silva"
        turma="Turma 01"
        pathGitHub="/"
        pathLinkedin="/"
        descricao="is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and scrambled it"
        linkProjeto="/"
      />
    </div>
  );
}

export default App;
