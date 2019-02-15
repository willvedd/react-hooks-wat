import React, { useState } from 'react';

export default () => {
    const [name, setName] = useState('Mary');
    // if(name=== 'Harry'){
    //   //DO NOT DO THIS
    //   const [surname, setSurname] = useState('Potter');//CANNOT WRAP useState IN CONDITIONS!
    // }
    const [surname, setSurname] = useState('Poppins');
    
    function handleNameChange(e) {
      setName(e.target.value);
    }
  
    function handleSurnameChange(e) {
      setSurname(e.target.value);
    }
  
    return (
      <>
        <input value={name} onChange={handleNameChange} />
        <input value={surname} onChange={handleSurnameChange} />
        <p>Hello, {name} {surname}</p>
      </>
    );
  }