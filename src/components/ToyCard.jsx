import React from 'react';

const ToyCard = props => {
  const toy = props.toy
  return (
    <div key={toy.id} id={toy.id} className="card">
      <h2>{toy.name}</h2>
      <img src={toy.image} alt={toy.name} className="toy-avatar" />
      <p>{toy.likes} Likes </p>
      <button className="like-btn">Like {'<3'}</button>
      <button onClick={() => props.deleteCharacter(toy.id)} className="del-btn">Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
