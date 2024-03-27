import React from 'react';

function Search(): JSX.Element {
  // const [filter, setFilter] = useState({
  //   tipoDestaque: '',
  //   stacks: '',
  // });
  return (
    <section>
      <form>
        <div>
          <h2>Tipo de Destaque</h2>
          <select>
            <option value="" disabled selected>Selecione uma opção</option>
            <option>teste</option>
          </select>
        </div>
        <div>
          <h2>Stacks</h2>
          <select>
            <option value="" disabled selected>Selecione uma opção</option>
            <option>teste</option>
          </select>
        </div>
      </form>
      <button type="button">Buscar</button>
      <button type="button">Limpar filtros</button>
    </section>
  );
}

export default Search;
