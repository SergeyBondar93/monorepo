import React from 'react';
import ReactDOM from 'react-dom';


const ProjectOne = () => {
  return <div
    style={{
      textAlign: 'center'
    }}
  >
    <h1>This is project one</h1>
  </div>
}

ReactDOM.render(
  <div>
    <ProjectOne />
  </div>,
  document.getElementById('root'),
);
