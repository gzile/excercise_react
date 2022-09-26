import React, { useState } from "react";

export default function Header(props) {
  const headerStyleObj = { backgroundColor: '#75a3b1', padding: '10px' };
  
  // Set state on count
  const [count, setCount] =  useState(0); 
    
  const onAddClickHandler = () => {
    setCount(count + 1);
  }

  const onMinusClickHandler = () => {
    setCount(count - 1);
  }

  return (
    <header style={headerStyleObj}>
      {/* <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
      <p>{props.mentor}</p> */}
      <h1>{count}</h1>

      <button onClick={(event) => onAddClickHandler(event)}>Add one</button>
      <button onClick={onMinusClickHandler}>Minus One</button>
      {/* <small>{Date()}</small> */}
    </header>
  );
} 