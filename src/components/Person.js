import React from 'react'

const Person = ({ person }) => {
    return (
        <>
           <h1>Name:{person.name}</h1> 
           <h2>Age:{person.age}</h2> 
           <h3>Skill:{person.skill}</h3> 
        </>
    )
}

export default Person
