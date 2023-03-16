import React, { useEffect, useState } from 'react';
import ProductItem from '@components/ProductItem';
import '@styles/ProductList.scss';

const API = 'https://api.escuelajs.co/api/v1/products';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(API);
            setProducts(response.data);
            console.log(products);
        }
        fetchData();
        console.log(products);
    }, []);
    return (
        <section className="main-container">
            <div className="ProductList">
                {products?.map((product, id) => 
                    (
                        <ProductItem key={id}/>
                    )
                
                )}
            </div>
        </section>
    )
}

export default ProductList;