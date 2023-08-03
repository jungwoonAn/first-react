import React, { useEffect, useState } from 'react'

const Comp08 = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false); //로딩중일때 true, 아닐때 false

    //서버에서 데이터 받아오는 함수
    const callAPI = () => {
        setLoading(true); //로딩시작
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => {
                console.log(json);
                setPosts(json);
            })
            setLoading(false); //데이터받은후 로딩끝
    }
    
    //렌더링 될때마다 실행, 두번째 매개변수에 []면 처음 렌더링 될때만 실행
    useEffect(()=>{
        callAPI();
    },[]);

    //로딩화면
    if(loading) return <h1>로딩중입니다...</h1>

    return (
        <div>
            <h1>게시글 목록</h1>
            {posts.map(p=>
                <p>{p.id} : {p.title}</p>
            )}
        </div>
    )
    }

export default Comp08