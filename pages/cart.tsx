import React, {useContext} from 'react';
import {ProductsContext} from '../context/products.context'

export default function Cart() {
    const productsContext = useContext(ProductsContext)
    const {cart, deleteCartProduct} = productsContext

    interface product {
        name:string,
        id:number,
        price:number,
        desc:string
    }

  console.log(deleteCartProduct)


    return (
        <>
            <h1 className={"text-3xl mt-3 pt-3 text-black font-bold text-green-600"}>Cart Page</h1>
            <p className={"mb-3 text-gray-400 font-bold capitalize"}>These items are in your cart</p>
            <ul>
                 {cart.map((elem:product)=> {
                    return <><li key={elem.id}>{elem.name} | {elem.price}€</li>
                     <button onClick={()=>deleteCartProduct(elem.id)}>delete</button></>
                })}

            </ul>
        </>
    )
}