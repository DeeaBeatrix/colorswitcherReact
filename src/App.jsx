import './App.css';
import {useState} from 'react';

const App = () => {
  const colors = ['#AD636C', '#009B72', '#6761A8', '#347E8D', '#798186'];
  const [colorIndex, setColorIndex] = useState(0);
  const [numberOfReset, setNumberOfReset] = useState(0);


  const generateColor = () => {
    const newIndex = (colorIndex +1) % colors.length;
    setColorIndex(newIndex);
    contorizator();
  };

  const contorizator = () => {
    setNumberOfReset(prevCount => prevCount + 1);
  };

  const reset = () => {
    setNumberOfReset(0);
    setColorIndex(0);
    
  };

  const previous = () => {
    if (numberOfReset === 0) 
      return;
    const newIndex = (colorIndex - 1 + colors.length) % colors.length;
    setColorIndex(newIndex);
    setNumberOfReset(prevCount => (prevCount > 0 ? prevCount - 1 : 0));
  };

  return (
    <div className='color-switcher-container' style={{backgroundColor: numberOfReset === 0 ? '#AD636C' : colors[colorIndex]}}>
      <div className='color-switcher-text-container'>
        <h2 className='color-switcher-text-background'>Background Color:</h2>
        <h2 className='color-switcher-text-color' style={{color: numberOfReset === 0 ? '#AD636C' : colors[colorIndex]}}>{colors[colorIndex]}</h2>
      </div>
      <div className='prev-next'>
        <button onClick={previous} className='color-switcher-button-previous'>Previous</button>
        <button onClick={generateColor} className='color-switcher-button-next'>Next</button>
      </div>
      <button onClick={reset} className='button-reset'>Reset</button>

      <div>
        <p style={{backgroundColor: numberOfReset === 0 ? 'transparent' : colors[colorIndex]}} className='contorizator'>Change in color: {numberOfReset}</p>
      </div>

    </div>
  )
}

export default App
