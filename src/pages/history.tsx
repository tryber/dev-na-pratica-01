import React from 'react';
import Header from '@/components/Header';
import Headline from '@/components/Headline';
import Footer from '@/components/Footer';
import { data } from '../../data';
import Student from '@/components/Student';
import StudentReverse from '@/components/StudentReverse';

const History: React.FC = () => {
  const studentRender = data.map((student, index) => {
    if (index % 2 === 0) {
      if (!student.highlight) {
        return (
          <div key={student.id}>
            <Student image={student.image} student_user={student} />
          </div>
        )
      }
    } else {
      if (!student.highlight) {
        return (
          <div key={student.id}>
            <StudentReverse image={student.image} student_user={student} />
          </div>
        )
      }
    }
  });
  return (
    <>
      <Header />
      <main className='bg-gradient-to-br from-[#184327] via-[#141517] to-[#184327] w-full h-full'>
        <Headline title="histórico" />
        {studentRender}
        <div className="mt-32">
          <Footer />
        </div>
      </main>
    </>
  );
};

export default History;
