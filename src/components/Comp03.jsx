import React from 'react'
import Student from './Student';

const Comp03 = () => {
    const students=[
        {no: '202301', name: '홍길동', dept: '컴정과'},
        {no: '202302', name: '심청이', dept: '전자과'},
        {no: '202303', name: '강감찬', dept: '컴정과'},
        {no: '202304', name: '이몽룡', dept: '전자과'}
    ];
    return (
        <div>
            <h1>배열출력</h1>
            <table>
                <thead>
                    <tr>
                        <th>학번</th>
                        <th>이름</th>
                        <th>학과</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((s,index)=>
                        <Student key={index} stu={s}/>
                    )}
                </tbody>
            </table>
            
        </div>
    )
}

export default Comp03