import React from 'react';
import ReactDOM from 'react-dom';


const ProjectThree = () => {
  return <div
    style={{
      textAlign: 'center'
    }}
  >
    <h1>This is project Three</h1>
    <p>Update project 1</p>
    <p>Update project 2</p>
  </div>
}

ReactDOM.render(
  <div>
    <ProjectThree />
  </div>,
  document.getElementById('root'),
);
