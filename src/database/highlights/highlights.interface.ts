import IStudent from '../students/student.interface';
import ISeal from '../seals/seal.interface';

interface IHighlight {
  id: number;
  title: string;
  description: string;
  banner: string;
  student: IStudent;
  seal: ISeal;
}

export default IHighlight;
