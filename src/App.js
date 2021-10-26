import './App.css';
import { useEffect, useRef, useState } from 'react';


const useClick = (onClick) => {
  // if (typeof onClick !== "function") {
  //   return;
  // }
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener('click', onClick);
    }
    return () => {
      if (element.current) {
        element.current.removeEventListener('click', onClick);
      }
    };
  }, []);
  return element;
}

const App = () => {
  const sayHello = () => console.log('say Hello');
  const title = useClick(sayHello);
  return (
    <div className="App">
      <div ref={title} >Hi</div>

    </div>
  );
}

export default App;

