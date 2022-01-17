//how to render list (array) in js 
import React from 'react'
import Person from './Person'

const PersonList = () => {
    // const names=["Divya", "Akshat", "Vatsal"]
    // return names.map(item => <h1 key={item}>{item}</h1>)
    const persons=[
        { id: 1, name:'Divya', age: 25, skill: 'ReactJS' },
        { id: 2, name:'Divyanshi', age: 26, skill: 'JS'},
        { id: 3, name:'Diksha', age: 28, skill: 'NodeJS'}
];
return persons.map(person => <Person key={person.id} person={person} /> )
}

export default PersonList
