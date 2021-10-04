import React from 'react';
import styles from '../styles/Layout.module.css'
import Nav from './Nav'

interface LayoutProps  {
    children: React.ReactNode
}

function Layout({children}: LayoutProps) {
    return (
        <>
            <Nav/>
            <div className={styles.container}>
                <main className={styles.main}>
                    {children}
                </main>
            </div>
        </>
    );
}

export default Layout;

