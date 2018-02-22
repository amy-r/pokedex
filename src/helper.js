import React from 'react';

export const getPokemonTypes = async () => {
  const response = await fetch('http://localhost:3001/types')
  const json = await response.json();
  console.log(json)

}