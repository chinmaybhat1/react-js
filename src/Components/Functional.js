import React from 'react'
const Functional = ({state , capital, children}) => {
    return (
        <div>
            <h1>The capital city of {state} is {capital}</h1>
            {children}
        </div>
    )
}

export default Functional;
