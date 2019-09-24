import React from 'react'
const Functional = (props) => {
    return (
        <div>
            <h1>The capital city of {props.state} is {props.capital}</h1>
            {props.children}
        </div>
    )
}

export default Functional;
