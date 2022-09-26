import React, { useState } from "react";

const ChangeStateComponent = () => {
  const [image, setImage] = useState('https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Adorable-animal-cat-20787.jpg/1200px-Adorable-animal-cat-20787.jpg?20180518085718');

  const animalContainer = {
    padding: '20px',
    alignItems: 'center',
    backgroundColor: 'aqua'
  }

  const changeAnimal = () => {
      const dogURL = 'https://static.onecms.io/wp-content/uploads/sites/12/2015/04/dogs-pembroke-welsh-corgi-400x400.jpg';
      const catURL = 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Adorable-animal-cat-20787.jpg/1200px-Adorable-animal-cat-20787.jpg?20180518085718';
      
      image === catURL ? setImage(dogURL) : setImage(catURL);
  };


  return (
    <>
        <button onClick={changeAnimal} className='btn-add'>
          Change
        </button>
        <div style={animalContainer}>
          <img src={image} alt='animal' width={200}  height={150}/>
        </div>
    </>
  );
} 

export default ChangeStateComponent;