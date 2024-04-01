import './App.css';
import Card from './components/Card';
import Header from './components/Header';

import capa from './assets/medalha.png';
import people from './assets/people.png';

function App() {
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
    </div>
  );
}

export default App;
