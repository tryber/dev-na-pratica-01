export type Filter = {
  tipoDestaque: string,
  stacks: string,
};

export interface IFilterState {
  filter: Filter
  setFilter: React.Dispatch<React.SetStateAction<Filter>>
}
