import React, { useRef, useState } from 'react'

const Comp06 = () => {
    const [name, setName] = useState('홍길동');
    const [address, setAddress] = useState('인천 서구 경서동');
    const ref_name = useRef(null); //name input 가르키기 위한 hook

    // 확인버튼 클릭하면 초기화
    const onClickConfirm = ()=>{
        alert(`이름: ${name}\n주소: ${address}`);
        setName('');
        setAddress('');
        ref_name.current.focus();
    }

    // 주소입력 후 엔터
    const onKeyPressAddress = (e)=>{
        if(e.key === 'Enter'){
            onClickConfirm();
        }
    }

    return (
        <div>
            <input placeholder='이름' value={name} ref={ref_name} onChange={(e)=>{
                setName(e.target.value)
            }}/>
            <br />
            <input placeholder='주소' size={50} value={address} onChange={(e)=>{
                setAddress(e.target.value)
            }} onKeyDown={onKeyPressAddress}/>
            <br />
            <button onClick={onClickConfirm}>확인</button>


            <h2>이름 : {name}</h2>
            <h2>주소 : {address}</h2>
        </div>
    )
}

export default Comp06