import reactLogo from './assets/react.png';
import './App.css';
import { useRef } from 'react';

// JS: Function Declaration & Function Expression

// function aa () {

// }
// const app = function() {

// }

const App = () => {
  const inputRef = useRef(null);

  return (
    <div className="container">
      <img className="logo" src={reactLogo} />
      <div>
        <h2>TO DO APP</h2>
        <div>
          <input ref={inputRef} type="text" />
          <button onClick={() => console.log(inputRef)}>ADD TODO</button>
        </div>
      </div>
    </div>
  );
};

export default App;
