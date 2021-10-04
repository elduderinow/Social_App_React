import React from 'react';


interface Person {
    firstName:string
    lastName:string
}

//diff advanced types
interface IndexProps  {
    articles?: Array<Object>
    //function -> arrow func waarin je als result en param nog eens een type kan passeren.
    fn?:(bob:string) => string;
    //objects
    obj?:{
        field1:string
    },
    person:Person
    text:string
}

function UserCards({articles, fn, obj, person, text}:IndexProps) {
    return (
       <>
           <h1>User cards</h1>
           <p>{person?.firstName} {person?.lastName}</p>
           <p>{text}</p>
       </>
    );
}

export default UserCards;

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6')
    const articles = await res.json()

    return {
        props: {
            articles
        }
    }
}


