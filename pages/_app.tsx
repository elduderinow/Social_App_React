import React from 'react';
import {UserProvider} from '@auth0/nextjs-auth0';
import '../styles/globals.css'
import type {AppProps} from 'next/app'
import GlobalState from '../context/GlobalContext'
import ShopState from '../context/products.context';


const MyApp = ({Component, pageProps}: AppProps) => {

    return (
        <UserProvider>
            <ShopState>
                <GlobalState>
                    <Component {...pageProps} />
                </GlobalState>
            </ShopState>
        </UserProvider>

    )
}

export default MyApp


