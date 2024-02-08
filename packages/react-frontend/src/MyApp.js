import React, { useState, useEffect } from "react";
import Table from "./Table";
import Form from "./Form";


function MyApp() {
  const [characters, setCharacters] = useState([]);
  
  function removeOneCharacter(index) {
    let characterId = characters[index]._id;
    let removeUser = fetch(`http://localhost:8000/users/${characterId}`, {
      method : "DELETE",
    })
    .then((res) => 
    { 
      if(res.status == 204) {
        const updated = characters.filter((character, i) => {
          return i !== index;
        });
        setCharacters(updated);
      }
    })
    .catch((error) => {
      console.log(error);
    })

    

  }

  function updateList(person) { 
    postUser(person)
      .then((response) => {
        if(response.status === 201){
          response.json().then((data) =>{
            setCharacters([...characters,data.user]);
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })
  }

  useEffect(() => {
    fetchUsers()
      .then((res) => res.json())
      .then((json) => setCharacters(json["users_list"]))
      .catch((error) => { console.log(error); });
  }, [] );

  function postUser(person) {
    const promise = fetch("Http://localhost:8000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(person),
    });

    return promise;
  }

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



export default MyApp;