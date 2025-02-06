// import React from 'react';
// function Debounce(){
//   const Debouncing = (func,delay) => {
//     let timeId;
//     return function(...args){
//       clearTimeout(timeId);
//       timeId = setTimeout(()=>{
//       func(...args)
//       },delay);
//     }
//     const myFunction = function(event){
//       const query = event.target.value;
//       console.log("we got query:-") 
//     }
//     return (
//       <div>
//         <button
//         type='text'
//         onClick={}></button>
        
//       </div>
//     )
//   }
// }


// export default Debouncing



import React, { useState, useCallback } from 'react';

function Debounce() {
  const [query, setQuery] = useState('');

  const debouncing = (func, delay) => {
    let timerId;
    return (...args) => {
      clearTimeout(timerId);
      timerId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  const myFunction = (event) => {
    console.log("We got query:", event.target.value);
  };

  const debouncedFunction = useCallback(debouncing(myFunction, 500), []);

  return (
    <div>
      <input
        type='text'
        placeholder='Type here...'
        onChange={(event) => {
          setQuery(event.target.value);
          debouncedFunction(event);
        }}
        value={query}
      />
    </div>
  );
}

export default Debounce;

