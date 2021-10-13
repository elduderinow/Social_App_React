import React from 'react';
import {UserProvider} from '@auth0/nextjs-auth0';
import '../styles/globals.css'
import type {AppProps} from 'next/app'
import GlobalState from '../context/GlobalContext'


const MyApp = ({Component, pageProps}: AppProps) => {

    return (
        <UserProvider>
            <GlobalState>
                <Component {...pageProps} />
            </GlobalState>
        </UserProvider>

    )
}

export default MyApp


