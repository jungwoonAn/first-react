import React, { useRef, useState } from 'react'
import Product from './Product';

const Comp07 = () => {
    const ref_name = useRef(null);
    const [products, setProducts] = useState([
        {code: 1, name: '냉장고', price: 300},
        {code: 2, name: '세탁기', price: 150},
        {code: 3, name: '에어컨', price: 400},
    ])
    //form안에 있는 내용 object로
    const [form, setForm] = useState({
        code: 4,
        name: 'TV',
        price: 250
    });
    const {code, name, price} = form;

    const onChangeForm = (e)=>{
        setForm({
            ...form, //원래있던 값 복사
            [e.target.name]: e.target.value //변경된 input값 변경
        })
    }

    const onSubmit =(e)=>{
        e.preventDefault();
        if(window.confirm(`${code}:${name}:${price} 등록하시겠습니까?`)){
            //form 상품 추가
            setProducts(products.concat(form));
            setForm({
                ...form,
                code: code+1,
                name: '',
                price: ''
            });
            ref_name.current.focus(); //입력할 곳에 focus
        }
    }

    const onDelete = (code)=>{
        if(window.confirm(`${code}번 상품을 삭제하시겠습니까?`)){
            const newProduct = products.filter(p=>p.code !== code);
            setProducts(newProduct);
            // setProducts(products.filter(p=>p.code !== code));
        }
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input name="code" readOnly placeholder='상품코드' value={code} onChange={onChangeForm}/> {code}<br/><br/>
                <input name="name" placeholder='상품이름' value={name} onChange={onChangeForm} ref={ref_name}/> {name}<br/><br/>
                <input name="price" placeholder='상품가격' value={price} onChange={onChangeForm}/> {price}<br/><br/>
                
                <button type='submit'>확인</button>
                <button type='reset'>취소</button>
            </form>
            <hr />
            <Product products={products} del={onDelete}/>
        </div>
    )
}

export default Comp07