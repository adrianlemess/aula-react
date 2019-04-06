import React from "react";
import PersonStyle from './Person.module.css';

const person = props => {
  const { name, age, children, changed } = props;

  return (
    <div className={PersonStyle.Person}>
      <h1> I'm {name}</h1>
      <p> I am {age} years old</p>
      {children}
      <input type="text" onChange={changed} /> 
    </div>
  );
};

export default person;
