import React, {useRef} from 'react';
import {useInput} from "./useInput";


function Input({text, id, placeholder, type, value}) {

    interface Person {
        firstname:string,
        lastname:string,
        birthday:string,
        email:string,
        street:string,
        streetnr:number,
        city:string
    }

    let initialState:Person = {
        firstname:"fname",
        lastname:"lname",
        birthday:"14/07/1968",
        email:"email@email.com",
        street:"streetname",
        streetnr:88,
        city:"Anvers"
    }

    function getVal(e) {
        value({key:id,value:e})
        console.log(value)
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



