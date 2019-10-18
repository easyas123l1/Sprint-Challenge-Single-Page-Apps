import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard';
import SearchForm from "./SearchForm";

const CharacterList = () => {
  const [query, setQuery] = useState('');
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    let arr = [];
    let tempData = [];
    async function getCharacters() {
      try {
        let tryaxios = await axios.get(`https://rickandmortyapi.com/api/character/`)
          arr.push(tryaxios.data.results);
          let arr2 = arr[0].filter(character => {
            return character.name.toLowerCase().includes(query.toLowerCase())
          })
          for (let i = 0; i < arr2.length; i++) {
            tempData.push(arr2[i]);
          }
          while (tryaxios.data.info.next) {
            arr = [];
            tryaxios = await axios.get(tryaxios.data.info.next) 
              arr.push(tryaxios.data.results);
              let arr2 = arr[0].filter(character => {
                return character.name.toLowerCase().includes(query.toLowerCase())
              })
              for (let i = 0; i < arr2.length; i++) {
                tempData.push(arr2[i]);
              }
            }
            setCharacters(tempData);
          }
          catch(error) {
            console.log(error);
          }
        }
    getCharacters();
  }, [query]);

  const handleInputChange = event => {
    setQuery(event.target.value)
  }

  return (
    <section className="character-list">
      <SearchForm handleInputChange={handleInputChange} query={query}/>
      {characters.map(character => (
        <div key={character.id}>
          <CharacterCard key={character.id} character={character} />
        </div>
      ))}
    </section>
  );
}
 
export default CharacterList;