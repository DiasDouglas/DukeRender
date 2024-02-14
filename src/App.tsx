import React from 'react';
import { ReactP5Wrapper } from 'react-p5-wrapper';
import './App.css';
import sketch from './render/Render';

function App() {
  return (
    <div className="App">
        <ReactP5Wrapper sketch={sketch}></ReactP5Wrapper>
    </div>
  );
}

export default App;
