import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import CharacterCard from './CharacterCard';

export default function CharacterList() {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    const getCharacters = () => {
      axios.get(`https://rickandmortyapi.com/api/character/`)
      .then(response => {
        setCharacters(response.data.results);
      })
      .catch(error => {
        console.log('server error', error);
      })
    }

    getCharacters();
  }, []);

  return (
    <section className="character-list">
      {characters.map(character => (
        <div>
          <Link key={character.id} to={`/character/${character.id}`} ><CharacterCard key={character.id} character={character} /></Link>
        </div>
      ))}
    </section>
  );
}
