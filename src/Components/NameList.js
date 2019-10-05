import React from 'react';
import Person from './Person';
import { UserConsumer } from './UserContext';

function NameList() {
    const persons = [
        {
            id: 1,
            name: 'Chinmay',
            age: 26
        },
        {
            id: 2,
            name: 'Ajith HB',
            age: 25
        }
    ]
    const personList = persons.map(person => <Person key={person.id} person={person}/>)
    return (
        <div>
            <UserConsumer>
                {username => {
                    return <h1>Hello {username}</h1>
                }}
            </UserConsumer>
            
            {personList}
        </div>
    );
}

export default NameList