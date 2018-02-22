import React from 'react';

const fetchPokeTypes = async () => {
    const response = await fetch('http://localhost:3001/types')
    const json = await response.json();
    return json
}

export default fetchPokeTypes;