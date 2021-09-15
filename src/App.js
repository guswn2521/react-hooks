import './App.css';

import { useInput } from './useInput';

const App = () => {
  const maxLen = (value) => value.length <= 10;
  const name = useInput("Ms.", maxLen);

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
