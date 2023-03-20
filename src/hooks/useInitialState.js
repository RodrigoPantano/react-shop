import { useState } from 'react'

const initialState = {
    cart: [],
}

const useInitialState = () => {
    const [state, setState] = useState(initialState);

    const addToCart = (product) => {      //donde esta el product suele aparecer con el nombre de payload
        setState({
            ...state,
            cart: [...state.cart, product]
        });
    };

    const removeFromCart = (indexValue) => {
        setState({
            ...state,
            cart: state.cart.filter((product, index) => index !== indexValue),
        })
    }

    return {
        state,
        addToCart,
        removeFromCart
    };
}

export default useInitialState