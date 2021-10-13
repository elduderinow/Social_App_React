import React, {useRef, useContext} from 'react';
import { ProductsContext } from '../context/products.context';
import {useInput} from "./useInput";

type inputProps = {
    text: string,
    id: string,
    placeholder: string,
    type: string,
}

function Input({text, id, placeholder, type}: inputProps) {

    const productsContext = useContext(ProductsContext)
    const {form, updateForm} = productsContext

    function getVal(value:string) {
        console.log(form);
        const data = {
            [id]: value
        }
        
        updateForm(data)
    }

    return (
       <>
           <div className={"wrapper w-full md:w-1/2 inline-block px-4 mb-5"}>
               <label htmlFor={id} className={"text-gray-500 text-md inline-block mb-1 pt-1"}>{text}</label>
               <input onChange={(e:any)=>getVal(e.target.value)} type={type} id={id} placeholder={placeholder}
                      className={"mt-2 p-1 outline-none border-b border-gray-200 block w-full placeholder-gray-400 focus:placeholder-transparent"}/>
           </div>
       </>
    );
}

export default Input;



