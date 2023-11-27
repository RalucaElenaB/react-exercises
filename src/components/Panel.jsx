//functional component
import React from 'react';

export default function Panel({ index }) {
  const title = 'Panou Nou';

  return (
    <div>
      <h3>{title}</h3>
      <h4>Index {index} </h4>
      <p>Panel functional component</p>
    </div>
  );
}
