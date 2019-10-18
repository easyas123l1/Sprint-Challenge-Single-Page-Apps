import React from "react";

const CharacterCard = props => {
  console.log('props', props);
  return (
    <div>
      <img alt='Characters picture' src={props.character.image} />
      <h2>Name: {props.character.name}</h2>
      <p>Gender: {props.character.gender}</p>
      <p>Species: {props.character.species}</p>
      <p>Status: {props.character.status}</p>
    </div>  
  )
}

export default CharacterCard;