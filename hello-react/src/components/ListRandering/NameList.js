import React from 'react'
import Person from './Person'

function NameList()
{
    // const names=['Arun','vijay','Jay']
    // const nameList =  names.map(name => <h2> {name} </h2>)
    // return(
    //     <div>
    //        {nameList}
    //     </div>
    // )

    const Persons = [
        {
            id:1,
            name:'Arun',
            age:30,
            skills: 'React'
        }, {
            id:2,
            name:'Jay',
            age:30,
            skills: 'Angular'
        }, {
            id:3,
            name:'Jatin',
            age:30,
            skills: 'Python'
        }, {
            id:4,
            name:'Bholo',
            age:35,
            skills: 'Marketing'
        }
    ]

    // const personList = Persons.map(person => (
    // <h2> I am {person.name}.  I am  {person.age} year old. I am expert in {person.skills} </h2>
    // ))

    //Call other component
    const personList = Persons.map(person => <Person person={person} />)
    return(
        <div> {personList} </div>
    )

}
export default NameList