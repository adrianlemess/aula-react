import React, { useState } from "react";
import Person from "./Person/Person";

import "./App.css";

const app = () => {
  const [personState, setPersonState] = useState({
    persons: [
      { id: 1, name: "Adrian", age: 24 },
      { id: 2, name: "Guilherme", age: 22 },
      { id: 3, name: "Thiago", age: 30 }
    ],
    showPersons: true
  });

  console.log("showPersons", personState.showPersons);

  const toggleListHandler = () => {
    setPersonState({
      ...personState,
      showPersons: !personState.showPersons
    });
  };

  const changeNameHandler = (event, idPessoaDigitada) => {
    const personsMod = personState.persons.map(person => {
      if (person.id === idPessoaDigitada) {
        person.name = event.target.value;
      }

      return person;
    });

    setPersonState({
      persons: personsMod
    });
  };

  const renderButtonLabel = () => {
    if (!!personState.showPersons) {
      return "Limpar Lista";
    }

    return "Exibir Lista";
  };

  const renderPersonList = () => {
    if (!!personState.showPersons) {
      return (
        <div>
          {personState.persons.map(person => {
            return (
              <Person
                name={person.name}
                age={person.age}
                changed={event =>
                  changeNameHandler(event, person.id)
                }
              >
              </Person>
            );
          })}
        </div>
      );
    }

    return null;
  };

  return (
    <div className="centraliza">
      <h1 className="Person"> Hello World</h1>
      <button onClick={toggleListHandler}>{renderButtonLabel()}</button>
      {renderPersonList()}
    </div>
  );
};

export default app;
