import './App.css';
import { useState } from 'react';


import { useInput } from './useInput';

const content = [
  {
    tab:"Section 1",
    content: "I'm the content of the Section 1",
  },
  {
    tab:"Section 2",
    content: "I'm the content of the Section 2",
  }
]

const useTabs = (initialTab, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  
  // allTabs가 비었거나 배열이아니면 return.
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex
  }
}

const App = () => {
  const {currentItem, changeItem} = useTabs(0, content);

  return (
    <div className="App">
      {content.map((section, index) => (
        <button onClick={() => changeItem(index)}>{section.tab}</button>
      ))}
      <div>{currentItem.content}</div>
    </div>
  );
}

export default App;
