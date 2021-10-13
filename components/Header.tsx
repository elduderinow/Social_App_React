import React from 'react';
import {SearchIcon, ChatIcon, BellIcon, UserIcon} from '@heroicons/react/solid'
import Link from "next/link";
import styles from "../styles/Index.module.scss"


function Header() {

    return (
        <>
            <div className={"grid grid-cols-12 shadow-md p-2"}>
                <div className={"col-span-4"}>
                    <section className={"flex space-x-6 items-center"}>
                        <div className={"logo text-green-600 text-xl"}>
                            <Link href={"/"}>FriendBook</Link>
                        </div>
                        <div className={"flex bg-gray-100 px-3 py-2 items-center rounded-full "}>
                            <SearchIcon className={"h-5"}/>
                            <input placeholder={"search"} className={"hidden sm:block pl-3 bg-transparent outline-none"}/>
                        </div>
                    </section>
                </div>
                <div className={"col-span-5 flex items-center justify-center space-x-2 "}>

                </div>
                <div className={"col-span-3 flex items-center justify-end space-x-2 "}>
                    <div className={"bg-gray-100 hover:bg-gray-200 cursor-pointer p-3 rounded-full"}>
                        <ChatIcon className={"h-5"}/>
                    </div>
                    <div className={"bg-gray-100 hover:bg-gray-200 cursor-pointer p-3 rounded-full"}>
                        <BellIcon className={"h-5"}/>
                    </div>
                    <div className={"bg-gray-100 hover:bg-gray-200 cursor-pointer p-3 rounded-full"}>
                        <UserIcon className={"h-5"}/>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Header;



