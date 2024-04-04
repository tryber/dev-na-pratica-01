import { ChangeEvent, useState } from "react";

const months = [
  'Selecione um mês',
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro'
];

function Filter() {
  const [selectValue, setSelectValue] = useState('')

  function onChange(event: ChangeEvent<HTMLSelectElement>) {
    const value = event.currentTarget.value
    setSelectValue(value)
  }

  return (
    <div className="bg-zinc-400 flex items-center justify-center p-7 gap-3 w-fit rounded-2xl">
      <label htmlFor="search" className="font-semibold text-xl text-black w-full">Buscar por mês:</label>
      <select
        id="search"
        name="search"
        autoComplete="off"
        className="w-full h-full outline-none text-black rounded-md"
        value={selectValue}
        onChange={onChange}
        defaultValue={months[0]}
      >
        {
          months.map((month) => {
            return (
              <option value={month.toLocaleLowerCase()}>{month}</option>
            )
          })
        }
      </select>
    </div>
  );
}

export default Filter;