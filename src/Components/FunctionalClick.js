import React from 'react';

function FunctionalClick() {

    function clickEventHandler() {
       console.log("Clicked button") 
    }
  return (
    <div>
      <button onClick={clickEventHandler}>Click</button>
    </div>
  );
}

export default FunctionalClick;
