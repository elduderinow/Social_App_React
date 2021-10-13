import React, {useContext} from 'react';
import Head from "next/head";
import Header from "../components/Header";
import Input from "../components/Input";
import {GlobalContext} from "../context/createContext";

export default function EditAccount() {
    interface Person {
        firstname: string,
        lastname: string,
        birthday: string,
        email: string,
        street: string,
        streetnr: number,
        city: string
    }

    const globalContext = useContext(GlobalContext)
    const {form}: Person | any = globalContext


    const sendForm = (e: React.MouseEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(form)
    }


    return (
        <>
            <Head>
                <title>Social App</title>
                <meta name={"keywords"} content={"web development, social app, programming"}/>
            </Head>
            <Header/>

            <div className={"p-6 bg-gray-100"}>
                <h1 className={"text-left mb-4 text-lg capitalize text-gray-400"}>Complete Information</h1>
                <form onSubmit={sendForm} className={"shadow-md py-5 bg-white rounded-md"}>
                    <Input type={"text"} text={"First Name"} id={"firstname"} placeholder={"John"}/>
                    <Input type={"text"} text={"Last Name"} id={"lastname"} placeholder={"Doe"}/>
                    <Input type={"date"} text={"Birthday"} id={"birthday"} placeholder={"date"}/>
                    <Input type={"email"} text={"Email"} id={"email"} placeholder={"John@Doe.com"}/>
                    <Input type={"text"} text={"Street"} id={"street"} placeholder={"Applestreet"}/>
                    <Input type={"number"} text={"Number"} id={"streetnr"} placeholder={"00"}/>
                    <Input type={"text"} text={"City"} id={"city"} placeholder={"Antwerp"}/>
                    <button className={"bg-green-700 py-2 px-4 text-white rounded hover:bg-green-800 ml-4"}>Submit
                    </button>
                </form>
            </div>
        </>
    )
}