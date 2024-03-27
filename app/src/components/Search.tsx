import React, { useState } from 'react';
import '../styles/Search.css';
import { Filter } from '../types/FilterType';

function Search(): JSX.Element {
  const [filter, setFilter] = useState<Filter>({
    tipoDestaque: '',
    stacks: '',
  });

  const handleFilter = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFilter({ ...filter, [name]: value });
  };

  const { tipoDestaque, stacks } = filter;
  return (
    <section className="flex row justify section">
      <form className="flex row justify form">
        <div className="flex row form-div">
          <h2>Tipo de Destaque</h2>
          <select className="select" name="tipoDestaque" value={tipoDestaque} onChange={handleFilter}>
            <option value="" disabled selected>Selecione uma opção</option>
            <option>teste</option>
          </select>
        </div>
        <div className="flex row">
          <h2>Stacks</h2>
          <select className="select" name="stacks" value={stacks} onChange={handleFilter}>
            <option value="" disabled selected>Selecione uma opção</option>
            <option>teste</option>
          </select>
        </div>
      </form>
      <div className="flex row div-buttons">
        <button className="button" type="button">Buscar</button>
        <button
          className="button"
          type="button"
          onClick={() => setFilter({
            tipoDestaque: '',
            stacks: '',
          })}
        >
          Limpar filtros
        </button>
      </div>
    </section>
  );
}

export default Search;
