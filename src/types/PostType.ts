type Post = {
  id: number,
  date: { day: number, month: number, year: number },
  name: string,
  picture: string,
  illustration: string,
  description: string,
  github: string,
  linkedin: string,
  tags: string[],
  projects: string[]
};

export default Post;
