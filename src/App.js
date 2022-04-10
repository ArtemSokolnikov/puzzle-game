import { useState } from 'react';
import './App.css';
import Main from './components/Main';
import Player from './components/Player';
import Puzzle from './components/Puzzle';
import { UserContext } from './utils/context';

function App() {
  const [state, setState] = useState();

  const changeTheGame = (signUp) => {
    setState(signUp);
  }
  const changeTheUser = (signUp) => {
    setState(signUp);
  }


  switch (state) {
    case 'enterTheGame':
      return <Player changeTheUser={changeTheUser} />;
    case 'enterTheUser':
      return <Main />;
    default:
      return (

        <div className="App">
          <UserContext.Provider value={{
            changeTheGame
          }}>
            <Puzzle />
          </UserContext.Provider>
        </div>
      );
  }
}

export default App;
