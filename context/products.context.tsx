import React, { createContext, useReducer } from 'react';
import shopReducer from './shopReducer';

const products = [
  { id: 1, name: 'iPhone', desc: 'iphone 12', price: 400 },
  { id: 2, name: 'Laptop', desc: 'newest laptop', price: 1200 },
  { id: 3, name: 'Samsung', desc: 'galaxy s something', price: 300 },
  { id: 4, name: 'Midget', desc: 'Hobbit with ring', price: 2000 },
  { id: 5, name: 'Sweather', desc: 'yes its warm', price: 100 },
];

const ShopState = (props: any) => {
  const initialState: any = { products: products, cart: [], form: {} };
  const [state, dispatch] = useReducer(shopReducer, initialState);

  const addToCart = (product: any) => {
    dispatch({ type: 'add', payload: product });
  };

  const deleteCartProduct = (id: number) => {
    dispatch({ type: 'delete', payload: id });
  };

  const updateForm = (data: any) => {
    dispatch({ type: 'updateForm', payload: data });
  };

  return (
    <ProductsContext.Provider
      value={{
        products: state.products,
        cart: state.cart,
        form: state.form,
        addToCart,
        deleteCartProduct,
        updateForm,
      }}
    >
      {props.children}
    </ProductsContext.Provider>
  );
};

export default ShopState;

interface Provider {
  products: [];
  cart: [];
  form: {};
  addToCart: (product: any) => void;
  deleteCartProduct: (id: number) => void;
  updateForm: (data: any) => void;
}

export const ProductsContext = createContext({} as Provider);
