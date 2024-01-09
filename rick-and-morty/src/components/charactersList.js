import React, { useEffect, useState } from 'react';
import axios from 'axios';

function CharactersList({ searchValue, pageValue, pageLimit }) {
  const [dados, setDados] = useState(null);

  if(pageValue === ""){
    pageValue = 1;
  }

  useEffect(() => {

    if (searchValue === "") {
      // Aqui você pode fazer a requisição usando o Axios
      axios.get(`https://rickandmortyapi.com/api/character?page=${pageValue}`)
        .then(response => {
          console.log(response.data)
          // Se a requisição for bem-sucedida, atualize o estado com os dados recebidos
          setDados(response.data);
          pageLimit(response.data.info.pages);
        })
        .catch(error => {
          // Se houver algum erro na requisição, trate o erro aqui
          console.error('Erro ao buscar dados:', error);
        });
    }
    else {
      // Aqui você pode fazer a requisição usando o Axios
      axios.get(`https://rickandmortyapi.com/api/character?page=${pageValue}&name=${searchValue}`)
        .then(response => {
          console.log(response.data)
          // Se a requisição for bem-sucedida, atualize o estado com os dados recebidos
          setDados(response.data);
          pageLimit(response.data.info.pages);
        })
        .catch(error => {
          // Se houver algum erro na requisição, trate o erro aqui
          console.error('Erro ao buscar dados:', error);
        });
    }

  }, [searchValue, pageValue]); // O array vazio como segundo argumento do useEffect faz com que a requisição seja feita apenas uma vez, ao montar o componente

  return (
    <div>
      {/* Aqui você pode usar os dados recebidos na sua interface */}
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
