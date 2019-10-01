import React from 'react';

function Person({person}) {
  return (
    <div>
    <h1>Hi I am {person.name} and I am {person.age} years old.</h1>
    </div>
  );
}

export default Person;
