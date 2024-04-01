import seals from './seals';
import students from './students';
import highlights from './highlights';

type Table = 'seals' | 'students' | 'highlights';

const DATA = {
  seals,
  students,
  highlights,
};

export function find(table: Table) {
  return DATA[table];
}
