import IStudent from '../students/student.interface';

interface IHighlight {
  id: number;
  title: string;
  description: string;
  image: string;
  student: IStudent;
}

export default IHighlight;
