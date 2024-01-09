import React, { useEffect, useState } from 'react';
import axios from 'axios';

function CharactersList({ searchValue, pageValue, pageLimit }) {
  const [dados, setDados] = useState(null);

  if(pageValue === ""){
    pageValue = 1;
  }

  useEffect(() => {

    if (searchValue === "") {
      axios.get(`https://rickandmortyapi.com/api/character?page=${pageValue}`)
        .then(response => {
          setDados(response.data);
          pageLimit(response.data.info.pages);
        })
        .catch(error => {
          console.error('Erro ao buscar dados:', error);
        });
    }
    else {
      axios.get(`https://rickandmortyapi.com/api/character?page=${pageValue}&name=${searchValue}`)
        .then(response => {
          setDados(response.data);
          pageLimit(response.data.info.pages);
        })
        .catch(error => {
          console.error('Erro ao buscar dados:', error);
        });
    }

  }, [searchValue, pageValue]);

  return (
    <div>
      {dados ? (
        <div className='characters'>{dados.results.map((character) => (
          <div className='character' key={character.id}>
            <img src={character.image} alt='character' />
            <div className='info'>
              <p><strong>{character.name}</strong></p>
              <p>{character.location.name}</p>
            </div>
          </div>

        ))}</div>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
}

export default CharactersList;
