type Post = {
  id: number,
  date: { day: number, month: number, year: number },
  name: string,
  picture: string,
  github: string,
  linkedin: string,
  title: string,
  illustration: string,
  description: string,
  tags: string[]
};

export default Post;
