import React, {useContext} from 'react';
import styles from '../styles/Products.module.scss'
import Cart from "./cart";
import {ProductsContext} from '../context/products.context'



function Products() {
    const productsContext = useContext(ProductsContext)
    const {products, addToCart} = productsContext


    return (
        <>
            <Cart/>
            <h1 className={"text-3xl m-3 py-3 text-black font-bold text-green-600"}>Product page</h1>
            <div className={"grid grid-cols-12"}>
                <div className={"col-span-12"}>
                    <ul>
                        {products.map((elem) => {
                            return <li key={elem.id} className={styles.list}>
                                <ul>
                                    <li className={styles.listInner + " font-bold"}><h2>{elem.name}</h2></li>
                                    <li className={styles.listInner}><p>{elem.desc}</p></li>
                                    <li className={styles.listInner}><p>{elem.price + " €"}</p></li>
                                     <li className={styles.listInner}>
                                        <button onClick={()=>addToCart(elem)} className={styles.button + " bg-green-600 hover:bg-green-700"}>Add</button>
                                    </li>
                                </ul>
                            </li>
                        })}

                    </ul>
                </div>
            </div>
        </>
    );
}

export default Products;