import React from 'react';

function Transformer(props) {

  const addTransformer = (transformer) => {
    return(
      <img
          className = 'transformer'
          src = {transformer.url}
          alt = {transformer.name}
          key = {transformer.id}
        />
    )
  }

  return (
    <div>
    {props.proptimusii.map(transformer => 
      addTransformer(transformer)
    )}
    </div>
  );
}

export default Transformer;
