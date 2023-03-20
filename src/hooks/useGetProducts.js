import { useEffect, useState} from 'react';

const useGetProducts = (API) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(API);
            const data = await response.json();
            setProducts(data);
            console.log(data);
        }
        fetchData();
        console.log(products);
    }, []);

    return products;
}

export default useGetProducts