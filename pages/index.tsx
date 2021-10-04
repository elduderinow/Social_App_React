import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React from "react";
import UserCards from "../components/User-cards";


interface Geo {
    lat: string
    lng: string
}

interface Address {
    city: string
    street: string
    suite: string
    zipcode: string
    geo: Geo
}


interface Person {
    name: string
    address: Address
    company: object
    email: string
    id: number
    phone: string
    username: string
    website: string
}

interface UserInt {
    users:Array<Person>
}


export default function Home({users}:UserInt) {
    console.log(users)

    let Useritems = users.map((user: Person) => {
        return <UserCards key={user.id} user={user}/>
    })
    return (
        <div>
            <Head>
                <title>Social App</title>
                <meta name={"keywords"} content={"web development, social app, programming"}/>
            </Head>
            <h1 className={styles.title}>Social App home</h1>
            <div className={"grid grid-cols-12 gap-5"}>
                {Useritems}
            </div>
        </div>
    )
}

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await res.json()

    return {
        props: {
            users
        }
    }
}





