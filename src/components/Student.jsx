import React from 'react'

const Student = (props) => {
  const { no, name, dept } = props.stu;
  return (
    <tr>
      <td>{no}</td>
      <td>{name}</td>
      <td>{dept}</td>
    </tr>
  )
}

export default Student