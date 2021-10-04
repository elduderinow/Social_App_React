import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React from "react";
import UserCards from "../components/User-cards";


export default function Home(){
  return (
      <div>
       <Head>
           <title>Social App</title>
           <meta name={"keywords"} content={"web development, social app, programming"}/>
       </Head>
          <h1 className={styles.title}>Social App home</h1>
          <UserCards person={{firstName:"yarrut",lastName:"franken"}} text={"test"}/>
      </div>
  )
}

