import React from 'react'

const Product = ({products, del}) => {
    
    return (
        <div>
            <h1>상품목록</h1>
            <table>
                <thead>
                    <tr>
                        <th width={100}>코드</th>
                        <th width={200}>상품명</th>
                        <th width={100}>가격</th>                        <th width={100}>삭제</th>                    
                    </tr>
                </thead>
                <tbody>
                    {products.map(product=>
                        <tr>
                            <td>{product.code}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td><button onClick={()=>del(product.code)}>삭제</button></td>
                        </tr>
                    )}
                </tbody>
            </table>

        </div>
    )
}

export default Product