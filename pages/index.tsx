import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React, {useRef, useState, useReducer} from "react";
import UserCards from "../components/User-cards";
import {useInput} from "../components/useInput"


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
    users: Person[]
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default function Home({users}: UserInt) {

    //usestate
    const [count, setCount] = useState<number>(0);

    //useReducer

    interface Initial {
        message: string
    }

    const initialState: Initial = {
        message: "hi"
    }

    type Action =
        | { type: "yell" }
        | { type: "whisper" }


    type State = {
        message: string
    }

    function reducer(state: State, action: Action) {
        switch (action.type) {
            case "yell": // = action
                return {
                    message: `HEY! I JUST SAID ${state.message}` // =state
                }
            case "whisper":
                return {
                    message: `excuse me i just said ${state.message}`
                }
        }
    }

    const [state, dispatch] = useReducer<React.Reducer<State, Action>>(reducer, initialState);

    //UseRef
    const sound = useRef<HTMLInputElement>(null) //only typehint useRef, use the HTML ... elements for this
    const color = useRef<HTMLInputElement>(null)

    const submit = (e: React.MouseEvent<HTMLFormElement>) => { //on button = e:React.MouseEvent<HTMLButtonElement>
        e.preventDefault();
        // the initial val of 'current' will be null, catch it.
        const soundVal = sound.current?.value //optional chaining -> question mark checks if it exist or not, same purpose as if statement but better bc the variables are not scoped in the if.
        const colorVal = color.current?.value
        alert(`${soundVal} sounds like ${colorVal}`)

        if (sound.current && color.current) {
            sound.current.value = "";
            color.current.value = "";
        }

    }

    //getting input from useState


    const [soundState, setSoundState] = useState("")
    const [colorState, setColorState] = useState("#000000")

    const submitState = (e: React.MouseEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(soundState, colorState)
    }

    //useInput with own hook
    const [titleProps, resetTitle] = useInput("")
    const [colorProps, resetColor] = useInput("#000000")

    const submitHook = (e: React.MouseEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(titleProps)

        alert(titleProps.value + colorProps.value)
        resetColor()
        resetTitle()
    }



    return (
        <>
            <Head>
                <title>Social App</title>
                <meta name={"keywords"} content={"web development, social app, programming"}/>
            </Head>
            <h1 className={styles.title + " bg-blue-200 p-3"}>Social App home</h1>

            <div className={"bg-gray-100 p-5"}>
                <h1 className={"text-2xl text-yellow-500"}>UseState</h1>
                <h1>{count}</h1>
                <button onClick={() => setCount(count - 1)} className={styles.button}>minus</button>
                <button onClick={() => setCount(count + 1)} className={styles.button}>plus</button>
            </div>

            <div className={"bg-gray-200 p-5"}>
                <h1 className={"text-2xl text-yellow-500"}>UseReducer</h1>
                <p>Message:{state.message}</p>
                <button onClick={() => dispatch({type: "yell"})} className={styles.button}>Yell</button>
                <button onClick={() => dispatch({type: "whisper"})} className={styles.button}>Whisper</button>
            </div>

            <div className={"bg-gray-100 p-5"}>
                <h1 className={"text-2xl text-yellow-500"}>UseRef</h1>
                <form onSubmit={submit}>
                    <input ref={sound} type={"text"} className={"bg-gray-200 m-5 p-2 rounded"}/>
                    <input ref={color} type={"color"} />
                    <button className={styles.button}>submit</button>
                </form>
            </div>

            <div className={"bg-gray-200 p-5"}>
                <h1 className={"text-2xl text-yellow-500"}>save input UseState</h1>
                <form onSubmit={submitState}>
                    <input onChange={(e)=> setSoundState(e.target.value)} value={soundState} type={"text"} className={"bg-gray-300 m-5 p-2 rounded"}/>
                    <input onChange={(e)=> setColorState(e.target.value)} value={colorState} type={"color"} />
                    <button className={styles.button}>submit</button>
                </form>
            </div>

            <div className={"bg-gray-100 p-5"}>
                <h1 className={"text-2xl text-yellow-500"}>Input with custom (input)Hook</h1>
                <form onSubmit={submitHook}>
                    <input {...titleProps} type={"text"} className={"bg-gray-200 m-5 p-2 rounded"}/>
                    <input {...colorProps} type={"color"} />
                    <button className={styles.button}>submit</button>
                </form>
            </div>


            <div className={"grid grid-cols-12 gap-5"}>
                {users.map((user) => {
                    return <UserCards key={user.id} user={user}/>
                })}
            </div>
        </>
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





