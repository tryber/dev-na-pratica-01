import React, { useEffect, useState } from 'react';
import '../styles/Search.css';
import { Filter } from '../types/FilterType';
import data from '../persistence/PersistenceHelper';
import Post from '../types/PostType';

function Search(): JSX.Element {
  const [filteredData, setFilteredData] = useState<Post[]>(data);

  const [filter, setFilter] = useState<Filter>({
    tipoDestaque: '',
    stacks: '',
  });

  useEffect(() => {
    if (filter.stacks !== '') {
      const dataByFilter = data.filter((post) => post.tags.includes(filter.stacks));
      setFilteredData(dataByFilter);
    }
  }, [filter]);

  const handleFilter = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFilter({ ...filter, [name]: value });
  };

  const { tipoDestaque, stacks } = filter;
  console.log(filteredData);

  return (
    <section className="flex row justify section">
      <form className="flex row form">
        <div className="flex column form-div">
          <h2>Tipo de Destaque</h2>
          <select className="select" name="tipoDestaque" value={tipoDestaque} onChange={handleFilter}>
            <option disabled value="">Selecione uma opção</option>
            <option>teste</option>
          </select>
        </div>
        <div className="flex column">
          <h2>Stacks</h2>
          <select className="select" name="stacks" value={stacks} onChange={handleFilter}>
            <option disabled value="">Selecione uma opção</option>
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
