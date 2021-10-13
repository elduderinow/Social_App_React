import Head from 'next/head'
import Header from '../components/Header'
import React, {useContext} from "react";
import styles from "../styles/Index.module.scss"
import UserCards from "../components/UserCards";
import {GlobalContext} from '../context/createContext'
import { useUser } from '@auth0/nextjs-auth0';
import Login from "../components/Login";

export const getStaticProps = async () => {

    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()

    return {
        props: {
            usersobj:data
        }
    }
}


export default function Home(props:any) {

    console.log(props.usersobj)

    const globalContext = useContext(GlobalContext)
    const {users} = globalContext
    const { user, error, isLoading } = useUser();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error.message}</div>;
    if (!user) return <Login/>

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
                    <p>You are logged in as <span className={"text-green-700"}>{user.name}</span></p>
                    <a className={styles.button} href="/api/auth/login">Login</a>
                    <a className={styles.button} href="/api/auth/logout">Logout</a>
                    <a className={styles.button} href="/edit-account">Edit page</a>

                </section>
                <section className={"col-span-6"}>
                    <h1 className={"text-left pt-3 mb-3 text-xl capitalize text-gray-400"}>Chat</h1>
                </section>
                <section className={" col-span-3"}>
                    <h1 className={"text-left pt-3 pl-4 text-xl capitalize text-gray-400"}>contacts</h1>
                    <ul>
                        {users.map((user)=> {
                            return <li key={user.id}><UserCards user={user}/></li>
                        })}
                    </ul>
                </section>
            </main>

        </>
    )
}








