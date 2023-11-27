//functional component
import React from 'react';

export default function Panel({ index }) {
  const title = 'Panou Nou';

  return (
    <div>
      <h2>{title}</h2>
      <h3>Index {index} </h3>
      <p>Panel functional component</p>
    </div>
  );
}
