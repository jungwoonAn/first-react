import React, { useEffect, useState } from 'react'

const Comp08 = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false); //로딩일때 true, 아닐때 false
    const callAPI = () => {
        setLoading(true); //로딩시작
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => {
                console.log(json);
                setPosts(json);
        })
        setLoading(false); //로딩끝
    }

    //렌더링 될때마다 실행, 두번째 매개변수에 []면 처음 렌더링 될때 실행
    useEffect(()=>{
        callAPI();
    },[]);

    //로딩화면
    if(loading) return <h1>로딩중입니다...</h1>

    return (
        <div>
            <h1>게시글목록</h1>
            {posts.map(p=>
                <p key={p.id}>{p.id} : {p.title}</p>
            )}
        </div>
    )
}

export default Comp08