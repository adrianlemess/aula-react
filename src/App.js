import React, { useState } from "react";
import Person from "./Person/Person";

import "./App.css";

const app = () => {
  const [personState, setPersonState] = useState({
    persons: [
      { id: 1, name: "Adrian", age: 24 },
      { id: 2, name: "Guilherme", age: 22 },
      { id: 3, name: "Thiago", age: 30 }
    ]
  });

  const [otherState, setOtherState] = useState("Hello");

  const changeNameHandler = (event, idPessoaDigitada) => {
    const personsMod = personState.persons.map(person => {
      if (person.id === idPessoaDigitada) {
        person.name = event.target.value;
      }

      return person;
    })

    setPersonState({
      persons: personsMod
    })
  };

  return (
    <React.Fragment>
      <h1 className="Person"> Hello World</h1>
      <Person
        name={personState.persons[0].name}
        age={personState.persons[0].age}
        changed={event => changeNameHandler(event, personState.persons[0].id)}
      >
        <p>Meus hobbies: Estudar, video-game</p>
      </Person>
      <Person
        name={personState.persons[1].name}
        age={personState.persons[1].age}
        changed={event => changeNameHandler(event, personState.persons[1].id)}
      />
      <Person
        name={personState.persons[2].name}
        age={personState.persons[2].age}
        changed={event => changeNameHandler(event, personState.persons[2].id)}
      />
      <div>
        {/* <button onClick={changeNameHandler.bind(this, 'Fernando')}>Alterar um nome</button> */}
      </div>
    </React.Fragment>
  );
};

export default app;
