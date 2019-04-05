import React, { useState } from "react";
import Person from "./Person/Person";

import "./App.css";

const app = () => {
  const [personState, setPersonState] = useState({
    persons: [
      { name: "Adrian", age: 24 },
      { name: "Guilherme", age: 22 },
      { name: "Thiago", age: 30 }
    ]
  });

  const [ otherState, setOtherState] = useState("Hello")

  const changeNameHandler = (event) => {
    console.log(event)
    console.log('Fui chamado')
    console.log(personState)
  };

  return (
    <React.Fragment>
      <h1> Hello World</h1>
      <Person name={personState.persons[0].name} age={personState.persons[0].age}>
        <p>Meus hobbies: Estudar, video-game</p>
      </Person>
      <Person name={personState.persons[1].name} age={personState.persons[1].age} />
      <Person 
        name={personState.persons[2].name} 
        age={personState.persons[2].age} 
        changed={changeNameHandler}
      />
      <button onClick={changeNameHandler}>Alterar um nome</button>
      <p> {otherState.otherState} </p>
    </React.Fragment>
  );
};

export default app;
