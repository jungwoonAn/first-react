import React from 'react'
import Student from './Student'

const Comp02 = () => {
    const student = {no: '202301', name: '홍길동', dept: '컴정과'};
    const student1 = {no: '202302', name: '심청이', dept: '전자과'};
  return (
    <div>
        <h1>props란?</h1>
        <Student stu={student}/>
        <Student stu={student1}/>
    </div>
  )
}

export default Comp02