import React from 'react';
import Input from "./Input";

function Form() {


    return (
        <form onClick={submit} className={"shadow-md py-5 bg-white rounded-md"}>
            <div className={"wrapper w-full md:w-1/2 inline-block px-4 mb-5"}>
                <label htmlFor={"fname"} className={"text-gray-500 text-md inline-block mb-1 pt-1"}>dzdzd</label>
                <input type={"text"} id={"fname"} placeholder={"first name"}
                       className={"mt-2 p-1 outline-none border-b border-gray-200 block w-full placeholder-gray-400 focus:placeholder-transparent"}/>
            </div>

            <div className={"wrapper w-full md:w-1/2 inline-block px-4 mb-5"}>
                <label htmlFor={"fname"} className={"text-gray-500 text-md inline-block mb-1 pt-1"}>dzdzd</label>
                <input type={"text"} id={"fname"} placeholder={"first name"}
                       className={"mt-2 p-1 outline-none border-b border-gray-200 block w-full placeholder-gray-400 focus:placeholder-transparent"}/>
            </div>
            <button className={"bg-green-700 py-2 px-4 text-white rounded hover:bg-green-800 ml-4"}>Submit</button>
        </form>
    );
}

export default Form;



