import React from 'react';
import ReactDOM from 'react-dom';


const ProjectOne = () => {
  return <div
    style={{
      textAlign: 'center'
    }}
  >
    <h1>This is project one</h1>
    <p>Update project 1</p>
    <p>Update project 2</p>
    <p>Update project 3</p>
    <p>Update project 4</p>
  </div>
}

ReactDOM.render(
  <div>
    <ProjectOne />
  </div>,
  document.getElementById('root'),
);
