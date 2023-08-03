import React, { useState } from 'react'

const Comp04 = () => {
  const [count, setCount] = useState(0);

  const onIncrease = () => {
    setCount(count + 1);
  }

  const onDecrease = () => {
    setCount(count - 1);
  }
  
  return (
    <div>
      <h1>state 변수란?</h1>
      <h1>카운트 : {count}</h1>

      <div>
        <button onClick={onDecrease}>감소</button>
        <button onClick={onIncrease}>증가</button>
      </div>
        
    </div>
  )
}

export default Comp04