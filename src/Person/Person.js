import React from "react";

const person = props => {
  const { name, age, children, changed } = props;
  return (
    <React.Fragment>
      <h1> I'm {name}</h1>
      <p> I am {age} years old</p>
      {children}
      <input type="text" onChange={changed} /> 
    </React.Fragment>
  );
};

export default person;
