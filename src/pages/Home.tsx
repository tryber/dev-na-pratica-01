import { useSearchParams } from 'react-router-dom';

function Home() {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleSubmit(event) {
    event.preventDefault();
    const params = new URLSearchParams(new FormData(event.target)).toString();
    setSearchParams(params);
  }

  return (
    <>
      <h2>Home</h2>
      <h1>Destrybers</h1>
      <form action="/" method="get" onSubmit={handleSubmit}>
        <select name="tipoDestaque">
          <option disabled value="">Selecione uma opção</option>
          <option>batata</option>
        </select>
        <button type="submit">submit</button>
      </form>
      <h3>{searchParams.get('tipoDestaque')}</h3>
    </>
  );
}

export default Home;
