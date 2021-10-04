import React from 'react';
import Link from 'next/link'
import navStyles from '../styles/nav.module.scss'

function Nav() {
    return (
        <nav className={navStyles.nav}>
            <ul>
                <li className={navStyles.list}>
                    <Link href={"/"}>Home</Link>
                </li>
                <li className={navStyles.list}>
                    <Link href={"/about"}>About</Link>
                </li>
                <li className={navStyles.list}>
                    <Link href={"/products"}>Products</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;

