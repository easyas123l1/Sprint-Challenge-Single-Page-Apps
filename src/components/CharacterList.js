import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard';

export default function CharacterList() {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    let arr = [];
    let tempData = [];
    async function getCharacters() {
      try {
        let tryaxios = await axios.get(`https://rickandmortyapi.com/api/character/`)
          arr.push(tryaxios.data.results);
          for (let i = 0; i < arr[0].length; i++) {
            tempData.push(arr[0][i]);
          }
          while (tryaxios.data.info.next) {
            arr = [];
            tryaxios = await axios.get(tryaxios.data.info.next) 
              arr.push(tryaxios.data.results);
              for (let i = 0; i < arr[0].length; i++) {
                tempData.push(arr[0][i]);
              }
            }
            //this is probably where i want to do .includes
            setCharacters(tempData);
          }
          catch(error) {
            console.log(error);
          }
        }
    getCharacters();
  }, []);

  return (
    <section className="character-list">
      {characters.map(character => (
        <div key={character.id}>
          <CharacterCard key={character.id} character={character} />
        </div>
      ))}
    </section>
  );
}
