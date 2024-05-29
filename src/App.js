import logo from './click.svg';
import './App.css';
import ThemeChanger from './components/ChangeTheme';
import Counter from './components/Counter';
import Button from './components/Button';
import { useState } from 'react';

const App = () => {

  const [numOfClicks, setNumOfClicks] = useState(0);

  const increment = () => {
    setNumOfClicks(numOfClicks + 1);
  }

  const decrement = () => {
    setNumOfClicks(numOfClicks - 1)
  }

  const counterReset = () => {
    setNumOfClicks(0);
  }

  return (
    <>
    <ThemeChanger />
    <h1>Click Counter</h1>
    <div className='App'>
        <img 
        src={logo} 
        className='App-logo' 
        alt='logo' />

        <div className='main-container'>

        <Counter
        numClicks={numOfClicks}
        />

      <div className='buttons'>  
        <Button
        text='Increment'
        isClick={true}
        handleClick={increment} 
        />

        <Button
        text='Decrement'
        isClick={true}
        handleClick={decrement} 
        />

      </div>

        <Button
        text='Reset'
        isClick={false}
        handleClick={counterReset} 
        />

        </div>
    </div>
    </>
  );
}

export default App;
