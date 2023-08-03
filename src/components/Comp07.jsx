import React, { useRef, useState } from 'react'
import Product from './Product';

const Comp07 = () => {
    const ref_name = useRef(null);
    const [products, setProducts] = useState([
        {code: 1, name: '냉장고', price: 300},
        {code: 2, name: '세탁기', price: 150},
        {code: 3, name: '에어컨', price: 400}
    ]);
    //form 안에 있는 내용 object로
    const [form, setForm] = useState({
        code: 4,
        name: 'TV',
        price: 250
    })
    //비구조할당
    const {code, name, price} = form;

    //form value변경되면 form state에 추가
    const onChangeForm = (e)=>{
        setForm({
            ...form, //기존 값 복사
            [e.target.name]: e.target.value //변경된 input값 추가
        })
    }

    const onSubmit = (e)=>{
        e.preventDefault();
        if(window.confirm(`${code}:${name}:${price} 등록하시겠습니까?`)){
            //form 상품 추가
            setProducts(products.concat(form));
            setForm({
                ...form,
                code: code+1,
                name:'',
                price:''
            });
            ref_name.current.focus(); //다음 입력할 곳에 focus
        }
    }

    const onDelete = (code)=>{
        if(window.confirm(`${code}번 상품을 삭제하시겠습니까?`)){
            //code가 일치하지 않은 상품만 newProduct변수에 보관
            const newProduct = products.filter(p=>p.code !==code);
            setProducts(newProduct);
        }
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <label>상품코드 : </label>
                <input name='code' placeholder='상품코드' readOnly value={code} onChange={onChangeForm}/> <br/><br/>
                <label>상품이름 : </label>
                <input name='name' placeholder='상품이름' value={name} ref={ref_name} onChange={onChangeForm}/> <br/><br/>
                <label>상품가격 : </label>
                <input name='price' placeholder='상품가격' value={price} onChange={onChangeForm}/> <br/><br/>

                <button>등록</button>
            </form>
            <hr />

            <Product products={products} del={onDelete} />

        </div>
    )
}

export default Comp07