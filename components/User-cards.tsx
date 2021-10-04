import React from 'react';
import StylesUserCards from '../styles/UserCards.module.css'

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


//diff advanced types
interface IndexProps {
    user: Person
    //function -> arrow func waarin je als result en param nog eens een type kan passeren.
    fn?: (bob: string) => string;
    //objects
    obj?: {
        field1: string
    },
    text?: string
}


function UserCards({user}: IndexProps) {
    return (
        <div className={"col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 p-5 bg-gray-200  shadow-md"}>
            <div className={"wrapper "}>
                <h1>{user.name}</h1>
                <p>{user.phone}<br/>
                    {user.address.street}
                </p>
            </div>
        </div>
    );
}

export default UserCards;



