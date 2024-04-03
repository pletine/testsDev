// import React from 'react';
// import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import {Test1} from './Test';

const root = document.getElementById('root');
root.innerHTML = `<h1>Test</h1>`;
const deviceMotionText = document.createElement("div");
const mouseMoveText = document.createElement("div");
root.appendChild(mouseMoveText);
root.appendChild(deviceMotionText);

window.addEventListener('devicemotion', e => {
  console.log("A voir");
  deviceMotionText.innerHTML = `<div>
      <p>Acceleration : ${e.acceleration.x} / ${e.acceleration.y} / ${e.acceleration.z}</p>
      <p>Rotation : ${e.rotationRate.alpha} / ${e.rotationRate.beta} / ${e.rotationRate.gamma}</p>
    </div>`;
});

window.addEventListener('mousemove', e => {
  console.log("Test");
  mouseMoveText.innerHTML = `<div>
    <p>Mouse position : ${e.clientX} / ${e.clientY}</p>
  </div>`;
});


// const root = React.createElement('div', { id: 'root' }, React.createElement(App), React.createElement(Test1));
// root.render(
//   <React.StrictMode>
//     <App />
//     <Test1 />
//   </React.StrictMode>
// );
