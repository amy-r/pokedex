import React from 'react';

export const getPokemonTypes = () => {
  fetch('poke-api/types').then(response => response.json())
    .then(json => console.log(json));

}