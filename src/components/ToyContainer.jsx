import React from 'react';
import ToyCard from './ToyCard'

const ToyContainer = (props) => {

  // create a variable function to map over the data and render each object into a toyCard
  const renderToys = (props) => {
    return props.toys.map(el => <ToyCard toy={el} likeHandler={props.likeHandler} donateHandler={props.donateHandler}/>)
  }
  return(
    <div id="toy-collection">
      {renderToys(props)}
    </div>
  );
}

export default ToyContainer;
