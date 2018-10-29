import React, { useState, useEffect } from 'react';

const SomeRandomHooksComponent = () => {

  const [favoriteAnimal, setFavoriteAnimal] = useState('cat');

  useEffect(() => {
    document.title = `favorite animal: ${favoriteAnimal}`
  })

  return (
    <div className="random-component">
      <h1>My favorite animal is a {favoriteAnimal}!</h1>
      <br/>
      <button onClick={
        favoriteAnimal === 'cat' ?
        () => setFavoriteAnimal('dog') : () => setFavoriteAnimal('cat')
      }>
      Nope, I changed my mind.
      </button>
    </div>
  )
};

export default SomeRandomHooksComponent;
