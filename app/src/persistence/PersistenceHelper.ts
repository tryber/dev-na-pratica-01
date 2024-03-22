import { LocalStoragePreset } from 'lowdb/browser';
import { JSONFilePreset } from 'lowdb/node';

type Post = {
  date: { day: number, month: number, year: number },
  name: string,
  picture: string,
  description: string,
  github: string,
  linkedin: string,
  tags: string[]
};

type Data = {
  snapshot: number,
  posts: Post[]
};

const defaultData: Post[] = [{
  date: { day: 1, month: 2, year: 3 },
  name: 'load failed',
  picture: '../assets/react.svg',
  description: 'a very detailed load fail',
  github: 'link to a failed github load',
  linkedin: 'link to a failed linkedin',
  tags: ['load', 'fail'],
}];

const localdb = LocalStoragePreset<Data>('db', { snapshot: 0, posts: defaultData });
const db = await JSONFilePreset<Post[]>('db.json', defaultData);

// const { posts } = db.data;
// const post = posts.find((p) => p.id === req.params.id);

// db.update(({ messages }) => messages.push('foo'));

export default db;
