type Post = {
  id: number,
  date: { day: number, month: number, year: number },
  name: string,
  picture: string,
  description: string,
  github: string,
  linkedin: string,
  tags: string[]
};

export default Post;
