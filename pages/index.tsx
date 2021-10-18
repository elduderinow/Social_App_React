import Head from 'next/head'
import Header from '../components/Header'
import React, {useContext} from "react";
import styles from "../styles/Index.module.scss"
import UserCards from "../components/UserCards";
import {GlobalContext} from '../context/createContext'
import {useUser} from '@auth0/nextjs-auth0';
import Login from "../components/Login";
import clientPromise from '../lib/mongodb'
import Image from "next/image";


import dbConnect from "../lib/mongodbnext";
import Person from '../models/Person'

interface Person {
    firstName: object,
    lastName: object,
    birthDay: object,
    city: object,
    email: object,
    street: object,
    streetNumber: object
}

interface IndexProps {
    persons: Person,
    isConnected: () => void
}

export default function Home({isConnected, persons}: IndexProps) {


    const globalContext = useContext(GlobalContext)
    const {users} = globalContext
    const {user, error, isLoading} = useUser();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error.message}</div>;
    if (!user) return <Login/>


    const thisUser = persons.find((person) => {

        return person.email.type === user.email
    })

    console.log(thisUser)


    interface Loader {
        src: string
    }

    const myLoader = ({src}: Loader) => {
        return `${src}`
    }

    return (
        <>
            <Head>
                <title>Social App</title>
                <meta name={"keywords"} content={"web development, social app, programming"}/>
            </Head>
            <Header/>
            <main className={"grid grid-cols-12"}>
                <section className={"col-span-3 pl-2"}>
                    <h1 className={"text-left pt-3 mb-3 text-xl capitalize text-gray-400"}>Profile</h1>
                    <div>
                        {/*<Image loader={myLoader} src={thisUser.picture} alt="Picture of the author" width={500} height={500}/>*/}
                    </div>
                    {/*<p className={"text-green-600"}>{thisUser.firstName.type} {thisUser.lastName.type}</p>*/}
                    <a className={styles.button} href="/api/auth/logout">Logout</a>
                    <a className={styles.button} href="/edit-account">Edit page</a>

                </section>
                <section className={"col-span-6"}>
                    <h1 className={"text-left pt-3 mb-3 text-xl capitalize text-gray-400"}>Chat</h1>
                    {isConnected ? (
                        <h2 className="subtitle">You are connected to MongoDB</h2>
                    ) : (
                        <h2 className="subtitle">
                            You are NOT connected to MongoDB. Check the <code>README.md</code>{' '}
                            for instructions.
                        </h2>
                    )}
                </section>
                <section className={" col-span-3"}>
                    <h1 className={"text-left pt-3 pl-4 text-xl capitalize text-gray-400"}>contacts</h1>
                    {/*<ul>*/}
                    {/*    {persons.map((person) => {*/}
                    {/*        return <li key={person._id}><UserCards person={person}/></li>*/}
                    {/*    })}*/}
                    {/*</ul>*/}
                </section>
            </main>

        </>
    )
}

export async function getServerSideProps() {

    await dbConnect()

    const result = await Person.find({})
    const persons = result.map((doc) => {
        console.log(doc)
        const person =  doc.toObject()
        person._id = person._id.toString()
        return person
    })

    console.log(persons)


    // const client = await dbConnect()
    // console.log(client.models.Person.find({}))
    // const result = await Person.find({})
    //
    //
    // const persons = result.map((doc)=> {
    //     const person = doc.toObject()
    //     person._id = person._id.toString()
    //     return person
    // })
    //
    // const isConnected = await client.connection.readyState

    // const client = await clientPromise
    // const data = await client.db().collection('person').find({}).toArray()
    // const persons =  JSON.parse(JSON.stringify(data))
    //
    // const isConnected = await client.isConnected()

    return {
        props: {persons}
    }
}








