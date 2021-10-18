import React from 'react';
import StylesUserCards from '../styles/UserCards.module.scss'
import Image from 'next/image'

interface Person_detail {
    type:string,
    required:boolean
}


interface Person {
    firstName: Person_detail,
    lastName:Person_detail,
    picture:string
}

interface IndexProps {
    person: Person
}

interface Loader {
    src:string
}

const myLoader = ({src}:Loader) => {
   return `${src}`
}
function UserCards({person}:IndexProps) {
    return (
        <div className={StylesUserCards.wrapper + " text-sm m-2 text-left"}>
            <div className={StylesUserCards.profile}>
                {/*<Image loader={myLoader} src={person.picture} alt="Picture of the author" width={500} height={500}/>*/}
            </div>
            <div className={StylesUserCards.info}>
                <h1 className={"name"}>{person.firstName.type} {person.lastName.type}</h1>
            </div>
        </div>
    );
}

export default UserCards;



