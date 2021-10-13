import React, {useState} from 'react';
import Head from "next/head";
import Header from "../components/Header";
import Input from "../components/Input";
import {useInput} from "../components/useInput";

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

    let initialState: Person = {
        firstname: "fname",
        lastname: "lname",
        birthday: "14/07/1968",
        email: "email@email.com",
        street: "streetname",
        streetnr: 88,
        city: "Anvers"
    }

    const [person, setPerson] = useState(initialState)


    const sendForm = (e: React.MouseEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(person)
    }
    const value = (e) => {
        setPerson({...person,...e})
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
                    <Input value={value} type={"text"} text={"First Name"} id={"firstname"} placeholder={"John"}/>
                    <Input value={value} type={"text"} text={"Last Name"} id={"lastname"} placeholder={"Doe"}/>
                    <Input value={value} type={"date"} text={"Birthday"} id={"birthday"} placeholder={"date"}/>
                    <Input value={value} type={"email"} text={"Email"} id={"email"} placeholder={"John@Doe.com"}/>
                    <Input value={value} type={"text"} text={"Street"} id={"street"} placeholder={"Applestreet"}/>
                    <Input value={value} type={"number"} text={"Number"} id={"streetnr"} placeholder={"00"}/>
                    <Input value={value} type={"text"} text={"City"} id={"city"} placeholder={"Antwerp"}/>
                    <button className={"bg-green-700 py-2 px-4 text-white rounded hover:bg-green-800 ml-4"}>Submit
                    </button>
                </form>
            </div>
        </>
    )
}