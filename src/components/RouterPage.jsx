import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Comp01 from './Comp01'
import Comp07 from './Comp07'
import Comp08 from './Comp08'
 
const RouterPage = () => {
  return (
    <div>
        <div>
            <Link to='/'>홈</Link>
            <Link to='products'>상품관리</Link>
            <Link to='posts'>게시글</Link>
        </div>
        <hr />
        <Routes>
            <Route path='/' element={<Comp01/>}/>
            <Route path='/products' element={<Comp07 />}/>
            <Route path='/posts' element={<Comp08/>}/>
        </Routes>
    </div>
  )
}

export default RouterPage