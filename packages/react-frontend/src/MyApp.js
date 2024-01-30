import React, { useState } from "react";
import Table from "./Table";
import Form from "./Form";
import React, {useState, useEffect} from 'react';

function MyApp() {
  const [characters, setCharacters] = useState([]);
  
  function removeOneCharacter(index) {
    const updated = characters.filter((character, i) => {
      return i !== index;
    });
    setCharacters(updated);
  }
  function updateList(person) {
    setCharacters([...characters, person]);
  }

  useEffect(() => {
    fetchUsers()
      .then((res) => res.json())
      .then((json) => setCharacters(json["users_list"]))
      .catch((error) => { console.log(error); });
  }, [] );
  
  return (
    <div className="container">
      <Table
        characterData={characters}
        removeCharacter={removeOneCharacter}
      />
      <Form handleSubmit={updateList} />
    </div>
  );

}

function fetchUsers() {
  const promise = fetch("http://localhost:8000/users");
  return promise;
}


// src/MyApp.js
const characters = [
  {
    name: "Charlie",
    job: "Janitor"
  },
  {
    name: "Mac",
    job: "Bouncer"
  },
  {
    name: "Dee",
    job: "Aspring actress"
  },
  {
    name: "Dennis",
    job: "Bartender"
  }
];



export default MyApp;