import React from "react";
import Student from '@/components/Student';
import { data } from '../../data'
import StudentReverse from '@/components/StudentReverse';

const StudentsRender: React.FC<{ symbol: string}> = ({ symbol }) => {
  const studentRender = data.map((student, index) => {
    let value = false;
    if(symbol.length > 0) {
      value = !student.highlight
    } else {
      value = student.highlight
    }
    if (index % 2 === 0) {
      if (value) {
        return (
          <div key={student.id}>
            <Student image={student.image} student_user={student} />
          </div>
        )
      }
    } else {
      if (value) {
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
      {studentRender}
    </>
  )
}

export default StudentsRender
