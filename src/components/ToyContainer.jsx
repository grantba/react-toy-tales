import React from 'react';
import ToyCard from './ToyCard'

const ToyContainer = props => {
  return(
    <div id="toy-collection">
      {props.toys.length > 0 ? props.toys.map((character, index) => < ToyCard key={index} toy={character} deleteCharacter={props.deleteCharacter} />) : null}
    </div>
  );
}

export default ToyContainer;
