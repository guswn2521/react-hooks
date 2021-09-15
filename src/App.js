import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    console.log(event.target);
  };
  return { value, onChange };
};

const App = () => {
  const name = useInput("Ms.")
  return (
    <div className="App">
      <h1>Hello</h1>
      <div style={{width: '100px' , height: '100px', backgroundColor: 'black' }}>
        <input placeholder="Name" type="text" {...name} />
      </div>
      
    </div>
  );
}

export default App;
