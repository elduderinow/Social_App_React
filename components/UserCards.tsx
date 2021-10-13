import React from 'react';
import StylesUserCards from '../styles/UserCards.module.scss'

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
        <div className={StylesUserCards.wrapper + " text-sm m-2 text-left"}>
            <div className={StylesUserCards.profile}/>
            <div className={StylesUserCards.info}>
                <h1 className={"name"}>{user.name}</h1>
            </div>
        </div>

    );
}

export default UserCards;



