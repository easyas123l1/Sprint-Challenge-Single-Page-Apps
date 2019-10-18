import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard';
import SearchForm from "./SearchForm";
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const Container2 = styled.div`
  width: 45%;
  margin: 5px;
`;
const CharacterList = () => {
  const [query, setQuery] = useState('');
  const [characters, setCharacters] = useState([]);
  const [tempCharacters, setTempCharacters] = useState([]);

  useEffect(() => {
    let arr = [];
    let tempData = [];
    async function getCharacters() {
      try {
        let tryaxios = await axios.get(`https://rick-api.herokuapp.com/api/character/`)
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
            setTempCharacters(tempData);
          }
          catch(error) {
            console.log(error);
          }
        }
    getCharacters();
  }, []);

  useEffect(() => {
    let arr = tempCharacters.filter(character => {
      return character.name.toLowerCase().includes(query.toLowerCase())
    })
    setCharacters(arr);

  }, [query, tempCharacters])

  const handleInputChange = event => {
    setQuery(event.target.value)
  }

  return (
    <div>
      <SearchForm handleInputChange={handleInputChange} query={query}/>
      <Container className="character-list">
        {characters.map(character => (
          <Container2 key={character.id}>
            <CharacterCard key={character.id} character={character} />
          </Container2>
        ))}
      </Container>
    </div>
  );
}
 
export default CharacterList;