import React, { useRef, useState } from 'react'

const Comp06 = () => {
  const [name, setName] = useState('홍길동');
  const [address, setAddress] = useState('경기도 수원시');
  const ref_name = useRef(null); 

  //확인버튼 클릭하면 input value 초기화
  const onClickConfirm = ()=>{
    alert(`이름: ${name}\n주소: ${address}`);
    setName('');
    setAddress('');
    ref_name.current.focus();
  }

  //주소입력 후 엔터키 누르면
  const onKeyPressAddress = (e)=>{
    if(e.key === 'Enter'){
      onClickConfirm();
    }
  }

  return (
    <div>
        <h1>useRef로 특정 DOM 선택</h1>

        <input type="text" placeholder='이름' value={name} ref={ref_name} onChange={(e)=>{setName(e.target.value)}} />
        <input type="text" placeholder='주소' size={50} value={address} onChange={(e)=>{setAddress(e.target.value)}} onKeyDown={onKeyPressAddress} />
        <button onClick={onClickConfirm}>확인</button>

        <h2>이름: {name}</h2>
        <h2>주소: {address}</h2>
    </div>
  )
}

export default Comp06
