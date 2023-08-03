function Comp01(){
    //자바스크립트
    const name = '홍길동';
    const nickname = '리액트신';

    return(
        <div>
            <h1>첫번째 컴포넌트</h1>

            {name==='홍길동' ? <h2>홍길동입니다.</h2> : <h2>홍길동이 아닙니다.</h2>}

            {/* && 있으면?, || 없으면? */}
            {nickname && <h2>별명은 {nickname}입니다.</h2>}
            {nickname || <h2>별명이 {nickname}없습니다.</h2>}
        </div>
    )
}

export default Comp01;